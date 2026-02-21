import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/WhatsAppButton"
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
    description:
      "Professional Ayurvedic clinic offering traditional treatments and holistic wellness solutions.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TLKWM8PX');
            `,
          }}
        />
      </head>

      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {/* GTM NoScript (Required) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLKWM8PX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}