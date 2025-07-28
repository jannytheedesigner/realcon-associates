import { Phone, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
      <footer className="bg-brand-secondary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-20">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center mb-6">
                <Image
                    src="/logos/Primary Logo Lockup/SVG/realcon-primary-logo-light.svg"
                    alt="Realcon Associates Logo"
                    width={40}
                    height={40}
                    className="w-[9em] h-auto"
                />
              </Link>
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                Realcon Associates is a registered real estate and construction firm based in Malawi. We’re trusted by
                clients nationwide for our professional expertise in development, surveying, and market research.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="text-sm">
                  <Phone className="h-4 w-4" />
                  +265 (0) 995 477 957
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Explore Realcon</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>
                  <Link href="/about" className="hover:text-brand-primary transition-colors">
                    Our Story & Values
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-brand-primary transition-colors">
                    What We Offer
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-brand-primary transition-colors">
                    Featured Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-brand-primary transition-colors">
                    Insights & Updates
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="hover:text-brand-primary transition-colors">
                    Tools & Resources
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-brand-primary transition-colors">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Expertise</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Quantity Surveying</li>
                <li>Real Estate Development</li>
                <li>Property Transactions</li>
                <li>Market Research & Feasibility</li>
                <li>Building Surveying</li>
                <li>Development Planning</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-brand-primary py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/80 text-sm text-center md:text-left mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Realcon Associates. All rights reserved. Registered with the National
                Construction Industry Council of Malawi.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-white/80 hover:text-brand-primary transition-colors" />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-white/80 hover:text-brand-primary transition-colors" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-white/80 hover:text-brand-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
