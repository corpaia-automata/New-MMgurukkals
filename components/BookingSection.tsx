"use client";

import Image from "next/image";

export default function BookingSection() {
  return (
    <section className="bg-[#4BAE68] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">

        {/* LEFT FORM */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Book An Appointment
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md bg-gray-100 p-3 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-md bg-gray-100 p-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-md bg-gray-100 p-3 outline-none"
            />

            <input
              type="text"
              placeholder="Preferred Treatment"
              className="w-full rounded-md bg-gray-100 p-3 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full rounded-md bg-gray-100 p-3 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#8CD39A] text-black font-semibold py-3 rounded-md hover:bg-[#7BC68A] transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[550px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/ayurvedic-clinic-treatment-area.jpg" // <-- replace with your image path
            alt="Therapy Session"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
