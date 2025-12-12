"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setOpenId(openId === item.id ? null : item.id)}
          className="w-full text-left p-4 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
        >
          <div className="flex justify-between items-start gap-4">
            <h4 className="font-serif font-bold text-foreground">{item.question}</h4>
            <ChevronDown
              size={20}
              className={`text-primary flex-shrink-0 transition-transform ${openId === item.id ? "rotate-180" : ""}`}
            />
          </div>
          {openId === item.id && <p className="mt-3 text-foreground/70 text-sm">{item.answer}</p>}
        </button>
      ))}
    </div>
  )
}
