/**
 * Example usage of ServiceDetailPage component
 * 
 * This file demonstrates how to use the ServiceDetailPage component
 * with example service data.
 */

import { ServiceDetailPage } from "./ServiceDetailPage"

// Example services array
const exampleServices = [
  {
    title: "Abhyanga Therapy",
    description:
      "Traditional full-body oil massage that balances doshas and promotes deep relaxation. This ancient practice improves circulation, nourishes the skin, and enhances overall well-being through therapeutic touch.",
    image: "/ayurvedic-clinic-interior-wellness.jpg",
  },
  {
    title: "Panchakarma Treatment",
    description:
      "Comprehensive five-fold purification therapy for complete body rejuvenation. A holistic approach to detoxification and wellness that cleanses the body at a deep cellular level.",
    image: "/ayurvedic-therapy-room-wellness.jpg",
  },
  {
    title: "Shirodhara Therapy",
    description:
      "Therapeutic oil pouring on the forehead to calm the mind and nervous system. Promotes mental clarity, reduces stress, and induces deep relaxation for lasting peace.",
    image: "/spa-relaxation-wellness-area.jpg",
  },
  {
    title: "Marma Point Therapy",
    description:
      "Stimulation of vital energy points to balance the body and mind. This precise technique helps restore energy flow and promotes natural healing processes.",
    image: "/ayurvedic-traditional-healing-practice.jpg",
  },
]

export default function ExampleServiceDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceDetailPage services={exampleServices} />
    </div>
  )
}
