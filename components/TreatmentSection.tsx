"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

const treatments = [
  { name: "Steam Bath", image: "/treatments/steambath.png" },
  { name: "Pizhichil", image: "/treatments/pizhichil.jpg" },
  { name: "Shirodhara", image: "/treatments/shirodhara.jpg" },
  { name: "Navara Kizhi", image: "/treatments/navara-kizhi.jpg" },
  { name: "Podikizhi", image: "/treatments/podikizhi.jpg" },
  { name: "Nasyam", image: "/treatments/nasyam.jpg" },
  { name: "Kati Vasti", image: "/treatments/kati-vasti.jpg" },
  { name: "Greeva Vasti", image: "/treatments/greeva-vasti.jpg" },
  { name: "TENS Therapy", image: "/treatments/tens.jpg" },
  { name: "Bone Setting", image: "/treatments/bone-setting.jpg" },
];

export default function TreatmentsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Our Treatments</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              Our treatments combine traditional Ayurvedic wisdom with expert Kalarimarma techniques to deliver fast relief, long-term recovery, and natural strength.
            </p>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-200 transition self-start md:self-center">
            <span className="font-medium">All treatments</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* HORIZONTAL LIST — NO SCROLLBAR */}
        <div className="flex overflow-x-auto 
                        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

          {treatments.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt={item.name}
              width={350}
              height={550}
              className="object-cover min-w-[350px] h-[550px]"
            />
          ))}

        </div>
      </div>
    </section>
  );
}
