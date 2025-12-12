import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  image?: string
  cta?: { text: string; href: string }
}

export function HeroSection({ title, subtitle, description, image, cta }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center py-12 md:py-20"
      style={{
        backgroundImage: image ? `url('${image}')` : "linear-gradient(135deg, #D8F4E1 0%, #FFF8F0 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-accent font-semibold text-sm md:text-base mb-4">{subtitle}</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-foreground/80 mb-8 text-balance max-w-2xl mx-auto">{description}</p>
        )}
        {cta && (
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {cta.text}
          </Button>
        )}
      </div>
    </section>
  )
}
