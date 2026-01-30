import Image from "next/image";

const facilities = [
  "24 Hours Doctors Availability",
  "24 Hours nursing care",
  "General OP and Pharmacy",
  "Laundry Facility",
  "Yoga / Recreational area",
  "Room services with Hot / Cold coffee shop",
  "Prayer room for males and females",
  "Kids and maternity wear shop",
  "Lift service",
  "24 Hours Electricity Backup",
  "Ample parking",
  "Buffet area for patients and bystander",
  "Exclusive meeting area for special gatherings and celebrations",
];

export default function OurFacilities() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-green-600 text-2xl font-semibold mb-10">
          GET A POST NATAL CARE THAT WORTH
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT IMAGE */}
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-green-500">
            <Image
              src="/facilities/room.png"
              alt="Post natal care facility"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-green-600 text-2xl font-semibold mb-6">
              OUR FACILITIES
            </h3>

            <ul className="space-y-3">
              {facilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 border-b border-gray-200 pb-2"
                >
                  <span className="text-green-500 mt-1">✔</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
