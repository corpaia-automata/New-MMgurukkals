"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
}

const relatedBlogs: BlogPost[] = [
  {
    title: "What Most Mothers Don't Know About Prasava Raksha",
    slug: "prasava-raksha",
    excerpt:
      "Discover the comprehensive Ayurvedic approach to postnatal care that supports complete recovery and well-being.",
    image: "/prasavaBlog.webp",
  },
  {
    title: "Understanding Postnatal Recovery in Ayurveda",
    slug: "postnatal-recovery-ayurveda",
    excerpt:
      "Learn how traditional Ayurvedic principles guide postnatal healing and restore balance after childbirth.",
    image: "/prasava.webp",
  },
  {
    title: "The Importance of Holistic Postnatal Care",
    slug: "holistic-postnatal-care",
    excerpt:
      "Explore why comprehensive care for both mother and baby creates a strong foundation for long-term health.",
    image: "/prasavaBlog.webp",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Related <span className="text-orange-500">Articles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about postnatal care and Ayurvedic healing through our informative articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {relatedBlogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.slug}`}
              className="group relative h-[420px] rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer block"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                <div className="p-4 md:p-5 border border-white/20 group-hover:bg-white/15 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors font-fractul">
                    {blog.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-white/90 group-hover:text-white text-sm font-medium">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

