import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "MMGurukkals - Instant Relief From Pain | Ayurvedic Clinic",
  description:
    "Professional Ayurvedic clinic offering traditional treatments and holistic wellness solutions for pain relief and health restoration.",
  generator: "v0.app",
  openGraph: {
    title: "MMGurukkals - Instant Relief From Pain",
    description: "Professional Ayurvedic clinic offering traditional treatments and holistic wellness solutions.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
