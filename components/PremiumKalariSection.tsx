import Image from "next/image"
import { Footer } from "./footer"
import CTASection from "./CTASection"

export default function PremiumKalariSection() {
  return (
    <section>
      <div className="max-w-7xl pt-20 mx-auto px-6 py-10">

        {/* GRID */}
            <div className="max-w-3xl  mb-6">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-[#5c3e1f] mb-4">
                What Is Kalari Marma Therapy?
              </h2>
              <div className="w-20 h-[2px] bg-[#7a7f3a]" />
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: CONTENT */}
          <div>

            <p className="text-[#4a3a1f] text-base md:text-md leading-relaxed mt-6">
                Kalari Ayurveda massage, is the traditional massage of Kalaripayattu. It originated in northern Kerala, created as a scientific healing system to strengthen, rejuvenate and repair a warrior physically and mentally in order to face any kind of difficulties life may put in front of him.It is often used to treat the fatigue and occasional injuries sometimes received during the intense Kalaripayattu training, the performance of which can dynamic and quite demanding. Kalari massage developed hand in hand with Kalaripayattu at a time in India when Kerala was ruled by the Warrior class or caste. Combat or war was not unknown at this time.
              </p>

              <p className="text-[#4a3a1f] text-base md:text-md leading-relaxed mt-4">
                Combat situations require a warrior’s mind to be as agile,supple and alert as his body. Kalari massage addresses the mind/body requirements. In both combat and training, occasionally, bones are broken or dislocated, people may have the “wind knocked out of them” or they may also become unconscious. These issues may be directly addressed by the Master using Ayurvedic, and the often secret knowledge of the Marman points. Ancient tradition holds that the Master that was teaching martial arts was also the local “physician” who held the skills and knowledge necessary to heal these injuries.
              </p>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
            <Image
              src="/treatments/premuim.jpg"
              alt="Kalari Marma Therapy Treatment"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
        <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: IMAGE */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/treatments/marma.jpg"
              alt="Kalari Massage using feet technique"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-6">

            {/* Small Heading */}
            <p className="uppercase tracking-widest text-xs font-semibold text-[#7a7f3a]">
              Understanding the Difference
            </p>

            {/* Main Heading */}
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1f2a1f]">
              Kalari Massage and Ayurveda Massage
            </h3>

            {/* Paragraphs */}
            <p className="text-[#4a3a1f] text-base md:text-md leading-relaxed">
              Kalari massage and Ayurveda massage share a common foundation in the
              science of <strong>Marma</strong>. However, the primary distinction
              lies in the method of application. In Kalari massage, the practitioner
              may use the feet in addition to the hands to deliver therapy, allowing
              for deeper and more controlled pressure.
            </p>

            <p className="text-[#4a3a1f] text-base md:text-md leading-relaxed">
              During foot-based Kalari massage, the Kalari practitioner uses
              suspended ropes for balance and support while applying precise
              pressure through smooth, flowing movements. This technique is known
              as <strong>Utsadana</strong>. Hand-based application, referred to as
              <strong> Samvahana</strong>, is used when lighter or more targeted
              therapy is required.
            </p>

            <p className="text-[#4a3a1f] text-base md:text-md leading-relaxed">
              The intensity and method of treatment are carefully adjusted based on
              the individual’s physical condition, body constitution, and the
              presence of acute or chronic injuries, ensuring safety and
              effectiveness.
            </p>

          </div>
        </div>
      </div>
    </section>

    <section className="">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT: IMAGE */}
          <div className="relative w-full h-[650px] rounded-xl overflow-hidden">
            <Image
              src="/treatments/chest-massage.jpg"
              alt="Kalari Massage using traditional foot technique"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-2 text-[#6b6b6b] text-base md:text-md ">

            <p>
              Kalari massage is a full-body therapeutic practice performed using
              Ayurvedic medicated herbal oils to stimulate <strong>Marma (energy)
              points</strong> across the body. These oils support blood and lymphatic
              circulation while aiding in the restoration of normal cellular,
              tissue, and organ function.
            </p>

            <p>
              The therapy is known for assisting in the removal of metabolic and
              toxic waste that accumulates during intense physical activity or
              after injury. Kalari massage is commonly used to relieve conditions
              such as back pain, muscle stiffness, joint dislocations, and soft
              tissue injuries.
            </p>

            <p>
              Through precise stimulation of Marma points, the therapy influences
              major body systems, including the central nervous system, which plays
              a vital role in regulating immune, circulatory, musculoskeletal, and
              endocrine functions.
            </p>

            <p>
              The force, speed, rhythm, and number of movements applied during
              treatment vary according to the individual’s age, physical strength,
              endurance, and health condition. The choice of herbal oil is also
              customized to suit the patient’s constitution and therapeutic needs.
            </p>

            <p>
              In certain cases, the practitioner prepares and blends oils derived
              from locally sourced medicinal plants, following traditional
              knowledge passed down through generations. When no specific ailment
              is present, the oil used may be the same as that applied to a
              Kalaripayattu practitioner prior to training.
            </p>

            <p>
              These specially prepared Ayurvedic oils are selected to enhance nerve
              accessibility, improve flexibility, support mental clarity, and
              strengthen overall physical resilience, ensuring a balanced and
              restorative therapeutic experience.
            </p>

          </div>
        </div>
      </div>
    </section>

     <section className="mt-10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide text-[#1f2a1f] mb-10">
          Ayurvedic Podi Kizhi Bundle Kalari Massage
        </h2>

        {/* Image */}
        <div className="relative w-full h-[420px] max-w-xl mx-auto mb-12 rounded-xl overflow-hidden">
          <Image
            src="/treatments/kizhi.jpg"
            alt="Ayurvedic Podi Kizhi Herbal Bundle"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-2 text-justify text-[#6b6b6b] text-sm md:text-base leading-relaxed">

          <p>
            The term <strong>Podi</strong> translates to “powder,” and Podi Kizhi
            refers to a therapeutic herbal powder bundle used in Ayurvedic and
            Kalari treatments. These bundles are prepared using medicinal herbs
            traditionally grown and sourced from the gardens of Kalari masters.
            The herbs are carefully harvested, dried over several weeks, and
            hand-crushed before being wrapped into a cloth bundle.
          </p>

          <p>
            Similar to leaf and Navara rice bundles, the Podi Kizhi bundle is
            applied following a regular Kalari or Ayurvedic massage. Prior to
            application, the bundle is heated in medicated herbal oil to enhance
            its therapeutic effect and ensure smooth, rhythmic application over
            the body.
          </p>

          <p>
            Among the three traditional bundles, Podi Kizhi is the most durable
            and economical. Because the herbs are thoroughly dried before
            assembly, the bundle retains medicinal oil effectively and can be
            preserved for up to six months after preparation. Its widespread use
            is also influenced by the availability of ingredients and the
            relatively lower effort required in preparation.
          </p>

          <p>
            Podi Kizhi therapy is particularly effective for pain relief and
            improving blood circulation throughout the body. Enhanced circulation
            supports the nervous system by nourishing areas that may otherwise
            receive limited blood flow. The therapy is also beneficial in managing
            joint and muscle pain, offering results similar to leaf-based bundle
            treatments.
          </p>

        </div>
      </div>
    </section>

    <section className="mt-10 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide text-[#1f2a1f] mb-12">
          Kalari Ayurveda Massage Oil
        </h2>

        {/* Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* LEFT: IMAGE */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/treatments/kalari-oil.jpg"
              alt="Preparation of Kalari Ayurvedic medicinal oil"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-2 text-[#6b6b6b] text-sm md:text-base leading-relaxed">

            <p>
              Before training or therapy begins, the Kalaripayattu student applies
              a specially prepared herbal oil, traditionally made by the master,
              to the entire body. Medicinal oil is an essential element of
              Kalaripayattu and is used both during training and in Kalari
              Ayurvedic massage.
            </p>

            <p>
              The knowledge required to prepare these medicinal oils—of which
              there are more than thirty variations—must be mastered before a
              practitioner can claim the title of <strong>Gurukkal</strong>. The
              oil is applied from the neck down prior to training or treatment,
              forming an insulating layer that helps retain heat within the body
              and keeps muscles and tissues warm.
            </p>

            <p>
              This warming effect improves flexibility during physically demanding
              training routines and ensures that muscles remain supple and
              responsive for deep tissue massage. The powdered herbs used in these
              oils possess therapeutic properties that aid in reducing joint and
              muscle pain, while regular use contributes to healthy, glowing skin.
            </p>

            <p>
              The use of Kalaripayattu medicinal oil has its roots in classical
              Ayurvedic medical practices. For centuries, Ayurvedic physicians
              recommended regular oil application—daily or at least twice
              weekly—as a method of strengthening immunity and maintaining
              overall health.
            </p>

            <p>
              In a traditional practice known as <strong>Techukuli</strong>
              (where <em>techu</em> means “apply” and <em>kuli</em> means “bathe”),
              medicinal oil is applied to the body before bathing. This ritual
              remains common in Kerala and reflects the deep integration of oil
              therapy into everyday wellness practices.
            </p>

          </div>
        </div>
      </div>
    </section>
      </div>
      <CTASection/>

      <Footer />
    </section>
  )
}
