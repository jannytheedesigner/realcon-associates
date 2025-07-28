import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  FileText,
  Star,
  ShoppingCart,
  Search,
  Filter,
  TrendingUp,
  Building2,
  Calculator,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import HeroSection from "@/components/HeroSection";
import React from "react";
import {CtaSection} from "@/components/CtaSection";

export default function StorePage() {
  const publications = [
    {
      id: 1,
      title: "Malawi Real Estate Market Report 2024",
      description:
        "Comprehensive analysis of Malawi's real estate market trends, investment opportunities, and future projections.",
      category: "Market Analysis",
      price: "MWK49000",
      pages: 85,
      rating: 4.8,
      reviews: 24,
      image: "/images/investment.jpg",
      bestseller: true,
      preview: true,
    },
    {
      id: 2,
      title: "Quantity Surveying Best Practices Guide",
      description:
        "Professional guide covering modern quantity surveying techniques, cost management, and project estimation methods.",
      category: "Construction",
      price: "MWK34000",
      pages: 120,
      rating: 4.9,
      reviews: 18,
      image: "/images/Blantyre_City.jpg",
      bestseller: false,
      preview: true,
    },
    {
      id: 3,
      title: "Property Investment Strategies in Malawi",
      description:
        "Strategic insights into property investment opportunities, risk assessment, and portfolio management in Malawi.",
      category: "Investment",
      price: "MWK44000",
      pages: 95,
      rating: 4.7,
      reviews: 31,
      image: "/images/footer-bg.jpg",
      bestseller: false,
      preview: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      <HeroSection
          title="Research Publications Store"
          description="Access our comprehensive collection of research studies, market reports, and professional guides"
          imageSrc="/images/about-header.jpg"
      />

      {/* Search and Filter */}
      <section className="py-12 bg-brand-complimentary border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brand-secondary text-sm" />
              <input
                type="text"
                placeholder="Search publications..."
                className="w-full pl-10 pr-6 py-3 border text-sm bg-white textt-slate-900 border-neutral rounded-xs focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="default" className="">
                <Filter className="h-4 w-4" />
                All Categories
              </Button>
              <Button variant="outline" className="">
                Market Analysis
              </Button>
              <Button variant="outline" className="">
                Construction
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication) => (
              <Card
                key={publication.id}
                className="border-neutral/30 transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={publication.image || "/placeholder.svg"}
                    alt={publication.title}
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-primary text-white">{publication.category}</Badge>
                    {publication.bestseller && <Badge className="bg-yellow-500 text-white">Bestseller</Badge>}
                  </div>
                  {publication.preview && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-contrast-dark border-white">
                        Preview Available
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl text-brand-complimentary mb-3 line-clamp-2">{publication.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{publication.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(publication.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">
                        {publication.rating} ({publication.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex text-gray-600 items-center justify-between mb-4 text-sm">
                    <div className="flex items-center ">
                      <FileText className="h-4 text-brand-primary w-4 mr-1" />
                      <span>{publication.pages} pages</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 text-brand-primary mr-1" />
                      <span>PDF Format</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-primary">{publication.price}</div>
                    <div className="flex gap-2">
                      <Button className="bg-brand-primary text-brand-complimentary hover:bg-brand-primary/90 font-semibold">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col mb-4">
            <div className="flex flex-row mx-auto gap-2 mb-3">
              <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
              <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">
                Browse by Category
              </p>
            </div>
            <h2 className="text-5xl text-brand-complimentary max-w-2xl mx-auto font-bold mb-4">
              Explore Specialized Research Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group transition-all hover:-translate-y-1 text-center">
              <CardContent className="px-6 py-8">
                <TrendingUp className="h-12 w-12 text-brand-primary stroke-[1.25px] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Market Analysis</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive market reports and trend analysis</p>
                <Badge variant="outline" className="group-hover:bg-brand-primary border-brand-primary text-primary">
                  8 Publications
                </Badge>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:-translate-y-1 text-center">
              <CardContent className="px-6 py-8">
                <Building2 className="h-12 w-12 text-brand-primary stroke-[1.25px] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Construction</h3>
                <p className="text-gray-600 text-sm mb-4">Technical guides and best practices</p>
                <Badge variant="outline" className="group-hover:bg-brand-primary border-brand-primary text-primary">
                  12 Publications
                </Badge>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:-translate-y-1 text-center">
              <CardContent className="px-6 py-8">
                <Calculator className="h-12 w-12 text-brand-primary stroke-[1.25px] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Quantity Surveying</h3>
                <p className="text-gray-600 text-sm mb-4">Professional surveying methodologies</p>
                <Badge variant="outline" className="group-hover:bg-brand-primary border-brand-primary text-primary">
                  6 Publications
                </Badge>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:-translate-y-1 text-center">
              <CardContent className="px-6 py-8">
                <BarChart3 className="h-12 w-12 text-brand-primary stroke-[1.25px] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Investment</h3>
                <p className="text-gray-600 text-sm mb-4">Investment strategies and opportunities</p>
                <Badge variant="outline" className="group-hover:bg-brand-primary border-brand-primary text-primary">
                  10 Publications
                </Badge>
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
