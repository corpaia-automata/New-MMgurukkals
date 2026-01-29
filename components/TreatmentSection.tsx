import Image from "next/image";

const treatments = [
  { title: "Steam Bath", image: "/treatments/steambath.png" },
  { title: "Pizhichil", image: "/treatments/premium.jpg" },
  { title: "Shirodhara", image: "/treatments/shirodhara.jpg" },
  { title: "Navarakizhi", image: "/treatments/navarakizhi.jpg" },
  { title: "Podi Kizhi", image: "/treatments/podi-kizhi.jpg" },
  { title: "Elakizhi", image: "/treatments/elakizhi.jpg" },
  { title: "Nasya", image: "/treatments/nasya.jpg" },
  { title: "Kati Vasti (For Back Pain)", image: "/treatments/kati-vasti.jpg" },
  { title: "Janu Basti (For Knee Pain)", image: "/treatments/janu-vasti.jpg" },
  { title: "Skin & Hair Care", image: "/treatments/skin-hair-care.jpg" },
  { title: "Ultrasound Therapy", image: "/treatments/ultrasound-therapy.jpg" },
  { title: "TENS Therapy", image: "/treatments/tens-therapy.jpg" },
  { title: "Bone Setting", image: "/treatments/bone-setting.jpg" },
  { title: "Traditional Bone Setting", image: "/treatments/traditional-bone-setting.jpg" },
  { title: "Marma Kizhi", image: "/treatments/marma-kizhi.jpg" },
];

export default function OurTreatments() {
  return (
    <section className="bg-[#1fa34a] py-20">
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
            <div
              key={treatment.title}
              className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-36 w-full">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-yellow-400 text-black text-xs font-semibold text-center py-2 px-2 uppercase">
                {treatment.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
