import Image from "next/image";

export default function KalariUzhichilPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        Kalari Uzhichil
      </h1>

      <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
        <Image
          src="/treatments/uzhichil.png"
          alt="Kalari Uzhichil"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kalari Uzhichil is a traditional therapeutic oil massage rooted in
        Kalaripayattu and Ayurveda. It uses medicated oils (Thailams) applied
        through deep, rhythmic strokes to stimulate muscles, joints, and vital
        energy points (Marma).
      </p>
    </section>
  );
}
