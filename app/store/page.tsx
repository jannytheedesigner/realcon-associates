import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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

export default function StorePage() {
  const publications = [
    {
      id: 1,
      title: "Malawi Real Estate Market Report 2024",
      description:
        "Comprehensive analysis of Malawi's real estate market trends, investment opportunities, and future projections.",
      category: "Market Analysis",
      price: "$49.99",
      pages: 85,
      rating: 4.8,
      reviews: 24,
      image: "/placeholder.svg?height=300&width=200",
      bestseller: true,
      preview: true,
    },
    {
      id: 2,
      title: "Quantity Surveying Best Practices Guide",
      description:
        "Professional guide covering modern quantity surveying techniques, cost management, and project estimation methods.",
      category: "Construction",
      price: "$39.99",
      pages: 120,
      rating: 4.9,
      reviews: 18,
      image: "/placeholder.svg?height=300&width=200",
      bestseller: false,
      preview: true,
    },
    {
      id: 3,
      title: "Property Investment Strategies in Malawi",
      description:
        "Strategic insights into property investment opportunities, risk assessment, and portfolio management in Malawi.",
      category: "Investment",
      price: "$44.99",
      pages: 95,
      rating: 4.7,
      reviews: 31,
      image: "/placeholder.svg?height=300&width=200",
      bestseller: false,
      preview: true,
    },
    {
      id: 4,
      title: "Building Regulations and Compliance Manual",
      description:
        "Complete guide to building regulations, compliance requirements, and legal frameworks in Malawi's construction industry.",
      category: "Legal",
      price: "$54.99",
      pages: 150,
      rating: 4.6,
      reviews: 15,
      image: "/placeholder.svg?height=300&width=200",
      bestseller: false,
      preview: false,
    },
    {
      id: 5,
      title: "Sustainable Construction Practices",
      description:
        "Innovative approaches to sustainable building design, green construction methods, and environmental considerations.",
      category: "Sustainability",
      price: "$42.99",
      pages: 110,
      rating: 4.8,
      reviews: 22,
      image: "/placeholder.svg?height=300&width=200",
      bestseller: false,
      preview: true,
    },
    {
      id: 6,
      title: "Commercial Real Estate Development Guide",
      description:
        "Step-by-step guide to commercial real estate development, from site selection to project completion and management.",
      category: "Development",
      price: "$59.99",
      pages: 180,
      rating: 4.9,
      reviews: 28,
      image: "/placeholder.svg?height=300&width=200",
      bestseller: true,
      preview: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-contrast-dark mb-6">Research Publications Store</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Access our comprehensive collection of research studies, market reports, and professional guides
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
              <input
                type="text"
                placeholder="Search publications..."
                className="w-full pl-10 pr-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Filter className="h-4 w-4 mr-2" />
                All Categories
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Market Analysis
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
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
                className="border-neutral/30 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
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

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-contrast-dark mb-3 line-clamp-2">{publication.title}</h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-3">{publication.description}</p>

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
                      <span className="text-sm text-secondary ml-2">
                        {publication.rating} ({publication.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-secondary">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>{publication.pages} pages</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>PDF Format</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{publication.price}</div>
                    <div className="flex gap-2">
                      {publication.preview && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                        >
                          Preview
                        </Button>
                      )}
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-contrast-dark mb-4">Browse by Category</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Explore our specialized research areas and find the insights you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-neutral/30 hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Market Analysis</h3>
                <p className="text-secondary text-sm mb-4">Comprehensive market reports and trend analysis</p>
                <Badge variant="outline" className="border-primary text-primary">
                  8 Publications
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-neutral/30 hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Construction</h3>
                <p className="text-secondary text-sm mb-4">Technical guides and best practices</p>
                <Badge variant="outline" className="border-primary text-primary">
                  12 Publications
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-neutral/30 hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <CardContent className="p-6">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Quantity Surveying</h3>
                <p className="text-secondary text-sm mb-4">Professional surveying methodologies</p>
                <Badge variant="outline" className="border-primary text-primary">
                  6 Publications
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-neutral/30 hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <CardContent className="p-6">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Investment</h3>
                <p className="text-secondary text-sm mb-4">Investment strategies and opportunities</p>
                <Badge variant="outline" className="border-primary text-primary">
                  10 Publications
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-contrast-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Custom Research?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Looking for specific market analysis or custom research reports? Our team can provide tailored research
            solutions for your needs.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            REQUEST CUSTOM RESEARCH
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
