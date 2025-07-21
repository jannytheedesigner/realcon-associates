import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign, ArrowRight, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Blantyre Commercial Complex",
      category: "Commercial",
      location: "Blantyre CBD",
      year: "2023",
      value: "$2.5M",
      image: "/placeholder.svg?height=300&width=400",
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
      image: "/placeholder.svg?height=300&width=400",
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
      image: "/placeholder.svg?height=300&width=400",
      description: "State-of-the-art manufacturing facility with modern infrastructure and utilities.",
      services: ["Quantity Surveying", "Building Surveying"],
    },
    {
      id: 4,
      title: "Lilongwe Office Tower",
      category: "Commercial",
      location: "Lilongwe City Centre",
      year: "2022",
      value: "$4.1M",
      image: "/placeholder.svg?height=300&width=400",
      description: "15-story office tower with premium office spaces and modern amenities.",
      services: ["Development Proposals", "Transaction Management"],
    },
    {
      id: 5,
      title: "Mzuzu Shopping Mall",
      category: "Retail",
      location: "Mzuzu",
      year: "2021",
      value: "$2.8M",
      image: "/placeholder.svg?height=300&width=400",
      description: "Regional shopping mall with anchor stores, restaurants, and entertainment facilities.",
      services: ["Quantity Surveying", "Project Management"],
    },
    {
      id: 6,
      title: "Zomba University Housing",
      category: "Residential",
      location: "Zomba",
      year: "2021",
      value: "$1.5M",
      image: "/placeholder.svg?height=300&width=400",
      description: "Student accommodation complex with modern dormitories and study facilities.",
      services: ["Real Estate Development", "Building Surveying"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-contrast-dark mb-6">Our Portfolio</h1>
            <p className="text-xl text-slate-800 max-w-3xl mx-auto">
              Explore our successful projects across Malawi, showcasing our expertise in real estate development and
              construction
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-primary/5 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-contrast-dark font-medium">Projects Completed</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">$25M+</div>
              <p className="text-contrast-dark font-medium">Total Project Value</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-contrast-dark font-medium">Years Experience</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-contrast-dark font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-contrast-dark mb-4 md:mb-0">Featured Projects</h2>
            <div className="flex gap-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Filter className="h-4 w-4 mr-2" />
                All Projects
              </Button>
              <Button variant="outline" className="border-secondary text-slate-800 hover:bg-secondary hover:text-white">
                Commercial
              </Button>
              <Button variant="outline" className="border-secondary text-slate-800 hover:bg-secondary hover:text-white">
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 font-semibold text-brand-complimentary border-white">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
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
                    <p className="text-sm font-medium text-contrast-dark mb-2">Services Provided:</p>
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
      <section className="py-20 bg-contrast-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you bring your vision to life with our comprehensive real estate development and construction
            services.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            DISCUSS YOUR PROJECT
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
