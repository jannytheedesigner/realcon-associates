"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-6 z-50 container px-8 mx-auto">
      <div className=" mx-auto px-4 sm:px-6 py-4 lg:px-0">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/realcon-logo.svg"
              alt="Realcon Associates Logo"
              width={40}
              height={40}
              className="h-fit w-[9em]"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm tracking-tight">
            <Link href="/" className="text-gray-700 hover:text-brand-primary font-semibold transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-primary font-semibold transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-primary font-semibold transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-brand-primary font-semibold transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-brand-primary font-semibold transition-colors">
              Blog
            </Link>
            <Link href="/store" className="text-gray-700 hover:text-brand-primary font-semibold transition-colors">
              Store
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-primary font-semibold transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-brand-secondary-dark hover:bg-brand-primary/90 text-sm text-white">
              <Phone className="h-4 w-4 mr-2" />
              +265(0) 995 477 957
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-brand-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-brand-primary">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-brand-primary">
                About Us
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-brand-primary">
                Services
              </Link>
              <Link href="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-brand-primary">
                Portfolio
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-brand-primary">
                Blog
              </Link>
              <Link href="/store" className="block px-3 py-2 text-gray-700 hover:text-brand-primary">
                Store
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-brand-primary">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
