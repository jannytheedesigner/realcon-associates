import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  Shield,
  Users,
  Target,
} from "lucide-react"
import HeroSection from "@/components/HeroSection";
import React from "react";
import ServiceSection from "@/components/ServicePage/ServiceSection";
import {CtaSection} from "@/components/CtaSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      <HeroSection
          title="What we offer"
          description="Comprehensive real estate development and construction services tailored to meet your specific needs"
          imageSrc="/images/about-header.jpg"
      />

      {/* Services Grid */}
      <ServiceSection />

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-complimentary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col mb-12">
            <div className="flex flex-row mx-auto gap-2 mb-3">
              <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
              <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">VALUES</p>
            </div>
            <h2 className="text-5xl text-brand-complimentary font-bold mb-4">Why Choose Realcon Associates?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our commitment to excellence and professional expertise sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Card className="bg-brand-complimentary text-center">
              <CardContent className="p-12">
                <Clock className="h-15 w-15 text-white stroke-[1.25px] mx-auto mb-4" />
                <h3 className="text-xl text-brand-primary mb-3">Timely Delivery</h3>
                <p className="text-secondary">
                  We pride ourselves on delivering projects on time and within budget, every time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-complimentary text-center">
              <CardContent className="p-12">
                <Shield className="h-15 w-15 text-white stroke-[1.25px] mx-auto mb-4" />
                <h3 className="text-xl text-brand-primary mb-3">Quality Assurance</h3>
                <p className="text-secondary">
                  Rigorous quality control processes ensure the highest standards in all our work.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-complimentary text-center">
              <CardContent className="p-12">
                <Users className="h-15 w-15 text-white stroke-[1.25px] mx-auto mb-4" />
                <h3 className="text-xl text-brand-primary mb-3">Expert Team</h3>
                <p className="text-secondary">
                  Our certified professionals bring years of experience and industry expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-complimentary text-center">
              <CardContent className="p-12">
                <Target className="h-15 w-15 text-white stroke-[1.25px] mx-auto mb-4" />
                <h3 className="text-xl text-brand-primary mb-3">Client-Focused</h3>
                <p className="text-secondary">
                  Personalized solutions tailored to meet your specific project requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}
