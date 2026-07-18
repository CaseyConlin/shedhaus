"use client";
import { useGoogleReCaptcha } from "@google-recaptcha/react";

import React, { useState, useRef, useEffect } from "react";
import { ActionButton } from "@/components/buttons/ActionButton";
import { H2 } from "./text/H2";
import { Caret } from "@/components/Caret";

interface DropdownState {
  structureType: boolean;
  style: boolean;
  dimensions: boolean;
  primaryUse: boolean;
  bestTime: boolean;
}

const STRUCTURE_TYPES = [
  "A-Frame Shed",
  "High Barn",
  "Quaker Shed",
  "Cottage",
  "Custom Build",
];
const STYLE_OPTIONS = [
  "Vinyl Siding",
  "T1-11 Wood Siding",
  "Premium Lap Siding",
  "Board & Batten",
];
const DIMENSION_OPTIONS = [
  "8' x 10'",
  "10' x 12'",
  "10' x 16'",
  "12' x 16'",
  "12' x 20'",
  "Custom Size",
];
const PRIMARY_USES = [
  "Storage",
  "Workshop",
  "Livestock shelter",
  "Pool House",
  "Other",
];
const TIME_OPTIONS = [
  "Morning (9am - 12pm)",
  "Afternoon (12pm - 3pm)",
  "Anytime business hours",
];

