"use client";

import { Play } from "lucide-react";

interface VideoTestimonial {
  title: string;
  description: string;
  thumbnail: string;
  videoId?: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    title: "Mother's Recovery Journey",
    description: "Hear from mothers who have experienced our Prasavaraksha postnatal care program",
    thumbnail: "/prasava.webp",
  },
  {
    title: "Expert Practitioner Insights",
    description: "Our Ayurvedic physicians discuss the benefits and approach of Prasavaraksha",
    thumbnail: "/female-ayurvedic-doctor-professional.jpg",
  },
  {
    title: "Complete Care Experience",
    description: "Learn about the comprehensive support provided throughout the recovery journey",
    thumbnail: "/prasavaBlog.webp",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Video <span className="text-orange-500">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch and learn from real experiences and expert insights about our postnatal care program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {videoTestimonials.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gray-200 group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${video.thumbnail}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-primary fill-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-fractul">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

