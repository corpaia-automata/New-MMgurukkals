import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

// Blog data - can be moved to a separate file later
const blogPosts: Record<string, {
  title: string
  slug: string
  heroImage: string
  description: string
  content: {
    intro: string
    whatIs?: {
      title: string
      description: string
      points: string[]
    }
    benefits?: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
    program?: {
      title: string
      items: string[]
    }
    features?: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
    whoBenefits?: {
      title: string
      description?: string
      items: string[]
    }
    whyChoose?: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
    finalTakeaway?: string
  }
  cta: {
    title: string
    description: string
  }
}> = {
  "prasava-raksha": {
    title: "Postnatal Recovery the Ayurvedic Way: What Most Mothers Don't Know About Prasava Raksha",
    slug: "prasava-raksha",
    heroImage: "/prasva.png",
    description: "Discover Prasava Raksha - the complete Ayurvedic postnatal care system that helps mothers regain strength, balance hormones, and restore well-being.",
    content: {
      intro: "Childbirth changes a woman's body in powerful ways — but most mothers don't get the recovery support they truly need. Modern postnatal care focuses on the baby, while the mother is left dealing with fatigue, back pain, hormonal imbalance, poor sleep, and slow healing.\n\nAyurveda has a deeper understanding of postpartum recovery. Its traditional therapy, Prasava Raksha, is designed to help mothers regain strength, balance hormones, and restore their physical and emotional well-being.",
      whatIs: {
        title: "What Is Prasava Raksha?",
        description: "Prasava Raksha is a complete Ayurvedic postnatal care system that:",
        points: [
          "Balances Vata dosha (the main cause of postpartum discomfort)",
          "Strengthens the spine, pelvis, and core",
          "Boosts lactation",
          "Enhances digestion and metabolism",
          "Supports mental calmness and emotional stability"
        ]
      },
      benefits: {
        title: "Key Benefits",
        items: [
          {
            title: "Faster Physical Recovery",
            description: "Warm medicated oils and Ayurvedic massages support muscle repair, reduce pain, and improve circulation."
          },
          {
            title: "Stronger Back & Pelvic Muscles",
            description: "Kalari-based therapies help restore strength, flexibility, and alignment."
          },
          {
            title: "Balanced Hormones & Better Mood",
            description: "Ayurvedic herbs and routines help stabilize emotions and reduce postpartum stress."
          },
          {
            title: "Improved Lactation",
            description: "Specific herbs and oils enhance milk flow naturally."
          },
          {
            title: "Better Digestion & Energy",
            description: "Ayurveda restores the digestive fire (Agni), helping mothers regain stamina quickly."
          }
        ]
      },
      program: {
        title: "What a Typical Prasava Raksha Program Includes",
        items: [
          "Abhyanga (full-body oil massage)",
          "Kalari massage (for strength and mobility)",
          "Herbal steam",
          "Postnatal belly care",
          "Internal herbal medicines",
          "Diet guidance for faster recovery"
        ]
      }
    },
    cta: {
      title: "Ready to Experience Prasava Raksha?",
      description: "Book a consultation with our experienced Ayurvedic practitioners and discover how Prasava Raksha can support your postnatal recovery journey."
    }
  },
  "premium-ayurvedic-massage": {
    title: "Premium Ayurvedic Massage: A Powerful Reset for Body & Mind",
    slug: "premium-ayurvedic-massage",
    heroImage: "/spa-relaxation-wellness-area.jpg",
    description: "Discover how Premium Ayurvedic Massage at MM Gurukkals provides a complete mind-body reset using authentic traditional techniques and medicated oils.",
    content: {
      intro: "In today's fast, stressful lifestyle, the body absorbs tension faster than it can release it. Stiff neck, tight shoulders, mental fatigue, sleepless nights — these are all signs your system is running on empty.\n\nA Premium Ayurvedic Massage is one of the most effective ways to restore balance. Unlike ordinary spa massages, this treatment uses warm medicated oils and traditional Ayurvedic stroke techniques that work on muscles, nerves, and energy pathways all at once.",
      features: {
        title: "What Makes It Truly Premium?",
        items: [
          {
            title: "Personalized Medicated Oils",
            description: "Each oil blend is chosen based on your body type and concerns — stress, pain, dryness, or insomnia. These oils go deeper than surface relaxation."
          },
          {
            title: "Deep Nervous System Relaxation",
            description: "Warm, rhythmic strokes activate the body's healing mode. Within minutes, stress drops, breathing slows, and the mind becomes calmer."
          },
          {
            title: "Relief From Tension & Stiffness",
            description: "Ayurvedic techniques improve circulation, detox tissues, and soften tight muscles without discomfort."
          },
          {
            title: "Natural Rejuvenation",
            description: "The herbal oils nourish the skin, improve texture, and leave the body feeling light, warm, and restored."
          }
        ]
      },
      whoBenefits: {
        title: "Who Benefits the Most?",
        description: "This treatment is ideal for anyone dealing with:",
        items: [
          "Work stress",
          "Body pain",
          "Stiff back or neck",
          "Poor sleep",
          "Mental exhaustion",
          "Dry or dull skin"
        ]
      },
      whyChoose: {
        title: "Why Choose MM Gurukkals for Premium Ayurvedic Massage?",
        items: [
          {
            title: "Traditionally Prepared Herbal Oils",
            description: "Every oil is selected and prepared according to classical Ayurvedic texts."
          },
          {
            title: "Expert Therapists Trained in Authentic Techniques",
            description: "You're treated by professionals who understand real Ayurvedic therapy, not generic massage strokes."
          },
          {
            title: "Personalized Treatment Approach",
            description: "Your body type, lifestyle, stress level, and health goals guide the entire session."
          },
          {
            title: "Healing-Focused Environment",
            description: "Quiet, calm, and designed to support deep relaxation and recovery."
          }
        ]
      },
      finalTakeaway: "A Premium Ayurvedic Massage at MM Gurukkals isn't just about relaxation — it's a full mind-body reset.\n\nYou walk out lighter, clearer, calmer, and genuinely rejuvenated.\n\nFor anyone ready to bring balance back into their daily life, this is the therapy that truly makes a difference."
    },
    cta: {
      title: "Ready to Experience Premium Ayurvedic Massage?",
      description: "Book a consultation with our expert therapists and discover how our authentic Ayurvedic massage can reset your body and mind."
    }
  },
  "premium-ayurvedic-massage-with-kalari-marma-chikitsa": {
    title: "Premium Ayurvedic Massage With Kalari Marma Chikitsa: Deep Healing for Pain, Stress & Stiffness",
    slug: "premium-ayurvedic-massage-with-kalari-marma-chikitsa",
    heroImage: "/ayurvedic-therapy-room-wellness.jpg",
    description: "Discover the powerful combination of Premium Ayurvedic Massage and Kalari Marma Chikitsa - a deep healing therapy for chronic pain, stress, and stiffness.",
    content: {
      intro: "Today's lifestyle builds stress and tension faster than the body can release it. Long sitting hours, screen strain, and poor posture lead to chronic stiffness, back pain, fatigue, and restless sleep.\n\nA powerful solution rooted in Kerala's ancient healing system is the combination of Premium Ayurvedic Massage + Kalari Marma Chikitsa — a therapy designed to relax, restore, and repair the body at a deeper level.",
      features: {
        title: "What Makes This Therapy Unique?",
        items: [
          {
            title: "Medicated Herbal Oils",
            description: "Warm Ayurvedic oils infused with herbs like Bala, Kottam, and Rasna help reduce inflammation, nourish muscles and nerves, improve circulation, and ease joint stiffness. This is healing from the inside out."
          },
          {
            title: "Kalari Marma Techniques",
            description: "Trained therapists stimulate vital marma points that control muscle tension, nerve flow, and energy balance — helping relieve chronic pain and restore mobility."
          }
        ]
      },
      whoBenefits: {
        title: "Deep Relief From Pain & Stress",
        description: "This therapy is ideal for:",
        items: [
          "Back & neck pain",
          "Shoulder stiffness",
          "Muscle knots",
          "Sciatica",
          "Stress & anxiety",
          "Poor sleep"
        ]
      },
      whyChoose: {
        title: "Why Choose MM Gurukkals?",
        items: [
          {
            title: "Therapists trained in authentic Marma Chikitsa",
            description: "Our practitioners are skilled in traditional Kalari Marma techniques, not generic massage strokes."
          },
          {
            title: "Personalized treatment based on your pain points & body type",
            description: "Each session is tailored to address your specific concerns and dosha balance."
          },
          {
            title: "High-quality, traditionally prepared herbal oils",
            description: "Every oil blend is prepared according to classical Ayurvedic formulations for maximum therapeutic effect."
          },
          {
            title: "Results-focused approach — not routine massage strokes",
            description: "The experience is calming, therapeutic, and designed to create long-lasting relief."
          }
        ]
      },
      finalTakeaway: "A Premium Ayurvedic Massage with Kalari Marma Chikitsa is a complete body reset — easing pain, calming the mind, and improving mobility naturally.\n\nFor anyone seeking deep relief and real healing, MM Gurukkals is one of the most trusted choices for authentic Ayurvedic and Kalari-based therapy."
    },
    cta: {
      title: "Ready to Experience Deep Healing?",
      description: "Book a consultation with our expert therapists trained in authentic Kalari Marma Chikitsa and discover how this powerful combination can relieve your pain and restore your well-being."
    }
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = blogPosts[slug]

  if (!blog) {
    return {
      title: "Blog Post Not Found | MMGurukkals",
    }
  }

  return {
    title: `${blog.title} | MMGurukkals Blog`,
    description: blog.description,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = blogPosts[slug]

  if (!blog) {
    notFound()
  }

  return (
    <>
      <Navbar />

      {/* Full-Width Hero Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          src={blog.heroImage}
          alt={blog.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 md:pb-16">
            <Link
              href="/#blogs"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm md:text-base">Back to Blogs</span>
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-fractul max-w-4xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
              {blog.content.intro.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* What Is Section */}
          {blog.content.whatIs && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-fractul">
                {blog.content.whatIs.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                {blog.content.whatIs.description}
              </p>
              <ul className="space-y-4">
                {blog.content.whatIs.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1 text-xl">•</span>
                    <span className="text-gray-700 text-base md:text-lg leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              {blog.slug === "prasava-raksha" && (
                <p className="text-gray-700 text-base md:text-lg mt-6 leading-relaxed italic">
                  It focuses on healing the mother from the inside out — not just relieving symptoms.
                </p>
              )}
            </div>
          )}

          {/* Features Section (for Premium Massage) */}
          {blog.content.features && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-fractul">
                {blog.content.features.title}
              </h2>
              <div className="space-y-6">
                {blog.content.features.items.map((feature, idx) => (
                  <div key={idx} className="border-l-4 border-orange-500 pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-fractul flex items-center gap-2">
                      <span className="text-orange-500">✔</span>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {blog.content.benefits && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-fractul">
                {blog.content.benefits.title}
              </h2>
              <div className="space-y-8">
                {blog.content.benefits.items.map((benefit, idx) => (
                  <div key={idx} className="border-l-4 border-orange-500 pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-fractul">
                      {idx + 1}. {benefit.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Who Benefits Section */}
          {blog.content.whoBenefits && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-fractul">
                {blog.content.whoBenefits.title}
              </h2>
              {blog.content.whoBenefits.description && (
                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  {blog.content.whoBenefits.description}
                </p>
              )}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 md:p-8 border border-orange-100">
                <ul className="space-y-3">
                  {blog.content.whoBenefits.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold mt-1 text-xl">•</span>
                      <span className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {blog.slug === "premium-ayurvedic-massage" && (
                <p className="text-gray-700 text-base md:text-lg mt-6 leading-relaxed italic font-medium">
                  It's not luxury — it's essential maintenance for a healthy, balanced body.
                </p>
              )}
              {blog.slug === "premium-ayurvedic-massage-with-kalari-marma-chikitsa" && (
                <p className="text-gray-700 text-base md:text-lg mt-6 leading-relaxed italic font-medium">
                  It's not just relaxation — it's corrective healing.
                </p>
              )}
            </div>
          )}

          {/* Why Choose Section */}
          {blog.content.whyChoose && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-fractul">
                {blog.content.whyChoose.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                MM Gurukkals stands out because it delivers authentic Ayurvedic healing, not spa-style imitation.
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed font-medium">
                Here's what makes their treatment superior:
              </p>
              <div className="space-y-6">
                {blog.content.whyChoose.items.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-green-500 pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-fractul flex items-center gap-2">
                      <span className="text-green-500">✔</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Program Section */}
          {blog.content.program && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-fractul">
                {blog.content.program.title}
              </h2>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 md:p-8 border border-orange-100">
                <ul className="space-y-4">
                  {blog.content.program.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold mt-1 text-xl">✓</span>
                      <span className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Final Takeaway Section */}
          {blog.content.finalTakeaway && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-fractul">
                Final Takeaway
              </h2>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 md:p-8 border border-green-100">
                <div className="text-gray-800 leading-relaxed space-y-4 text-base md:text-lg">
                  {blog.content.finalTakeaway.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="font-medium">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-fractul">
                {blog.cta.title}
              </h3>
              <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                {blog.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white text-green-700 hover:bg-white/90 text-base px-8 py-6"
                >
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-green-700 hover:bg-green-700 text-base px-8 py-6"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}

