"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { HeroSlider } from "@/components/hero-slider"
import FeaturedProperties from "@/components/featured-properties"
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsSection from "@/components/InsightsSection";
import {CtaSection} from "@/components/CtaSection";
import AchievementCounter from "@/components/AchievementCounter";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section with Slider */}
      <section className="relative">
        <HeroSlider />
      </section>

      <section className="py-26 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-row gap-2"><span className="w-2 h-2 bg-brand-primary flex my-auto"></span><p className="text-sm my-auto font-semibold text-brand-secondary-dark">Trusted by all our clients and organizations</p></div>
              <h2 className="text-3xl md:text-3xl font-medium text-brand-complimentary mb-6 mt-4">The members of our team of workers always collaborate to ensure that a client&#39;s needs are met during a visit or a transaction.</h2>
              <p className="text-sm text-slate-900 mb-6">
                Realcon Associates is a Professional Real Estate Development and Construction practice with specialization in Quantity Surveying, Building Surveying,
                Development proposals and Transactions. The practice is registered with the National Construction Industry Council of Malawi and the Registrar of Companies.
                The Head office for the company in Blantyre, Malawi. The main current lines of business for the company are:
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-500">
                    Registered with National Construction Industry Council of Malawi
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-500">Registered with the Registrar of Companies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-500">Professional expertise in construction and real estate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-500">Comprehensive market knowledge of Malawi real estate</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-full">
              <Image
                src="/images/slide-1.webp"
                alt="Realcon Associates office building"
                width={600}
                height={500}
                className="rounded-sm object-cover absolute w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesOverview />

      {/* Portfolio Preview */}
      <PortfolioShowcase />

      {/* Achievements Section */}
      <AchievementCounter />

      {/* Properties Section */}
      <FeaturedProperties />


      {/* Insights & News Section */}
      <InsightsSection />

        <CtaSection />
    </div>
  )
}
