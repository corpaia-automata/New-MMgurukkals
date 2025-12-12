"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) return setIsScrolled(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Background Logic
  const navBgClass =
    isHomePage && !isScrolled
      ? "bg-transparent"
      : "bg-white shadow-sm border-b border-gray-200"

  // Text Color Logic
  const textColorClass =
    isHomePage && !isScrolled ? "text-white" : "text-gray-900"

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    // { href: "/doctors", label: "Doctors" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/mmgurukkals.png"
              alt="MMGurukkals Logo"
              width={200}
              height={60}
              className="w-auto h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${textColorClass} hover:text-primary transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden ${textColorClass}`}
            onClick={() => setIsScrolled((prev) => prev)} // dummy to avoid ESLint
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}
