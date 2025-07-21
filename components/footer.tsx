import { Building2, Phone, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-brand-primary" />
              <span className="ml-2 text-xl font-bold">Realcon Associates</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional Real Estate Development and Construction practice registered with the National Construction
              Industry Council of Malawi and the Registrar of Companies.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                <Phone className="h-4 w-4 mr-2" />
                +265 XXX XXX XXX
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-brand-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-brand-primary transition-colors">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Quantity Surveying</li>
              <li>Real Estate Development</li>
              <li>Property Transactions</li>
              <li>Market Research</li>
              <li>Building Surveying</li>
              <li>Development Proposals</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Realcon Associates. All rights reserved. Registered with National Construction Industry
              Council of Malawi.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-brand-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-brand-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-brand-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
