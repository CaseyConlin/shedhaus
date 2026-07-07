"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { H2 } from "./text/H2";
import { Body } from "./text/Body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ActionButton } from "./buttons/ActionButton";

export const ContactFooter = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission handler to be wired with your custom API or email library
    console.log("Form submitted successfully:", formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section className="relative w-full my-36 py-12 md:py-24 overflow-hidden bg-[#fafafa] ">
      {/* 1. Background Map Layer (Using responsive Next.js Image component with dummy source) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/pawling-ny-map.webp" // Replace with your actual map asset
          alt="Pawling NY Map Location"
          fill
          className="object-cover opacity-35 filter grayscale pointer-events-none"
          sizes="100vw"
          priority
        />
      </div>

      {/* 2. Floating Content Box Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 z-10 font-inter">
        <div className="bg-white/80 rounded-md shadow-2xl border border-neutral-100 p-6 md:p-12 lg:p-16 flex flex-col gap-10 md:gap-14">
          {/* Header Section (Centered across all viewports) */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <H2 className="text-primary" text="Let's Get You a Shed" />
            <Body
              text={[
                "Whether you're looking for a custom workshop or need to check our current inventory, we're here to help our neighbors find the perfect fit for their property.",
              ]}
            />
          </div>

          {/* Grid Layout: Stacks on mobile, splits 50/50 on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Column: Business Info & Contact List */}
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="space-y-6 md:space-y-8">
                {/* Business Hours Block */}
                <div className="flex items-start gap-4">
                  <div className="text-primary shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faClock} className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-primary font-montserrat font-bold tracking-wider">
                      Business Hours
                    </h3>
                    <p className="font-inter font-bold">
                      Monday - Friday 9am to 3pm
                    </p>
                    <p className="font-inter leading-relaxed mt-1">
                      Our sheds are always unlocked and pricing is available
                      24/7, so feel free to browse during non-business hours
                    </p>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-center gap-4">
                  <div className="text-primary shrink-0">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="h-5 w-5"
                    />
                  </div>
                  <p className="text-primary font-montserrat font-bold text-sm md:text-base">
                    816 Route 22 Pawling, NY
                  </p>
                </div>

                {/* Telephone */}
                <div className="flex items-center gap-4">
                  <div className="text-primary shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                  </div>
                  <a
                    href="tel:8458555989"
                    className="text-primary font-montserrat font-bold text-sm md:text-base hover:opacity-85 transition-opacity"
                  >
                    845 855 5989
                  </a>
                </div>

                {/* Email address */}
                <div className="flex items-center gap-4">
                  <div className="text-primary shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                  </div>
                  <a
                    href="mailto:info@theshedhaus.com"
                    className="text-primary font-montserrat font-bold text-sm md:text-base hover:opacity-85 transition-opacity"
                  >
                    info@theshedhaus.com
                  </a>
                </div>
              </div>

              {/* Social Anchors (Centered on Mobile, Left-aligned on Desktop) */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://facebook.com/theshedhaus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#860000] hover:scale-105 transition-transform"
                  aria-label="Facebook Profile"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="h-6 w-6 text-3xl"
                  />
                </a>
                <a
                  href="https://instagram.com/theshedhaus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#860000] hover:scale-105 transition-transform"
                  aria-label="Instagram Profile"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="h-6 w-6 text-3xl"
                  />
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Form Area */}
            <div className="w-full flex flex-col">
              <h3 className="text-primary font-montserrat text-lg font-bold tracking-tight mb-6">
                Request a Quote or Info
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block font-semibold tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full text-base bg-white border border-neutral-400 rounded-md px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                {/* Dynamic fields (Stacked on mobile, side-by-side on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="block font-semibold tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full text-base bg-white border border-neutral-400 rounded-md px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label
                      htmlFor="phone"
                      className="block font-semibold tracking-wider"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full text-base bg-white border border-neutral-400 rounded-md px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block font-semibold tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full text-base bg-white border border-neutral-400 rounded-md px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                  />
                </div>

                {/* Submit Action Block */}
                <div className="pt-2">
                  <ActionButton
                    text={isSubmitting ? "Sending..." : "Send"}
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
