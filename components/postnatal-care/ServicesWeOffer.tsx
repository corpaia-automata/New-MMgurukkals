import Image from "next/image";

const services = [
  "Specialised postnatal care under the supervision of experienced Ayurvedic doctors",
  "Scientifically designed traditional postnatal therapies",
  "Dedicated treatment packages starting from 8 days",
  "15, 21, 30, and 40-day customised treatment plans",
  "Complete physical and mental rejuvenation for mothers",
  "Special therapies to strengthen the body and restore energy after delivery",
  "Postnatal care for both normal delivery and C-section delivery mothers",
  "Treatments to support uterine recovery and overall body balance",
  "Care focused on reducing post-delivery pain and discomfort",
  "Baby care guidance and support alongside maternal treatment",
  "Hygienic and calm environment for faster recovery",
  "Nutritious postnatal diet plans as prescribed by doctors",
  "Dedicated facilities to ensure comfort and privacy",
];

export default function ServicesWithImage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT – IMAGE */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/facilities/nono.jpg"
              alt="Newborn care service"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT – POINTS */}
          <div>
            <h2 className="text-green-600 text-2xl font-semibold mb-6">
              Services We Offer
            </h2>

            <ul className="space-y-3">
              {services.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 border-b border-gray-200 pb-2"
                >
                  <span className="text-green-500 mt-1">✔</span>
                  <span className="text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
