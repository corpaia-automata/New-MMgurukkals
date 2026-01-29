import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo and Social Media Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-2 border-b border-white/20">
          {/* Logo */}
          <div>
            <Image
              src="/full-logo.png"
              alt="MMGurukkals Logo"
              width={180}
              height={60}
              className="h-auto"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61583995856838"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/mm_gurukkals?igsh=OThqdzVkZW83a3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@mm_gurukkal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-orange-500">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-white" />
                <a href="tel:+91 73063 93768" className="hover:text-white transition-colors">
                  +91 7356493768
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-white" />
                <a href="mailto:info@mmgurukkals.com" className="hover:text-white transition-colors">
                  info@mmgurukkals.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-orange-500">Location</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-0.5 text-white" />
                <span>Mm Gurukkal Building, opposite Rahmaniya Handicapped School, near E-Max Theatre, Velliparamba, Kozhikode, Kerala 673008</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-white" />
                <span>MM Gurukkal, Cheekkode Road, Edavannapara, Kozhikode-673008, Kerala</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-orange-500">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-white" />
                <span>MON: 9:00 AM - 6:00 PM</span> <br /> 
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-white" />
                <span>TUE: 9:00 AM - 6:00 PM</span> <br /> 
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-white" />
                <span>WED: 9:00 AM - 6:00 PM</span> <br /> 
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-white" />
                <span>THU: 9:00 AM - 6:00 PM</span> <br /> 
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-white" />
                <span>FRI: 9:00 AM - 6:00 PM</span> <br /> 
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-white" />
                <span>SAT: 9:00 AM - 6:00 PM</span> <br /> 
              </li>
      
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-gray-400">© 2025 MMGurukkals Ayurvedic Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
