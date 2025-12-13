"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "What Most Mothers Don't Know About Prasava Raksha",
    slug: "prasava-raksha",
    excerpt:
      "Ayurvedic postnatal care for mothers and babies to regain strength, balance hormones, and support natural recovery.",
    image: "/prasavaBlog.webp",
  },
  {
    title: "A Powerful Reset for Body & Mind",
    slug: "premium-ayurvedic-massage",
    excerpt:
      "Rejuvenating full-body massage using herbal oils to relax the mind, detox the body, and refresh your energy.",
    image: "/kalari-marma.webp",
  },
  {
    title: "Premium Ayurvedic Massage With Kalari Marma Chikitsa",
    slug: "premium-ayurvedic-massage-with-kalari-marma-chikitsa",
    excerpt:
      "Deep healing therapy combining Premium Ayurvedic Massage with Kalari Marma Chikitsa for pain, stress, and stiffness relief.",
    image: "/premiumBlog.webp",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12 md:mb-16">
          <h4 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul">
            Our Latest <span className="text-orange-500">Blogs</span>
          </h4>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Your source for authentic Ayurvedic healing from pain relief to postnatal recovery, backed by decades of tradition.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.slug}`}
              className="group relative h-[520px] rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer block"
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

              {/* Content Overlay - Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                <div className=" p-4 md:p-5 border border-white/20 group-hover:bg-white/15 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors font-fractul">
                    {blog.title}
                  </h3>
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
