"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full overflow-x-hidden">

        {/* TOP SECTION - HEADING & DESCRIPTION (CENTERED) */}
        <div className="text-center mb-10 md:mb-12">
          <h4 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul">
            Get in <span className="text-orange-500">Touch</span>
          </h4>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Share your details and our team will reach out to guide you with the
            right Ayurvedic treatment based on your concerns.
          </p>
        </div>

        {/* BOTTOM SECTION - LOGO LEFT, FORM RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start w-full min-w-0">

          {/* LEFT COLUMN - LOGO */}
          <div className="flex justify-center items-center w-full min-w-0 overflow-hidden">
            <div className="relative 
                w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]
                aspect-[4/3]
                overflow-hidden
                mx-auto
                flex-shrink-0">

              {/* Stable Glow BG - Contained */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-50 pointer-events-none"
                style={{
                  transform: 'scale(1.15)',
                  transformOrigin: 'center'
                }}></div>

              {/* Responsive Logo */}
              <div className="relative w-full h-full shadow-lg flex items-center justify-center p-6 sm:p-8 md:p-10">
                <Image
                  src="/gurukkals.png"
                  alt="MM Gurukkals Logo"
                  fill
                  className="object-contain z-10 shadow-lg"
                  sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 800px"
                />
              </div>
            </div>
          </div>



          {/* RIGHT COLUMN - FORM */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">

            {/* Name */}
            <div className="w-full min-w-0">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Name *
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-gray-800 outline-none py-3"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone */}
            <div className="w-full min-w-0">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                className="w-full border-b border-gray-300 focus:border-gray-800 outline-none py-3"
                placeholder="Your phone number"
              />
            </div>

            {/* Place */}
            <div className="w-full min-w-0">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Place *
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-gray-800 outline-none py-3"
                placeholder="Where are you from?"
              />
            </div>

            {/* Choose Service */}
            <div className="w-full min-w-0">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Choose Service *
              </label>
              <select
                className="w-full border-b border-gray-300 bg-transparent focus:border-gray-800 outline-none py-3"
              >
                <option>Select a Service</option>
                <option>Kalari Marma Chikilsa</option>
                <option>Prasava Raksha</option>
                <option>Premium Ayurvedic Massage</option>
              </select>
            </div>

            {/* Message - Full Width */}
            <div className="md:col-span-2 w-full min-w-0">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                rows={3}
                className="w-full border-b border-gray-300 focus:border-gray-800 outline-none py-3 resize-none"
                placeholder="Tell us more about your concern"
              />
            </div>

            {/* Button - Full Width */}
            <div className="md:col-span-2 w-full min-w-0">
              <button
                type="submit"
                className="w-full px-8 md:px-10 py-3 border border-gray-800 text-gray-900 font-medium tracking-wide 
                hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all text-sm md:text-base"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}