"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The Prasavaraksha program at MM Gurukkals helped me recover beautifully after my delivery. The care was gentle, professional, and truly supportive. I felt stronger and more balanced than I expected.",
    date: "2 months ago",
    image: "/woman-avatar.png",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "Exceptional postnatal care experience. The team understood my needs and provided personalized support. The therapies were relaxing and effective, and I appreciated the holistic approach to recovery.",
    date: "1 month ago",
    image: "/woman-professional-avatar.jpg",
  },
  {
    name: "Meera R.",
    rating: 5,
    text: "I'm grateful for the comprehensive care I received. The doctors were knowledgeable and caring, and the environment was peaceful. My recovery was smooth, and I felt well-supported throughout the journey.",
    date: "3 months ago",
    image: "/woman-avatar.png",
  },
];

export default function GMBTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            What Our <span className="text-orange-500">Patients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from mothers who have trusted us with their postnatal care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-colors bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-foreground mb-1">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

