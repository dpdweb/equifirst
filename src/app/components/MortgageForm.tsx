"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

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
  timeframe_to_buy: {
    value: string;
    label: string;
  };
  income: string;
  // Google Ads fields
  gclid: string;
  utm_source: string;
  utm_campaign: string;
  utm_medium: string;
  utm_term: string;
}

interface Errors {
  [key: string]: string;
}

export default function MortgageForm() {
  const searchParams = useSearchParams();
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
    timeframe_to_buy: { value: "", label: "" },
    income: "",
    gclid: "",
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
    utm_term: "",
  });

  // ✅ Extract Google Ads params from URL or cookies
  useEffect(() => {
    const fields = ["gclid", "utm_source", "utm_campaign", "utm_medium", "utm_term"] as const;
    const updated: Partial<FormData> = {};

    fields.forEach((field) => {
      const paramVal = searchParams.get(field);
      if (paramVal) {
        updated[field] = paramVal;
        document.cookie = `${field}=${encodeURIComponent(
          paramVal
        )}; path=/; max-age=${60 * 60 * 24 * 30}`;
      } else {
        const cookieVal = document.cookie
          .split("; ")
          .find((row) => row.startsWith(field + "="))
          ?.split("=")[1];
        if (cookieVal) updated[field] = decodeURIComponent(cookieVal);
      }
    });

    if (Object.keys(updated).length > 0) {
      setFormData((prev) => ({ ...prev, ...updated }));
    }
  }, [searchParams]);

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation rules
  const validateStep = (): boolean => {
    const newErrors: Errors = {};

    if (step === 1) {
      if (!formData.first_name) newErrors.first_name = "First name is required";
      if (!formData.last_name) newErrors.last_name = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
      if (!formData.phone) newErrors.phone = "Phone is required";
      else if (!/^\+?\d{9,15}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number";
    }

    if (step === 2) {
      if (!formData.residency) newErrors.residency = "Residency status is required";
      if (!formData.applicant_oldest_age) newErrors.applicant_oldest_age = "Age is required";
      if (!formData.employment_type) newErrors.employment_type = "Employment type is required";
      if (!formData.property_status) newErrors.property_status = "Property status is required";
      if (!formData.property_value) newErrors.property_value = "Property value is required";
      if (!formData.area) newErrors.area = "Area is required";
      if (!formData.timeframe_to_buy.value)
        newErrors.timeframe_to_buy = "Timeframe to buy is required";
      if (!formData.income) newErrors.income = "Income is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };
  const handlePrev = () => setStep(step - 1);

  // ✅ Submit to Zapier API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      applicant_oldest_age: Number(formData.applicant_oldest_age),
      property_value: Number(formData.property_value),
      timeframe_to_buy: formData.timeframe_to_buy.value,
    };

    try {
      const res = await fetch("/zapapi/submit", {
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
          <h2 className="text-2xl font-bold text-ef-blue">Thank you!</h2>
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
              <div
                key={s}
                className={`flex flex-col items-center flex-1 ${
                  step !== s ? "hidden sm:flex" : "flex"
                }`}
              >
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
                {(["first_name", "last_name", "email"] as const).map(
                  (field) => (
                    <div key={field}>
                      <p className="font-semibold capitalize mb-2">
                        {field.replace("_", " ")}
                      </p>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field.replace("_", " ")}
                        className="w-full px-4 py-3 bg-gray-50 text-black text-lg border-0 focus:outline-none focus:ring-0"
                      />
                      {errors[field] && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  )
                )}

                <div>
                  <p className="font-semibold capitalize mb-2">Phone</p>
                  <PhoneInput
                    country={"ae"}
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, phone: value }))
                    }
                    inputClass="!w-full !px-12 !py-3 !bg-gray-50 !text-black !text-lg !border-0 focus:!ring-0"
                    buttonClass="!border-0"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                  )}
                </div>

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
                  <p className="font-semibold mb-2">What is your Resident Status?</p>
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
                  <p className="font-semibold mb-2">Oldest applicant age</p>
                  <div className="flex">
                    <input
                      type="number"
                      name="applicant_oldest_age"
                      value={formData.applicant_oldest_age}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 bg-gray-50 text-black text-lg border-0 focus:outline-none focus:ring-0 rounded-l-lg"
                    />
                    <span className="bg-gray-200 px-4 py-2 rounded-r-lg flex items-center">
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
                <p className="font-semibold mb-2">Which one best describes you?</p>
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
                  <p className="text-red-500 text-sm">
                    {errors.employment_type}
                  </p>
                )}

                {/* Property Status */}
                <p className="font-semibold mb-2">Property status?</p>
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
                  <p className="text-red-500 text-sm">
                    {errors.property_status}
                  </p>
                )}

                {/* Property Value */}
                <div>
                  <p className="font-semibold mb-2">Property value</p>
                  <div className="flex">
                    <input
                      type="number"
                      name="property_value"
                      value={formData.property_value}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 bg-gray-50 text-black text-lg border-0 focus:outline-none focus:ring-0 rounded-l-lg"
                    />
                    <span className="bg-gray-200 px-4 py-2 rounded-r-lg flex items-center">
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
                  <p className="font-semibold mb-2">Area</p>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 text-black text-lg border-0 focus:outline-none focus:ring-0 rounded-lg"
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

                {/* Timeframe to Buy */}
                <div>
                  <p className="font-semibold mb-2">Timeframe to Buy</p>
                  <select
                    name="timeframe_to_buy"
                    value={formData.timeframe_to_buy.value || ""}
                    onChange={(e) => {
                      const { value, options, selectedIndex } = e.target;
                      const label = options[selectedIndex].text;
                      setFormData((prev) => ({
                        ...prev,
                        timeframe_to_buy: { value, label },
                      }));
                    }}
                    className="w-full px-4 py-3 bg-gray-50 text-black text-lg border-0 focus:outline-none focus:ring-0 rounded-lg"
                  >
                    <option value="">Choose a Timeframe To Buy</option>
                    <option value="+4">&lt; 1 month</option>
                    <option value="+3">1–3 months</option>
                    <option value="+2">3–6 months</option>
                    <option value="+0">Just exploring</option>
                  </select>
                  {errors.timeframe_to_buy && (
                    <p className="text-red-500 text-sm">
                      {errors.timeframe_to_buy}
                    </p>
                  )}
                </div>

                {/* Income */}
                <div>
                  <p className="font-semibold mb-2">Monthly Income</p>
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    placeholder="Enter value in AED"
                    className="w-full px-4 py-3 bg-gray-50 text-black text-lg border-0 focus:outline-none focus:ring-0 rounded-lg"
                  />
                  {errors.income && (
                    <p className="text-red-500 text-sm mt-2">{errors.income}</p>
                  )}
                </div>

                {/* Navigation */}
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

            {/* Step 3 - Review */}
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
                    {formData.applicant_oldest_age}
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
                  <p>
                    <strong>Timeframe to Buy:</strong>{" "}
                    {formData.timeframe_to_buy.label}
                  </p>
                  <p>
                    <strong>Income:</strong> {formData.income}{" "}
                    {formData.currency}
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
