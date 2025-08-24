"use client";
import { useState } from "react";


export default function MortgageForm() {
    const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: "",          // Step 1
    property_status: "",  // Step 1
    property_value: "",   // Step 2
    currency: "AED",      // Step 2
    location: "",         // Step 2
    full_name: "",        // Step 3
    email: "",            // Step 3
    phone: ""             // Step 3
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://your-laravel-site.com/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert("Form submitted successfully!");
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="bg-teal-50 w-full md:w-2/3 p-8 rounded-lg hidden md:hidden">
      
      <div className=" bg-blue-50 p-6 rounded-xl shadow-md">
      <div className="flex justify-between mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`flex-1 text-center ${step === s ? "font-bold text-blue-600" : "text-gray-500"}`}>
            Step {s}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="font-semibold">What are you looking for?</p>
            <div className="flex gap-2">
              <button type="button" onClick={() => setFormData({ ...formData, purpose: "buy" })} 
                className={`px-4 py-2 rounded ${formData.purpose === "buy" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
                I’m buying a property
              </button>
              <button type="button" onClick={() => setFormData({ ...formData, purpose: "refinance" })} 
                className={`px-4 py-2 rounded ${formData.purpose === "refinance" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
                I’m refinancing my home
              </button>
            </div>

            <p className="font-semibold">What is the property status?</p>
            <div className="flex gap-2">
              {["Completed", "Under-construction", "Land"].map((status) => (
                <button type="button" key={status}
                  onClick={() => setFormData({ ...formData, property_status: status })}
                  className={`px-4 py-2 rounded ${formData.property_status === status ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
                  {status}
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button type="button" onClick={handleNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">What is the value of the property?</label>
              <div className="flex">
                <input type="number" name="property_value" value={formData.property_value} 
                  onChange={handleChange} className="flex-1 border p-2 rounded-l-lg" />
                <span className="bg-gray-200 px-4 py-2 rounded-r-lg">{formData.currency}</span>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Where is the property located?</label>
              <select name="location" value={formData.location} onChange={handleChange} className="w-full border p-2 rounded-lg">
                <option value="">Choose an area</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="px-6 py-2 bg-gray-400 text-white rounded-lg">
                Back
              </button>
              <button type="button" onClick={handleNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 (User Info) */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} className="w-full border p-2 rounded-lg" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded-lg" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded-lg" />
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="px-6 py-2 bg-gray-400 text-white rounded-lg">
                Back
              </button>
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>

    </div>
  );
}
