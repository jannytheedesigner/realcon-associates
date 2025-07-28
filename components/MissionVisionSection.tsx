// Example: MissionVisionSection.tsx or directly in your page
import Image from "next/image";
import { MissionVisionCard } from "@/components/MissionVisionCard";

export default function MissionVisionSection() {
  return (
    <section className="py-26 bg-brand-secondary-dark relative overflow-hidden">
      <Image
        alt="cta-background"
        src="/images/mission.jpg"
        width={700}
        height={500}
        className="object-cover opacity-10 inset-0 absolute w-full my-auto"
      />
      <div className="absolute inset-0 bg-brand-secondary-dark/10 transition-colors duration-300" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-brand-secondary-dark z-20 transition-colors duration-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionVisionCard
            title="Our Mission"
            iconPath="/icon-assets/mission.svg"
            description="To provide exceptional real estate development and construction services that exceed client expectations while contributing to Malawi's economic growth and infrastructure development."
          />

          <MissionVisionCard
            title="Our Vision"
            iconPath="/icon-assets/vision.svg"
            description="To be the leading real estate development and construction practice in Malawi, recognized for innovation, quality, and sustainable development solutions."
          />

          <MissionVisionCard
            title="Our Values"
            iconPath="/icon-assets/values.svg"
            description="Integrity, professionalism, innovation, and commitment to excellence guide everything we do, ensuring sustainable and ethical business practices."
          />
        </div>
      </div>
    </section>
  );
}
