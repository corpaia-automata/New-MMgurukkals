import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  id: number
  title: string
  subtitle: string
  description: string
  icon: string
  href?: string
}

export function ServiceCard({ id, title, subtitle, description, icon, href = `/services/${id}` }: ServiceCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-border/50 hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="font-serif text-xl font-bold text-primary">{title}</h3>
          <p className="text-sm text-accent font-semibold">{subtitle}</p>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/70 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
