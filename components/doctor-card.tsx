import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface DoctorCardProps {
  name: string
  specialty: string
  image: string
  experience: string
}

export function DoctorCard({ name, specialty, image, experience }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
      <div className="relative w-full h-64 bg-muted overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover w-full h-full" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold text-primary mb-2">{name}</h3>
        <p className="text-accent font-semibold text-sm mb-2">{specialty}</p>
        <p className="text-foreground/70 text-sm">{experience}</p>
      </CardContent>
    </Card>
  )
}
