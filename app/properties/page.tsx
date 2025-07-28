import Image from "next/image"
import React from "react";
import MissionVisionSection from "@/components/MissionVisionSection";
import TeamSection from "@/components/TeamSection";
import {CtaSection} from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <HeroSection
          title="About Us"
          description="Leading the way in professional real estate development and construction services across Malawi"
          imageSrc="/images/about-header.jpg"
      />

      {/* Company Overview */}
      <section className="py-26 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-row mx-auto gap-2 mb-3">
              <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
              <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">REALCON STORY</p>
            </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-complimentary mb-6">The History Behind Realcon Associates<span className={"text-brand-primary"}>.</span></h2>
              <p className="text-base text-slate-700 mb-6">
                Realcon Associates was founded with a vision to transform Malawi&#39;s real estate and construction
                landscape. Based in Blantyre, we have established ourselves as a trusted partner for clients seeking
                professional, reliable, and innovative solutions.
              </p>
              <p className="text-base text-slate-700 mb-8">
                Our practice is registered with the National Construction Industry Council of Malawi and the Registrar
                of Companies, ensuring the highest standards of professionalism and regulatory compliance in all our
                operations.
              </p>
            </div>
            <div className="relative flex w-full">
              <Image
                src="/images/floating-house-2.png"
                alt="Realcon Associates office building"
                width={400}
                height={300}
                className="ml-auto flex"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <MissionVisionSection />

      {/* Team Section */}
      <TeamSection />

      {/* Company Stats */}


      <CtaSection />
    </div>
  )
}
