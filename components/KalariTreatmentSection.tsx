import Image from "next/image"
import { Footer } from "./footer"

export default function KalariTreatmentSection() {
  return (
    <section className=" ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mt-10 mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-[#5c3e1f] mb-4">
            Kalari Marma Treatment
          </h2>

          <div className="w-20 h-[2px] bg-[#7a7f3a]" />
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mb-20">
          <p className="text-[#4a3a1f] text-base md:text-lg leading-relaxed">
            Uzhichil, or body massage, is a foundational element of Ayurveda and
            gained wider recognition through Kalari Chikitsa—an integral part of
            Kalaripayattu training, the martial art tradition of Kerala.
            <br /><br />
            Three primary forms of massage are practiced in Kalari Chikitsa:
            <strong> enna thechu pidipikkal</strong> (oil massage),
            <strong> kai uzhichil</strong> (hand massage), and
            <strong> chavitti uzhichil</strong> (foot massage). These techniques
            were originally developed for warriors and remain highly effective
            in treating modern-day pain, injuries, and musculoskeletal disorders.
          </p>
        </div>

        {/* Image + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Image */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/treatments/kalarimarma.png"
              alt="Kalari Treatment Practice"
              fill
              className="object-cover"
            />
          </div>

          {/* Detailed Content */}
          <div className="space-y-6 text-[#4a3a1f] text-base md:text-lg leading-relaxed">
            <p>
              Before practicing advanced techniques, students are advised to
              apply special <strong>kalari mukoot oil</strong> across the body
              and tie a <strong>kacha</strong> (traditional cloth) around the
              waist. This preparation helps attain <em>mayavazhakkam</em> and
              reduces the risk of lower back strain and <em>nadipizhavu</em>.
            </p>

            <p>
              These oil-based techniques are integral to
              <strong> varshakala kalari massage</strong> and
              <strong> nadi thalarcha</strong>. The method of tying the kacha is
              also applied in bandaging lower back disc issues and postpartum
              care—highlighting Kalari’s role beyond martial training.
            </p>

            <p>
              The initial step in Kalari practice, known as
              <strong> guruvanakkam</strong>, focuses on body protection and
              diagnostic awareness. The sequence of this ritual is also used in
              assessing intervertebral disc problems, reinforcing Kalari as both
              a martial and therapeutic system.
            </p>
          </div>

        </div>

        {/* Secondary Visual Section */}
{/* Secondary Visual Section */}
<div className="mt-24">

  {/* Sub Heading */}
  <div className="max-w-5xl mx-auto mb-12">
    <h3 className="text-2xl md:text-3xl text-center font-serif font-semibold tracking-wide text-black mb-3">
      How does Kalari Chikitsa work
    </h3>
    <p className="text-center text-[#4a3a1f] text-base md:text-lg leading-relaxed">
      Kalari Chikitsa is a complete system of traditional medicine. It includes
      massage techniques, marma applications, herbal oils, poultices, and
      dietary guidance. Treatments are customised to the individual and their
      condition. Massage remains a primary element, including Kalari Marma
      Massage and Chavutti Thirummal.
    </p>
  </div>

  {/* Centered Image */}
  <div className="flex justify-center mb-4">
    <div className="relative w-full max-w-2xl h-[460px] rounded-xl overflow-hidden">
      <Image
        src="/treatments/kalari2.png"
        alt="Kalari therapeutic practice demonstrating traditional technique"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </div>
  </div>

</div>
</div>

      <Footer/>
    </section>
  )
}
