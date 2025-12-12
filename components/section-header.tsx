interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center max-w-2xl mx-auto" : ""}>
      {subtitle && <p className="text-accent font-semibold text-sm md:text-base mb-2">{subtitle}</p>}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {description && <p className="text-foreground/70 text-lg">{description}</p>}
    </div>
  )
}
