"use client";
import { useState } from "react";

interface FormData {
  lead_source: string;
  submitted_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  residency: string;
  applicant_oldest_age: string;
  employment_type: string;
  property_status: string;
  property_value: string;
  currency: string;
  area: string;
}

interface Errors {
  [key: string]: string;
}

export default function MortgageForm() {
  const titles = ["", "Personal Info", "Property Information", "Review & Submit"];
  const [step, setStep] = useState<number>(1);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const [formData, setFormData] = useState<FormData>({
    lead_source: "equifirst.ae",
    submitted_at: new Date().toISOString(),
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    residency: "",
    applicant_oldest_age: "",
    employment_type: "",
    property_status: "",
    property_value: "",
    currency: "AED",
    area: "",
  });

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation rules
  const validateStep = (): boolean => {
    const newErrors: Errors = {};

    if (step === 1) {
      if (!formData.first_name) newErrors.first_name = "First name is required";
      if (!formData.last_name) newErrors.last_name = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Enter a valid email";
      if (!formData.phone) newErrors.phone = "Phone is required";
      else if (!/^\+?\d{9,15}$/.test(formData.phone))
        newErrors.phone = "Enter a valid phone number";
    }

    if (step === 2) {
      if (!formData.residency) newErrors.residency = "Residency status is required";
      if (!formData.applicant_oldest_age)
        newErrors.applicant_oldest_age = "Age is required";
      if (!formData.employment_type)
        newErrors.employment_type = "Employment type is required";
      if (!formData.property_status)
        newErrors.property_status = "Property status is required";
      if (!formData.property_value)
        newErrors.property_value = "Property value is required";
      if (!formData.area) newErrors.area = "Area is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };
  const handlePrev = () => setStep(step - 1);

  // Submit to Zapier
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      lead_source: formData.lead_source,
      submitted_at: formData.submitted_at,
      contact: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
      },
      residency: formData.residency,
      applicant_oldest_age: Number(formData.applicant_oldest_age),
      employment_type: formData.employment_type,
      property: {
        status: formData.property_status,
        value: Number(formData.property_value),
        currency: formData.currency,
        area: formData.area,
      },
    };

    try {
      const res = await fetch("/api/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Something went wrong while submitting");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  if (success) {
    return (
      <div className="w-full md:w-[65%]">
      <div className="p-8 text-center bg-[#eaf4f7] rounded-xl">
        <h2 className="text-2xl font-bold text-ef-blue"> Thank you!</h2>
        <p className="mt-2">Your information has been submitted successfully.</p>
      </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[65%]">
      <div className="bg-[#eaf4f7] p-8 md:rounded-2xl">
        <div className="p-6 rounded-xl">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step === s
                      ? "bg-ef-blue text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {s}
                </div>
                <span
                  className={`mt-2 ${
                    step === s ? "text-black font-bold" : "text-gray-500"
                  }`}
                >
                  {titles[s]}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                {(["first_name", "last_name", "email", "phone"] as const).map(
                  (field) => (
                    <div key={field}>
                      <p className="font-semibold capitalize">
                        {field.replace("_", " ")}
                      </p>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field.replace("_", " ")}
                        className="w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none"
                      />
                      {errors[field] && (
                        <p className="text-red-500 text-sm">{errors[field]}</p>
                      )}
                    </div>
                  )
                )}

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn px-6 py-2 bg-ef-blue text-white rounded-lg"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4">
                {/* Residency */}
                <div>
                  <p className="font-semibold">What is your Resident Status?</p>
                  <div className="flex flex-wrap gap-2">
                    {["UAE National", "Non-UAE Resident", "Expat"].map(
                      (status) => (
                        <button
                          type="button"
                          key={status}
                          onClick={() =>
                            setFormData({ ...formData, residency: status })
                          }
                          className={`px-4 py-2 rounded ${
                            formData.residency === status
                              ? "btn bg-ef-blue text-white"
                              : "btn btn-outlined-blue"
                          }`}
                        >
                          {status}
                        </button>
                      )
                    )}
                  </div>
                  {errors.residency && (
                    <p className="text-red-500 text-sm">{errors.residency}</p>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label className="block font-semibold mb-1">
                    Oldest applicant age
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      name="applicant_oldest_age"
                      value={formData.applicant_oldest_age}
                      onChange={handleChange}
                      className="flex-1 border p-2 rounded-l-lg"
                    />
                    <span className="bg-gray-200 px-4 py-2 rounded-r-lg">
                      Years
                    </span>
                  </div>
                  {errors.applicant_oldest_age && (
                    <p className="text-red-500 text-sm">
                      {errors.applicant_oldest_age}
                    </p>
                  )}
                </div>

                {/* Employment */}
                <p className="font-semibold">Which one best describes you?</p>
                <div className="flex gap-2">
                  {["Salaried", "Self-employed"].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() =>
                        setFormData({ ...formData, employment_type: type })
                      }
                      className={`px-4 py-2 rounded ${
                        formData.employment_type === type
                          ? "btn bg-ef-blue text-white"
                          : "btn btn-outlined-blue"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.employment_type && (
                  <p className="text-red-500 text-sm">{errors.employment_type}</p>
                )}

                {/* Property Status */}
                <p className="font-semibold">Property status?</p>
                <div className="flex gap-2 flex-wrap">
                  {["Completed", "Under-construction", "Land"].map((status) => (
                    <button
                      type="button"
                      key={status}
                      onClick={() =>
                        setFormData({ ...formData, property_status: status })
                      }
                      className={`px-4 py-2 rounded ${
                        formData.property_status === status
                          ? "btn bg-ef-blue text-white"
                          : "btn btn-outlined-blue"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
                {errors.property_status && (
                  <p className="text-red-500 text-sm">{errors.property_status}</p>
                )}

                {/* Property Value */}
                <div>
                  <label className="block font-semibold mb-1">
                    Property value
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      name="property_value"
                      value={formData.property_value}
                      onChange={handleChange}
                      className="flex-1 border p-2 rounded-l-lg"
                    />
                    <span className="bg-gray-200 px-4 py-2 rounded-r-lg">
                      {formData.currency}
                    </span>
                  </div>
                  {errors.property_value && (
                    <p className="text-red-500 text-sm">
                      {errors.property_value}
                    </p>
                  )}
                </div>

                {/* Area */}
                <div>
                  <label className="block font-semibold mb-1">Area</label>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg"
                  >
                    <option value="">Choose an area</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                    <option>Ajman</option>
                    <option>Ras Al Khaimah</option>
                    <option>Al Ain</option>
                    <option>Umm Al Quwain</option>
                    <option>Khor Fakkan</option>
                    <option>Jebel Ali</option>
                    <option>Hatta</option>
                  </select>
                  {errors.area && (
                    <p className="text-red-500 text-sm">{errors.area}</p>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-2 bg-gray-400 text-white rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 btn bg-ef-blue text-white rounded-lg"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - Preview */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Review your details</h3>
                <div className="bg-white p-4 rounded-lg shadow space-y-2">
                  <p>
                    <strong>Name:</strong> {formData.first_name}{" "}
                    {formData.last_name}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {formData.phone}
                  </p>
                  <p>
                    <strong>Residency:</strong> {formData.residency}
                  </p>
                  <p>
                    <strong>Oldest Applicant Age:</strong>{" "}
                    {formData.applicant_oldest_age} years
                  </p>
                  <p>
                    <strong>Employment:</strong> {formData.employment_type}
                  </p>
                  <p>
                    <strong>Property Status:</strong> {formData.property_status}
                  </p>
                  <p>
                    <strong>Property Value:</strong> {formData.property_value}{" "}
                    {formData.currency}
                  </p>
                  <p>
                    <strong>Area:</strong> {formData.area}
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-2 bg-gray-400 text-white rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
