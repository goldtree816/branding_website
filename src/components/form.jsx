import React from 'react'
import { useState } from "react";
import '../styles/form.css'

const SERVICE_OPTIONS = [
  { id: "service1", value: "Custom Website Design", label: "Custom Website Design" },
  { id: "service2", value: "Custom Brand Identity (Icon/Illustrative branding)", label: "Custom Brand Identity (Icon/Illustrative branding)" },
  { id: "service3", value: "Custom Brand Identity (Wordmark branding)", label: "Custom Brand Identity (Wordmark branding)" },
  { id: "service4", value: "Flodesk Email Marketing Set Up", label: "Flodesk Email Marketing Set Up" },
  { id: "service5", value: "Copywriting/SEO", label: "Copywriting/SEO" },
  { id: "service6", value: "Design Intensives", label: "Design Intensives" },
  { id: "service7", value: "Ongoing Studio Support", label: "Ongoing Studio Support" },
  { id: "service8", value: "Squarespace Speed Session (Power Hour)", label: "Squarespace Speed Session (Power Hour)" },
  {
    id: "service9",
    value: "Not sure",
    label: "Not sure, I'd love to chat more about the details and which package is right for me",
  },
];

const initialFormState = {
  FirstName: "",
  LastName: "",
  Email: "",
  BusinessName: "",
  WebsiteLink: "",
  InstagramLink: "",
  BussBrief: "",
  StageofBusiness: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceError, setServiceError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (value) => {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setServiceError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setServiceError("Please select one or more");
      return;
    }

    const payload = { ...formData, service: selectedServices };
    console.log("Form submitted:", payload);
    // Wire this up to your actual submission endpoint.
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label htmlFor="FirstName" className="flex flex-col gap-1 text-sm font-medium">
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

        <label htmlFor="LastName" className="flex flex-col gap-1 text-sm font-medium">
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

        <label htmlFor="Email" className="flex flex-col gap-1 text-sm font-medium">
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

        <label htmlFor="BusinessName" className="flex flex-col gap-1 text-sm font-medium">
          Business Name:
          <input
            type="text"
            id="BusinessName"
            name="BusinessName"
            value={formData.BusinessName}
            onChange={handleChange}
            placeholder="Please provide your business/brand name"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>

        <label htmlFor="WebsiteLink" className="flex flex-col gap-1 text-sm font-medium">
          Website Link (if you have one):
          <input
            type="url"
            id="WebsiteLink"
            name="WebsiteLink"
            value={formData.WebsiteLink}
            onChange={handleChange}
            placeholder="https://"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>

        <label htmlFor="InstagramLink" className="flex flex-col gap-1 text-sm font-medium">
          Instagram Link or handle:
          <input
            type="text"
            id="InstagramLink"
            name="InstagramLink"
            value={formData.InstagramLink}
            onChange={handleChange}
            placeholder="@yourhandle"
            className="border rounded px-3 py-2 text-sm font-normal"
          />
        </label>
      </div>

      <label htmlFor="BussBrief" className="flex flex-col gap-1 text-sm font-medium">
        Give me a description about your business:
        <textarea
          id="BussBrief"
          name="BussBrief"
          value={formData.BussBrief}
          onChange={handleChange}
          rows={3}
          className="border rounded px-3 py-2 text-sm font-normal"
        />
      </label>

      <label htmlFor="StageofBusiness" className="flex flex-col gap-1 text-sm font-medium">
        What stage of business are you in?
        <input
          type="text"
          id="StageofBusiness"
          name="StageofBusiness"
          value={formData.StageofBusiness}
          onChange={handleChange}
          className="border rounded px-3 py-2 text-sm font-normal"
        />
      </label>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold uppercase tracking-wide">
          Which service are you most interested in? *
        </legend>

        {SERVICE_OPTIONS.map((option) => (
          <div key={option.id} className="flex items-start gap-2">
            <input
              type="checkbox"
              id={option.id}
              name="service"
              value={option.value}
              checked={selectedServices.includes(option.value)}
              onChange={() => handleServiceToggle(option.value)}
              className="mt-1"
            />
            <label htmlFor={option.id} className="text-sm">
              {option.label}
            </label>
          </div>
        ))}

        {serviceError && (
          <span className="block text-sm text-red-600">{serviceError}</span>
        )}
      </fieldset>

      <button
        type="submit"
        className="rounded bg-black text-white px-4 py-2 text-sm font-medium"
      >
        Submit
      </button>
    </form>
  );
}

