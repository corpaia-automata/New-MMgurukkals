"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Phone, Mail, Facebook, Instagram, Youtube, MapPin, MessageCircle } from "lucide-react";
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
        subtitle="Get in Touch"
        description="Reach out to us for appointments, inquiries, or to learn more about our services"
        useGradient={true}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* TOP SECTION - LEFT: CONTACT INFO, RIGHT: FORM */}
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-start mb-16">
            {/* LEFT COLUMN - CONTACT INFO */}
            <div className="space-y-8">
              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Get in <span className="text-orange-500">Touch.</span>
              </h2>

              {/* Chat to us */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded-full p-3 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500">
                  <MessageCircle size={20} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Chat to us</h3>
                  <p className="text-gray-500 text-sm mb-2">Our friendly team is here to help.</p>
                  <a
                    href="mailto:info@mmgurukkals.com"
                    className="text-gray-900 hover:text-orange-500 transition-colors text-base"
                  >
                    info@mmgurukkals.com
                  </a>
                </div>
              </div>

              {/* Visit us */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded-full p-3 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500">
                  <MapPin size={20} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Visit us</h3>
                  <p className="text-gray-500 text-sm mb-2">Come say hello at our office HQ.</p>
                  <div className="text-gray-900 text-base">
                    <div>Velliparambu, Calicut</div>
                    <div>Kozhikode-673008, Kerala</div>
                  </div>
                </div>
              </div>

              {/* Call us */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded-full p-3 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500">
                  <Phone size={20} className="text-gray-600 bg-or" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Call us</h3>
                  <p className="text-gray-500 text-sm mb-2">Mon-Sun from 9am to 6pm.</p>
                  <a
                    href="tel:+917306393768"
                    className="text-gray-900 hover:text-orange-500 transition-colors text-base"
                  >
                    +91 7012525067, 7356493768
                  </a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4">
                <h1 className="text-lg font-bold text-gray-900 mb-1">
                  Connect With Us
                </h1>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={36} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={36} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={36} />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="bg-orange-500 rounded-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.name ? "border-red-300" : "border-white/30"
                      } rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-white/90">{errors.name}</p>
                  )}
                </div>

                {/* Place */}
                <div>
                  <label
                    htmlFor="place"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Place
                  </label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                    placeholder="Enter your place"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.phone ? "border-red-300" : "border-white/30"
                      } rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-white/90">{errors.phone}</p>
                  )}
                </div>

                {/* Choose Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Choose Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.service ? "border-red-300" : "border-white/30"
                      } rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white`}
                  >
                    <option value="" className="text-gray-900">Select a Service</option>
                    <option value="kalari-marma" className="text-gray-900">Kalari Marma Chikilsa</option>
                    <option value="prasava-raksha" className="text-gray-900">Prasava Raksha</option>
                    <option value="premium-massage" className="text-gray-900">Premium Ayurvedic Massage</option>
                    <option value="panchakarma" className="text-gray-900">Panchakarma Treatment</option>
                    <option value="consultation" className="text-gray-900">General Consultation</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-white/90">{errors.service}</p>
                  )}
                </div>

                {/* Message - Full Width */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white resize-none"
                    placeholder="Tell us more about your concern"
                  />
                </div>

                {/* Submit Button - Full Width */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-white text-orange-500 font-medium rounded-lg hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
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
    </>
  );
}
