import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/data/treatments";

export default function OurTreatments() {
  return (
    <section id="treatments" className="bg-[#1fa34a] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-left md:text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Our Treatments
          </h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            A comprehensive range of Ayurvedic, Kalari, and therapeutic treatments
            designed to heal, restore, and strengthen the body naturally.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {treatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className="group bg-white rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-yellow-400 text-black text-xs font-semibold text-center py-2 px-2 uppercase">
                {treatment.title}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