export const RequestAQuoteForm: React.FC = () => {
  const googleReCaptcha = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    structureType: "",
    style: "",
    dimensions: "",
    primaryUse: "",
    streetAddress: "",
    groundCondition: "Level Grass",
    siteAccess: "Clear path for truck",
    foundation: "Stone pad installation needed",
    name: "",
    bestTime: "",
    email: "",
    phone: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    structureType: false,
    style: false,
    dimensions: false,
    primaryUse: false,
    bestTime: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Refs for handling clicks outside dropdowns to close them gracefully
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setDropdownOpen({
          structureType: false,
          style: false,
          dimensions: false,
          primaryUse: false,
          bestTime: false,
        });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownSelect = (field: keyof DropdownState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setDropdownOpen((prev) => ({ ...prev, [field]: false }));
  };

  const toggleDropdown = (field: keyof DropdownState) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioSelect = (
    group: "groundCondition" | "siteAccess" | "foundation",
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [group]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (!googleReCaptcha?.executeV3) {
        console.error("reCAPTCHA has not fully loaded yet. Please try again.");
        return;
      }
      // Get reCAPTCHA v3 token (automatic, no user interaction)
      const token = await googleReCaptcha.executeV3("contact_form_submit");

      const response = await fetch("/api/request-a-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaValue: token,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        resetForm();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Error sending quote request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error sending quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      structureType: "",
      style: "",
      dimensions: "",
      primaryUse: "",
      streetAddress: "",
      groundCondition: "Level Grass",
      siteAccess: "Clear path for truck",
      foundation: "Stone pad installation needed",
      name: "",
      bestTime: "",
      email: "",
      phone: "",
    });
    setSubmitSuccess(false);
    setErrorMessage("");
  };

  return (
    <section className="w-full bg-white text-black px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {submitSuccess ? (
          <div className="text-center py-16 px-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h2 className="text-2xl font-bold text-[#860000] mb-4">
              Quote Request Received!
            </h2>
            <p className="text-neutral-700 max-w-md mx-auto mb-8">
              Thank you for reaching out. A team member from The Shed Haus will
              review your project specs and contact you with custom estimates.
            </p>
            <button
              onClick={resetForm}
              className="bg-[#860000] hover:bg-[#a00000] text-white font-bold py-3 px-8 rounded-md transition-all"
            >
              Request Another Quote
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-10 font-sans"
          >
            {/* ========================================================
                SECTION 1: Project Basics
                ======================================================== */}
            <p>
              Fill out the information below for instant access to pricing and
              follow-up from our team. We will review your project specs and
              contact you with custom estimates.
            </p>
            <div className="space-y-1">
              <H2 text="Project Basics" className="text-primary text-start" />

              {/* Grid layout adapts to columns on desktop matching shRequestAQuote.png */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Structure Type Select Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("structureType")}
                    className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-left flex items-center justify-between text-base"
                  >
                    <span
                      className={
                        formData.structureType
                          ? "text-neutral-900"
                          : "text-neutral-500"
                      }
                    >
                      {formData.structureType || "Structure type"}
                    </span>
                    <Caret isOpen={dropdownOpen.structureType} />
                  </button>
                  {dropdownOpen.structureType && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-md shadow-lg z-50 overflow-hidden">
                      {STRUCTURE_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            handleDropdownSelect("structureType", type)
                          }
                          className="w-full text-left px-4 py-3 hover:bg-neutral-50 text-sm transition-colors"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Style Select Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("style")}
                    className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-left flex items-center justify-between text-base"
                  >
                    <span
                      className={
                        formData.style ? "text-neutral-900" : "text-neutral-500"
                      }
                    >
                      {formData.style || "Style"}
                    </span>
                    <Caret isOpen={dropdownOpen.style} />
                  </button>
                  {dropdownOpen.style && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-md shadow-lg z-50 overflow-hidden">
                      {STYLE_OPTIONS.map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => handleDropdownSelect("style", style)}
                          className="w-full text-left px-4 py-3 hover:bg-neutral-50 text-sm transition-colors"
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dimensions Select Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("dimensions")}
                    className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-left flex items-center justify-between text-base"
                  >
                    <span
                      className={
                        formData.dimensions
                          ? "text-neutral-900"
                          : "text-neutral-500"
                      }
                    >
                      {formData.dimensions || "Dimensions"}
                    </span>
                    <Caret isOpen={dropdownOpen.dimensions} />
                  </button>
                  {dropdownOpen.dimensions && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-md shadow-lg z-50 overflow-hidden">
                      {DIMENSION_OPTIONS.map((dim) => (
                        <button
                          key={dim}
                          type="button"
                          onClick={() =>
                            handleDropdownSelect("dimensions", dim)
                          }
                          className="w-full text-left px-4 py-3 hover:bg-neutral-50 text-sm transition-colors"
                        >
                          {dim}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Primary Use Dropdown (Expanded view simulation matching shRequestAQuote.png) */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("primaryUse")}
                    className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-left flex items-center justify-between text-base"
                  >
                    <span
                      className={
                        formData.primaryUse
                          ? "text-neutral-900"
                          : "text-neutral-500"
                      }
                    >
                      {formData.primaryUse || "Primary use"}
                    </span>
                    <Caret isOpen={dropdownOpen.primaryUse} />
                  </button>
                  {dropdownOpen.primaryUse && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-neutral-300 rounded-md shadow-md z-40 overflow-hidden flex flex-col">
                      {PRIMARY_USES.map((use) => (
                        <button
                          key={use}
                          type="button"
                          onClick={() =>
                            handleDropdownSelect("primaryUse", use)
                          }
                          className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 text-sm text-neutral-800 transition-colors"
                        >
                          {use}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ========================================================
                SECTION 2: Site and Delivery
                ======================================================== */}
            <div className="space-y-2">
              <H2
                text="Site and Delivery"
                className="text-primary text-start"
              />

              {/* Full-width address input */}
              <div className="w-full">
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Street address / Town"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-base placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                />
              </div>

              {/* Columns for Radio Group Selectors (Sits perfectly in responsive grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {/* Column 1: Ground Condition & Foundation */}
                <div className="space-y-6">
                  {/* Ground Condition Radio Set */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-neutral-900">
                      Ground Condition:
                    </h3>
                    <div className="space-y-2.5">
                      {[
                        "Level Grass",
                        "Sloped/uneven",
                        "Already have stone pad",
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() =>
                            handleRadioSelect("groundCondition", opt)
                          }
                          className="flex items-center gap-3 w-full text-left focus:outline-none group"
                        >
                          {/* Design-matching custom circle selector */}
                          <span className="w-4.5 h-4.5 rounded-full border border-neutral-400 flex items-center justify-center shrink-0">
                            {formData.groundCondition === opt && (
                              <span className="w-2.5 h-2.5 rounded-full bg-[#860000]" />
                            )}
                          </span>
                          <span className="text-neutral-800 text-[15px]">
                            {opt}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Foundation Radio Set */}
                  <div className="space-y-1 pt-2">
                    <h3 className="font-bold text-base text-neutral-900">
                      Foundation:
                    </h3>
                    <div className="space-y-2.5">
                      {[
                        "Stone pad installation needed",
                        "I will handle my own base",
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleRadioSelect("foundation", opt)}
                          className="flex items-center gap-3 w-full text-left focus:outline-none group"
                        >
                          <span className="w-4.5 h-4.5 rounded-full border border-neutral-400 flex items-center justify-center shrink-0">
                            {formData.foundation === opt && (
                              <span className="w-2.5 h-2.5 rounded-full bg-[#860000]" />
                            )}
                          </span>
                          <span className="text-neutral-800 text-[15px]">
                            {opt}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Site Access */}
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-neutral-900">
                    Site access:
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      "Clear path for truck",
                      "Narrow driveway",
                      "Limited overhead clearance",
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleRadioSelect("siteAccess", opt)}
                        className="flex items-center gap-3 w-full text-left focus:outline-none group"
                      >
                        <span className="w-4.5 h-4.5 rounded-full border border-neutral-400 flex items-center justify-center shrink-0">
                          {formData.siteAccess === opt && (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#860000]" />
                          )}
                        </span>
                        <span className="text-neutral-800 text-[15px]">
                          {opt}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                SECTION 3: Contact Info
                ======================================================== */}
            <div className="space-y-1">
              <H2 text="Contact Info" className="text-primary text-start" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Your Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-base placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                  />
                </div>

                {/* Best Time To Reach You Dropdown Select */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("bestTime")}
                    className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-left flex items-center justify-between text-base"
                  >
                    <span
                      className={
                        formData.bestTime
                          ? "text-neutral-900"
                          : "text-neutral-500"
                      }
                    >
                      {formData.bestTime || "Best time to reach you"}
                    </span>
                    <Caret isOpen={dropdownOpen.bestTime} />
                  </button>
                  {dropdownOpen.bestTime && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-md shadow-lg z-50 overflow-hidden">
                      {TIME_OPTIONS.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleDropdownSelect("bestTime", time)}
                          className="w-full text-left px-4 py-3 hover:bg-neutral-50 text-sm transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-base placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-neutral-300 rounded-md py-3.5 px-4 text-base placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                  />
                </div>
              </div>
            </div>

            {/* ========================================================
                Submit Button Area
                ======================================================== */}

            {/* Error Messages */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-700 text-sm">{errorMessage}</p>
              </div>
            )}

            <div className="pt-2">
              <ActionButton
                type="submit"
                disabled={isSubmitting}
                className=""
                text={isSubmitting ? "Sending Request..." : "Submit Request"}
              ></ActionButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default RequestAQuoteForm;
