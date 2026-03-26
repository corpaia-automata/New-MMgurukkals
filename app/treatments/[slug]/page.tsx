import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getTreatmentBySlug, treatments } from "@/data/treatments";

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} | MMGurukkals Ayurveda`,
    description: treatment.description[0].slice(0, 160),
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-[420px]">
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto w-full px-6 pb-10">
              <span className="inline-block bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
                Ayurvedic Treatment
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                {treatment.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">

          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1a5c32] mb-5">
              About This Treatment
            </h2>
            <div className="space-y-4">
              {treatment.description.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1a5c32] mb-5">
              Benefits
            </h2>
            <ul className="space-y-3">
              {treatment.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#1fa34a] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100">
            <Link
              href="/contact"
              className="bg-[#1fa34a] hover:bg-[#178a3a] text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200"
            >
              Book Now
            </Link>
            <Link
              href="/#treatments"
              className="text-[#1fa34a] hover:text-[#178a3a] font-medium underline underline-offset-2 transition-colors"
            >
              ← View All Treatments
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
