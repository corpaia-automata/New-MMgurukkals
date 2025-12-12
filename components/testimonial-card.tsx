import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  rating: number
  text: string
  image: string
}

export function TestimonialCard({ name, rating, text, image }: TestimonialCardProps) {
  return (
    <Card className="border-border/50 hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-full" />
          <div className="flex-1">
            <h4 className="font-serif font-bold text-foreground">{name}</h4>
            <div className="flex gap-1 mt-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-foreground/70 text-sm italic">{text}</p>
      </CardContent>
    </Card>
  )
}
