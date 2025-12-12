"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { HeroSection } from "@/components/hero-section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Reset form after successful validation
      setFormData({
        name: "",
        place: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Navbar />

      <HeroSection
        title="Contact Us"
        subtitle="Comprehensive Wellness"
        description="Explore our full range of authentic Ayurvedic treatments designed for your well-being"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* TOP SECTION - LEFT: CONTACT INFO, RIGHT: FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            {/* LEFT COLUMN - CONTACT INFO */}
            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Get in <span className="text-orange-500">Touch</span>
              </h2>

              {/* Phone */}
              <div className="flex items-center gap-3 mx-4">
                <div className="bg-orange-500 rounded-xl p-2 flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <a
                  href="tel:+917306393768"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-base md:text-lg"
                >
                  +91 73063 93768
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mx-4">
                <div className="bg-orange-500 rounded-xl p-2 flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <a
                  href="mailto:info@mmgurukkals.com"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-base md:text-lg"
                >
                  info@mmgurukkals.com
                </a>
              </div>

              {/* Subtitle */}
              <p className="text-gray-600 text-lg font-medium pt-4 mx-4">
                Connect with us
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 mx-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Place */}
              <div>
                <label
                  htmlFor="place"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Place
                </label>
                <input
                  type="text"
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your place"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Choose Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Choose Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.service ? "border-red-500" : "border-gray-300"
                    } rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                >
                  <option value="">Select a Service</option>
                  <option value="kalari-marma">Kalari Marma Chikilsa</option>
                  <option value="prasava-raksha">Prasava Raksha</option>
                  <option value="premium-massage">Premium Ayurvedic Massage</option>
                  <option value="panchakarma">Panchakarma Treatment</option>
                  <option value="consultation">General Consultation</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                )}
              </div>

              {/* Message - Full Width */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your concern"
                />
              </div>

              {/* Submit Button - Full Width */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* LOCATIONS SECTION */}
          <div className="mt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Locations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location 1 - Velliparambu, Calicut */}
              <div className="w-full">
                <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.5!2d75.775!3d11.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE1JzAwLjAiTiA3NcKwNDYnMzAuMCJF!5e0!3m2!1sen!2sin!4v1234567890&q=Mm+Gurukkal+Building,+Near+Medical+College+Hospital,+Vellipparambu,+Kozhikode-673008,+Kerala"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Velliparambu, Calicut Location"
                  ></iframe>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Velliparambu, Calicut
                </h3>
              </div>

              {/* Location 2 - Edavannapara, Malappuram */}
              <div className="w-full">
                <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.5!2d75.775!3d11.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTFCsDE1JzAwLjAiTiA3NcKwNDYnMzAuMCJF!5e0!3m2!1sen!2sin!4v1234567890&q=MM+Gurukkal,+Cheekkode+Road,+Edavannapara,+Kozhikode-673008,+Kerala"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Edavannapara, Malappuram Location"
                  ></iframe>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Edavannapara, Malappuram
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/917306393768"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}
