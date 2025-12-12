import Image from "next/image"

/**
 * ServiceDetailPage Component
 * 
 * A reusable component that displays services in an alternating two-column layout.
 * 
 * @example
 * ```tsx
 * const exampleServices = [
 *   {
 *     title: "Abhyanga Therapy",
 *     description: "Traditional full-body oil massage that balances doshas and promotes deep relaxation. This ancient practice improves circulation and nourishes the skin.",
 *     image: "/ayurvedic-clinic-interior-wellness.jpg"
 *   },
 *   {
 *     title: "Panchakarma Treatment",
 *     description: "Comprehensive five-fold purification therapy for complete body rejuvenation. A holistic approach to detoxification and wellness.",
 *     image: "/ayurvedic-therapy-room-wellness.jpg"
 *   },
 *   {
 *     title: "Shirodhara Therapy",
 *     description: "Therapeutic oil pouring on the forehead to calm the mind and nervous system. Promotes mental clarity and deep relaxation.",
 *     image: "/spa-relaxation-wellness-area.jpg"
 *   }
 * ]
 * 
 * <ServiceDetailPage services={exampleServices} />
 * ```
 */

interface Service {
  title: string
  description: string
  image: string
}

interface ServiceDetailPageProps {
  services: Service[]
}

export function ServiceDetailPage({ services }: ServiceDetailPageProps) {
  return (
    <div className="w-full">
      {services.map((service, index) => {
        const isEven = index % 2 === 0
        const isImageLeft = isEven

        return (
          <div
            key={index}
            className="py-12 md:py-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`flex flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 items-center`}
              >
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 max-w-[90%] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
