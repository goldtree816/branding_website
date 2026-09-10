import React, { useState } from "react";
import "../styles/form.css";

const SERVICE_OPTIONS = [
  {
    id: "service1",
    value: "Farm Website Design",
    label: "Farm Website Design",
  },
  {
    id: "service2",
    value: "Online Farm Store",
    label: "Online Farm Store / Product Ordering",
  },
  {
    id: "service3",
    value: "Farm Branding",
    label: "Farm Branding & Visual Identity",
  },
  {
    id: "service4",
    value: "Online Customer Connection",
    label: "Online Customer Connection",
  },
  {
    id: "service5",
    value: "Farm Product Promotion",
    label: "Farm Product Promotion & Marketing",
  },
  {
    id: "service6",
    value: "Farm Story & Content",
    label: "Farm Story & Content Creation",
  },
  {
    id: "service7",
    value: "Social Media Support",
    label: "Social Media & Digital Marketing",
  },
  {
    id: "service8",
    value: "Website Support",
    label: "Website Maintenance & Support",
  },
  {
    id: "service9",
    value: "Not sure",
    label:
      "Not sure, I'd love to discuss my farm and find the right solution",
  },
];

const initialFormState = {
  FirstName: "",
  LastName: "",
  Email: "",
  FarmName: "",
  Location: "",
  PhoneNumber: "",
  FarmBrief: "",
  FarmStage: "",
};

export default function FarmerContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceError, setServiceError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (value) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );

    setServiceError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setServiceError("Please select one or more services");
      return;
    }

    const payload = {
      ...formData,
      services: selectedServices,
    };

    console.log("Farm inquiry submitted:", payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 space-y-6"
    >

      {/* ================= PERSONAL DETAILS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <label
          htmlFor="FirstName"
          className="flex flex-col gap-1 text-sm font-medium"
        >
          First Name:

          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            placeholder="Please provide your first name"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>

        <label
          htmlFor="LastName"
          className="flex flex-col gap-1 text-sm font-medium"
        >
          Last Name:

          <input
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            placeholder="Please provide your last name"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>

        <label
          htmlFor="Email"
          className="flex flex-col gap-1 text-sm font-medium"
        >
          Email:

          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Please provide your email address"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>

        <label
          htmlFor="PhoneNumber"
          className="flex flex-col gap-1 text-sm font-medium">
          Phone Number:

          <input
            type="tel"
            id="PhoneNumber"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
            placeholder="Please provide your phone number"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>

        {/* Farm Name */}
        <label
          htmlFor="FarmName"
          className="flex flex-col gap-1 text-sm font-medium"
        >
          Farm Name:

          <input
            type="text"
            id="FarmName"
            name="FarmName"
            value={formData.FarmName}
            onChange={handleChange}
            placeholder="Please provide your farm name"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>

        {/* Farm Location */}
        <label
          htmlFor="Location"
          className="flex flex-col gap-1 text-sm font-medium"
        >
          Farm Location:

          <input
            type="text"
            id="Location"
            name="Location"
            value={formData.Location}
            onChange={handleChange}
            placeholder="Village, District, Province"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>
      </div>

      {/* ================= FARM DESCRIPTION ================= */}
      <label
        htmlFor="FarmBrief"
        className="flex flex-col gap-1 text-sm font-medium"
      >
        Tell us about your farm:

        <textarea
          id="FarmBrief"
          name="FarmBrief"
          value={formData.FarmBrief}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your farm, products, crops, livestock, and what you currently offer..."
          className="border rounded px-3 py-2 text-sm font-normal"
        />
      </label>

      {/* ================= FARM STAGE ================= */}
      <label
        htmlFor="FarmStage"
        className="flex flex-col gap-1 text-sm font-medium"
      >
        What stage is your farm business in?

        <select
          id="FarmStage"
          name="FarmStage"
          value={formData.FarmStage}
          onChange={handleChange}
          className="border rounded px-3 py-2 text-sm font-normal"
        >
          <option value="">Select your farm stage</option>
          <option value="Starting Out">Starting Out</option>
          <option value="Growing">Growing</option>
          <option value="Established">Established</option>
          <option value="Expanding">Expanding</option>
        </select>
      </label>

      {/* ================= SERVICES ================= */}
      <fieldset className="space-y-2">

        <legend className="text-sm font-semibold uppercase tracking-wide">
          What can we help you with? *
        </legend>

        {SERVICE_OPTIONS.map((option) => (
          <div
            key={option.id}
            className="flex items-start gap-2"
          >
            <input
              type="checkbox"
              id={option.id}
              name="service"
              value={option.value}
              checked={selectedServices.includes(option.value)}
              onChange={() =>
                handleServiceToggle(option.value)
              }
              className="mt-1"
            />

            <label
              htmlFor={option.id}
              className="text-sm"
            >
              {option.label}
            </label>
          </div>
        ))}

        {serviceError && (
          <span className="block text-sm text-red-600">
            {serviceError}
          </span>
        )}
      </fieldset>

      {/* ================= ADDITIONAL MESSAGE ================= */}
      <label
        htmlFor="AdditionalMessage"
        className="flex flex-col gap-1 text-sm font-medium"
      >
        Is there anything else you'd like us to know?

        <textarea
          id="AdditionalMessage"
          name="AdditionalMessage"
          rows={4}
          placeholder="Tell us about your goals, requirements, products, or any questions you have..."
          className="border rounded px-3 py-2 text-sm font-normal"
        />
      </label>

      {/* ================= SUBMIT ================= */}
      <button
        type="submit"
        className="rounded bg-black text-white px-4 py-2 text-sm font-medium"
      >
        SEND FARM INQUIRY
      </button>

    </form>
  );
}