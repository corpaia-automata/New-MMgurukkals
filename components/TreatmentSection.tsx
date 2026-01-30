import Image from "next/image";

const treatments = [
  { title: "Steam Bath", image: "/treatments/steambath.png" },
  { title: "Pizhichil", image: "/premiumBlog.webp" },
  { title: "Shirodhara", image: "/premium.webp" },
  { title: "Navarakizhi", image: "/treatments/navarakizhi.png" },
  { title: "Podi Kizhi", image: "/treatments/podikizhi.png" },
  { title: "Elakizhi", image: "/treatments/elakizhi.png" },
  { title: "Nasya", image: "/treatments/naysa.png" },
  { title: "Kati Vasti (For Back Pain)", image: "/treatments/kati.png" },
  { title: "Janu Basti (For Knee Pain)", image: "/treatments/knee.png" },
  { title: "Skin & Hair Care", image: "/treatments/hair.png" },
  { title: "Ultrasound Therapy", image: "/treatments/ultrasound.png" },
  { title: "TENS Therapy", image: "/treatments/tans.png" },
  { title: "Bone Setting", image: "/treatments/bone.png" },
  { title: "Traditional Bone Setting", image: "/treatments/tbone.png" },
  { title: "Marma Kizhi", image: "/treatments/marmakizhi.png" },
  { title: "Kalari Uzhichil", image: "/treatments/uzhichil.png" },
  { title: "Kalari Marma Herbal Bandage", image: "/treatments/marmaherbal.png" },
  { title: "Chavitti Uzhichil", image: "/treatments/chavitti.png" },
  { title: "Kalaripayattu", image: "/treatments/kalaripayattu.png" },
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
