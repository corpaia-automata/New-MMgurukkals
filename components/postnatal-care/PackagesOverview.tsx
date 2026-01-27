import Image from "next/image";

const motherTreatments = [
  "Yoga",
  "Abhyangam (Oil Massage)",
  "Vethu Kuli (Medicated Snanam)",
  "Abdominal Binding (Veshtanam)",
  "Shiro Abhyangam (Head Oil Massage)",
  "Anti Stretch Mark Treatments",
  "Avagaham / Yoni Kshalanam (Medicated Sitz Bath)",
  "Kashayadhara",
  "Medicated dhoopanam (For wound healing)",
  "Kesha dhoopam (For hair health)",
  "Kizhi treatment (If needed)",
  "Foot massage",
  "Face massage",
  "Anti-tan (Hyper pigmentation) treatment",
  "Herbal kajal",
  "Needed medicines",
  "Diet food for mother as per doctor’s advice (Buffet / Room Service)",
  "Laundry services for patient and one bystander",
];

const babyTreatments = [
  "Oil massage",
  "Medicated snana (Bath)",
  "Medicines (If needed and Ura-marunnu)",
];

export default function PackagesOverview() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-green-600 text-2xl font-semibold mb-10">
          PACKAGE DETAILS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT – CONTENT */}
          <div className="space-y-12">
            {/* Mother */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Included Treatment For Mother
              </h3>
              <ul className="space-y-3">
                {motherTreatments.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-b border-gray-200 pb-2"
                  >
                    <span className="text-green-500 mt-1">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Baby */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Included Treatment For Baby
              </h3>
              <ul className="space-y-3">
                {babyTreatments.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-b border-gray-200 pb-2"
                  >
                    <span className="text-green-500 mt-1">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT – IMAGES */}
          <div className="relative flex flex-col items-center gap-20">
            
            {/* Mother Image */}
            <div className="relative w-[400px] h-[500px] rounded-full overflow-hidden">
              <Image
                src="/facilities/mother.png"
                alt="Mother care"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-[400px] h-[450px] flex justify-start rounded-full overflow-hidden">
              <Image
                src="/facilities/baby.png"
                alt="Baby care"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
