


export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left md:text-center relative z-10">
        <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light">
          <span className="text-orange-500 font-fractul text-xl md:text-2xl lg:text-3xl">MMGurukkals</span> brings the ancient power of Ayurveda into modern healing.
          With over five decades of combined expertise, our certified
          practitioners focus on treating the root cause not just the symptoms.
          We specialise in authentic Ayurvedic therapies, herbal treatments, and
          personalised care designed to restore balance, relieve pain, and
          rejuvenate your body naturally. Our clinic environment is built to
          provide calm, clarity, and deep healing for every individual.
        </p>
      </div>
    </section>
  );
}
