import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign, ArrowRight, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/HeroSection";
import React from "react";
import {CtaSection} from "@/components/CtaSection";
import AchievementStats from "@/components/AchievementStats";

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Blantyre Commercial Complex",
      category: "Commercial",
      location: "Blantyre CBD",
      year: "2023",
      value: "$2.5M",
      image: "/images/portfolio/project-1.jpg",
      description: "Modern commercial complex featuring retail spaces, offices, and parking facilities.",
      services: ["Quantity Surveying", "Project Management", "Development"],
    },
    {
      id: 2,
      title: "Limbe Residential Estate",
      category: "Residential",
      location: "Limbe",
      year: "2023",
      value: "$1.8M",
      image: "/images/portfolio/slide-1.webp",
      description: "Luxury residential development with 50 modern housing units and community facilities.",
      services: ["Real Estate Development", "Market Analysis"],
    },
    {
      id: 3,
      title: "Industrial Manufacturing Facility",
      category: "Industrial",
      location: "Blantyre Industrial Area",
      year: "2022",
      value: "$3.2M",
      image: "/images/portfolio/quantity-surveying.jpg",
      description: "State-of-the-art manufacturing facility with modern infrastructure and utilities.",
      services: ["Quantity Surveying", "Building Surveying"],
    }
  ]

  return (
    <div className="min-h-screen bg-white">

      <HeroSection
          title="Our Work Experience"
          description="Explore our successful projects across Malawi, showcasing our expertise in real estate development and
              construction"
          imageSrc="/images/about-header.jpg"
      />

      <AchievementStats />

      {/* Portfolio Grid */}
      <section className="py-24 bg-gray-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-5xl font-bold text-brand-complimentary mb-4 md:mb-0">Featured Projects</h2>
            <div className="flex gap-4">
              <Button variant="secondary" className="">
                <Filter className="h-4 w-4 mr-2" />
                All Projects
              </Button>
              <Button variant="outline" className="border-brand-primary text-slate-800 hover:bg-brand-secondary hover:border-brand-secondary hover:text-white">
                Commercial
              </Button>
              <Button variant="outline" className="border-brand-primary text-slate-800 hover:bg-brand-secondary hover:border-brand-secondary hover:text-white">
                Residential
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="border-neutral/30 transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/images/placeholder-profile.png"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-brand-complimentary expose text-white ">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-brand-complimentary mb-3">{project.title}</h3>
                  <p className="text-slate-800 text-sm mb-4">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-800">
                      <MapPin className="h-4 w-4 mr-2 text-brand-primary-dark" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-800">
                      <DollarSign className="h-4 w-4 mr-2 text-brand-primary-dark" />
                      <span>Project Value: {project.value}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold tracking-tight text-contrast-dark mb-2">Services Provided:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs leading-0 py-3 border-primary/30 text-primary">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/portfolio/${
                      project.id === 1
                        ? "blantyre-commercial-complex"
                        : project.id === 2
                          ? "limbe-residential-estate"
                          : project.id === 3
                            ? "industrial-manufacturing-facility"
                            : project.id === 4
                              ? "lilongwe-office-tower"
                              : project.id === 5
                                ? "mzuzu-shopping-mall"
                                : "zomba-university-housing"
                    }`}
                  >
                    <Button className="w-full text-sm font-medium bg-primary hover:bg-primary/90 text-white">
                      View Details <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}
