import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  Target,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ProjectTimeline } from "@/components/project-timeline"
import { projectTimelines } from "@/lib/project-timeline-data"

// Project data - in a real app, this would come from a database
const projects = {
  "blantyre-commercial-complex": {
    id: 1,
    title: "Blantyre Commercial Complex",
    subtitle: "Modern Mixed-Use Development",
    category: "Commercial",
    location: "Blantyre CBD, Malawi",
    year: "2023",
    duration: "18 months",
    value: "$2.5M",
    client: "Blantyre Development Corporation",
    status: "Completed",
    area: "15,000 sq ft",
    description:
      "A landmark commercial development in the heart of Blantyre's Central Business District, featuring modern retail spaces, premium office suites, and underground parking facilities. This project represents a significant investment in Malawi's commercial infrastructure.",
    challenge:
      "The main challenge was developing a modern commercial complex in a densely populated urban area while maintaining accessibility and adhering to strict local building regulations. The project required careful coordination with city planning authorities and utility providers.",
    solution:
      "Our team developed an innovative design that maximized space utilization while ensuring compliance with all local regulations. We implemented a phased construction approach that minimized disruption to surrounding businesses and traffic flow.",
    services: ["Quantity Surveying", "Project Management", "Development Coordination", "Building Surveying"],
    features: [
      "Modern retail spaces with flexible layouts",
      "Premium office suites with contemporary amenities",
      "Underground parking for 100+ vehicles",
      "Energy-efficient lighting and HVAC systems",
      "Accessible design compliant with disability standards",
      "24/7 security and surveillance systems",
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Completed commercial complex exterior view",
        alt: "Modern commercial building exterior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Retail space interior with modern finishes",
        alt: "Interior retail space",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Premium office suite with city views",
        alt: "Office interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Underground parking facility",
        alt: "Parking garage",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Construction progress - structural phase",
        alt: "Construction progress",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Architectural details and facade work",
        alt: "Building facade details",
      },
    ],
    testimonial: {
      quote:
        "Realcon Associates delivered exceptional project management and quantity surveying services. Their attention to detail and professional approach ensured our project was completed on time and within budget.",
      author: "John Banda",
      position: "Project Director, Blantyre Development Corporation",
    },
    nextProject: "limbe-residential-estate",
    prevProject: "mzuzu-shopping-mall",
  },
  "limbe-residential-estate": {
    id: 2,
    title: "Limbe Residential Estate",
    subtitle: "Luxury Housing Development",
    category: "Residential",
    location: "Limbe, Blantyre",
    year: "2023",
    duration: "24 months",
    value: "$1.8M",
    client: "Limbe Properties Ltd",
    status: "Completed",
    area: "25 acres",
    description:
      "An exclusive residential development featuring 50 luxury housing units with modern amenities and community facilities. The estate offers a perfect blend of contemporary living and natural surroundings.",
    challenge:
      "Developing a luxury residential estate while maintaining affordability for the target market. The project required careful balance between premium features and cost-effective construction methods.",
    solution:
      "We implemented value engineering techniques to optimize costs without compromising quality. Our team designed flexible housing layouts that could accommodate different family sizes and preferences while maintaining architectural consistency.",
    services: ["Real Estate Development", "Market Analysis", "Project Coordination", "Quality Control"],
    features: [
      "50 luxury housing units with modern designs",
      "Community clubhouse and recreational facilities",
      "Children's playground and green spaces",
      "24/7 security with gated access",
      "Underground utilities and fiber optic connectivity",
      "Sustainable landscaping with indigenous plants",
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Aerial view of completed residential estate",
        alt: "Residential estate aerial view",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Luxury housing unit exterior",
        alt: "House exterior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Modern kitchen and living area",
        alt: "Interior living space",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Community clubhouse and pool area",
        alt: "Clubhouse facilities",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Landscaped gardens and walkways",
        alt: "Estate landscaping",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Construction phase - foundation work",
        alt: "Construction progress",
      },
    ],
    testimonial: {
      quote:
        "The team's expertise in residential development and market analysis was invaluable. They helped us create a product that perfectly matched our target market's needs and expectations.",
      author: "Grace Mwale",
      position: "Managing Director, Limbe Properties Ltd",
    },
    nextProject: "industrial-manufacturing-facility",
    prevProject: "blantyre-commercial-complex",
  },
  "industrial-manufacturing-facility": {
    id: 3,
    title: "Industrial Manufacturing Facility",
    subtitle: "State-of-the-Art Production Complex",
    category: "Industrial",
    location: "Blantyre Industrial Area",
    year: "2022",
    duration: "15 months",
    value: "$3.2M",
    client: "Malawi Manufacturing Corp",
    status: "Completed",
    area: "50,000 sq ft",
    description:
      "A modern manufacturing facility designed for efficient production operations with advanced infrastructure and utilities. The facility incorporates sustainable design principles and modern safety standards.",
    challenge:
      "Creating a manufacturing facility that meets international standards while working within local infrastructure limitations. The project required specialized knowledge of industrial construction and regulatory compliance.",
    solution:
      "Our team collaborated with international consultants to ensure the facility met global manufacturing standards. We implemented innovative solutions for power backup, water treatment, and waste management systems.",
    services: ["Quantity Surveying", "Building Surveying", "Project Management", "Compliance Coordination"],
    features: [
      "50,000 sq ft production floor with overhead cranes",
      "Advanced HVAC and air filtration systems",
      "Backup power generation and UPS systems",
      "Water treatment and recycling facilities",
      "Loading docks with hydraulic levelers",
      "Administrative offices and quality control labs",
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Completed manufacturing facility exterior",
        alt: "Industrial facility exterior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Production floor with overhead crane systems",
        alt: "Production floor interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Quality control laboratory facilities",
        alt: "Laboratory interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Loading dock and logistics area",
        alt: "Loading dock facilities",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Administrative office spaces",
        alt: "Office interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Steel structure installation phase",
        alt: "Construction steel work",
      },
    ],
    testimonial: {
      quote:
        "Realcon Associates demonstrated exceptional expertise in industrial construction. Their quantity surveying services helped us maintain strict budget control throughout the project.",
      author: "Peter Phiri",
      position: "Operations Manager, Malawi Manufacturing Corp",
    },
    nextProject: "lilongwe-office-tower",
    prevProject: "limbe-residential-estate",
  },
  "lilongwe-office-tower": {
    id: 4,
    title: "Lilongwe Office Tower",
    subtitle: "Premium High-Rise Development",
    category: "Commercial",
    location: "Lilongwe City Centre",
    year: "2022",
    duration: "30 months",
    value: "$4.1M",
    client: "Capital City Developments",
    status: "Completed",
    area: "120,000 sq ft",
    description:
      "A 15-story premium office tower in Lilongwe's central business district, featuring modern office spaces, conference facilities, and retail outlets on the ground floor. This landmark building sets new standards for commercial development in Malawi.",
    challenge:
      "Constructing a high-rise building in Lilongwe required specialized engineering solutions and careful coordination with multiple stakeholders. The project faced challenges related to soil conditions and utility infrastructure.",
    solution:
      "We conducted comprehensive geotechnical studies and implemented deep foundation solutions. Our team coordinated closely with utility providers to ensure adequate infrastructure support for the high-rise development.",
    services: ["Development Proposals", "Transaction Management", "Project Coordination", "Building Surveying"],
    features: [
      "15 floors of premium office space",
      "High-speed elevators with backup systems",
      "Conference and meeting facilities",
      "Ground floor retail and banking spaces",
      "Rooftop telecommunications infrastructure",
      "Energy-efficient building management systems",
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Completed 15-story office tower",
        alt: "Office tower exterior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Premium office space with city views",
        alt: "Office interior with windows",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Modern conference room facilities",
        alt: "Conference room interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Ground floor retail and banking area",
        alt: "Ground floor retail space",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Building lobby with modern finishes",
        alt: "Building lobby interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Construction progress - mid-rise phase",
        alt: "Construction progress",
      },
    ],
    testimonial: {
      quote:
        "The development proposals and transaction management services provided by Realcon Associates were instrumental in securing financing and regulatory approvals for this complex project.",
      author: "Sarah Kamoto",
      position: "CEO, Capital City Developments",
    },
    nextProject: "mzuzu-shopping-mall",
    prevProject: "industrial-manufacturing-facility",
  },
  "mzuzu-shopping-mall": {
    id: 5,
    title: "Mzuzu Shopping Mall",
    subtitle: "Regional Retail Destination",
    category: "Retail",
    location: "Mzuzu, Northern Region",
    year: "2021",
    duration: "20 months",
    value: "$2.8M",
    client: "Northern Retail Group",
    status: "Completed",
    area: "80,000 sq ft",
    description:
      "The largest shopping mall in Northern Malawi, featuring anchor stores, specialty retail outlets, restaurants, and entertainment facilities. This project serves as a regional retail hub for the northern region.",
    challenge:
      "Developing a large-scale retail facility in a region with limited commercial infrastructure. The project required careful market analysis and innovative design solutions to attract both local and international retailers.",
    solution:
      "Our market research team conducted extensive analysis of the northern region's retail potential. We designed flexible retail spaces that could accommodate various store formats and implemented phased leasing strategies.",
    services: ["Quantity Surveying", "Project Management", "Market Analysis", "Tenant Coordination"],
    features: [
      "80,000 sq ft of retail space across two levels",
      "Anchor stores and specialty retail outlets",
      "Food court with diverse dining options",
      "Entertainment zone with cinema facilities",
      "Ample parking for 500+ vehicles",
      "Modern security and fire safety systems",
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Mzuzu Shopping Mall main entrance",
        alt: "Shopping mall exterior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Main atrium with natural lighting",
        alt: "Mall interior atrium",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Retail corridor with modern finishes",
        alt: "Retail corridor interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Food court and dining area",
        alt: "Food court interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Anchor store space with high ceilings",
        alt: "Anchor store interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Construction phase - roof installation",
        alt: "Construction roof work",
      },
    ],
    testimonial: {
      quote:
        "Realcon Associates' market analysis and project management expertise were crucial to the success of this regional retail development. Their understanding of local market dynamics was exceptional.",
      author: "Michael Banda",
      position: "Development Manager, Northern Retail Group",
    },
    nextProject: "zomba-university-housing",
    prevProject: "lilongwe-office-tower",
  },
  "zomba-university-housing": {
    id: 6,
    title: "Zomba University Housing",
    subtitle: "Modern Student Accommodation",
    category: "Residential",
    location: "Zomba, Southern Region",
    year: "2021",
    duration: "12 months",
    value: "$1.5M",
    client: "University of Malawi",
    status: "Completed",
    area: "40,000 sq ft",
    description:
      "Modern student accommodation complex designed to house 300+ students with contemporary amenities and study facilities. The project addresses the growing need for quality student housing in Malawi's educational sector.",
    challenge:
      "Creating affordable yet modern student accommodation that meets university standards while staying within a limited budget. The project required innovative design solutions to maximize occupancy while ensuring student comfort.",
    solution:
      "We developed modular housing units that could be efficiently constructed and easily maintained. The design incorporated shared facilities to reduce costs while providing private study spaces for academic success.",
    services: ["Real Estate Development", "Building Surveying", "Cost Management", "Project Coordination"],
    features: [
      "300+ student accommodation units",
      "Shared kitchen and dining facilities",
      "Study rooms and library spaces",
      "Recreation and common areas",
      "Laundry and maintenance facilities",
      "24/7 security and access control",
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "University housing complex overview",
        alt: "Student housing exterior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Modern student dormitory rooms",
        alt: "Dormitory room interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Shared kitchen and dining facilities",
        alt: "Kitchen and dining area",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Study room with modern furnishings",
        alt: "Study room interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Recreation and common area",
        alt: "Common area interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Construction progress - block completion",
        alt: "Construction progress",
      },
    ],
    testimonial: {
      quote:
        "The student housing project exceeded our expectations in terms of quality and cost-effectiveness. Realcon Associates delivered modern facilities that truly enhance the student experience.",
      author: "Dr. Patricia Mwale",
      position: "Director of Student Affairs, University of Malawi",
    },
    nextProject: "blantyre-commercial-complex",
    prevProject: "mzuzu-shopping-mall",
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/portfolio" className="flex items-center text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary text-white mb-4">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-contrast-dark mb-4">{project.title}</h1>
              <p className="text-xl text-secondary mb-6">{project.subtitle}</p>
              <p className="text-lg text-secondary mb-8">{project.description}</p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-secondary">Location</p>
                    <p className="font-semibold text-contrast-dark">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-secondary">Completed</p>
                    <p className="font-semibold text-contrast-dark">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-secondary">Project Value</p>
                    <p className="font-semibold text-contrast-dark">{project.value}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-secondary">Duration</p>
                    <p className="font-semibold text-contrast-dark">{project.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={project.images[0].url || "/placeholder.svg"}
                alt={project.images[0].alt}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-contrast-dark mb-6">Project Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="border-neutral/30">
                    <CardContent className="p-6">
                      <Target className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-bold text-contrast-dark mb-3">Challenge</h3>
                      <p className="text-secondary">{project.challenge}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-neutral/30">
                    <CardContent className="p-6">
                      <Award className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-bold text-contrast-dark mb-3">Solution</h3>
                      <p className="text-secondary">{project.solution}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-contrast-dark mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Timeline */}
              <div className="mb-12">
                <ProjectTimeline
                  phases={projectTimelines[params.slug as keyof typeof projectTimelines] || []}
                  projectTitle={project.title}
                />
              </div>

              {/* Project Gallery */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-contrast-dark mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-xl">
                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                      <p className="text-sm text-secondary mt-2">{image.caption}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-contrast-dark mb-6">Client Testimonial</h2>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-8">
                    <div className="text-4xl text-primary mb-4">"</div>
                    <p className="text-lg text-contrast-dark mb-6 italic">{project.testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-contrast-dark">{project.testimonial.author}</h4>
                        <p className="text-sm text-secondary">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-neutral/30 sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-contrast-dark mb-6">Project Details</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-secondary">Client:</span>
                      <span className="font-semibold text-contrast-dark">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary">Status:</span>
                      <Badge className="bg-green-100 text-green-800">{project.status}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary">Area:</span>
                      <span className="font-semibold text-contrast-dark">{project.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary">Duration:</span>
                      <span className="font-semibold text-contrast-dark">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary">Value:</span>
                      <span className="font-semibold text-primary text-lg">{project.value}</span>
                    </div>
                  </div>

                  <hr className="my-6 border-neutral/30" />

                  <h4 className="font-semibold text-contrast-dark mb-4">Services Provided</h4>
                  <div className="space-y-2">
                    {project.services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <Building2 className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-secondary">{service}</span>
                      </div>
                    ))}
                  </div>

                  <hr className="my-6 border-neutral/30" />

                  <div className="space-y-3">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Start Similar Project</Button>
                    <Button
                      variant="outline"
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                    >
                      Download Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {project.prevProject && (
              <Link href={`/portfolio/${project.prevProject}`} className="group flex items-center">
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-sm text-secondary">Previous Project</p>
                  <p className="font-semibold text-contrast-dark group-hover:text-primary transition-colors">
                    {projects[project.prevProject as keyof typeof projects]?.title}
                  </p>
                </div>
              </Link>
            )}

            <Link href="/portfolio" className="text-primary hover:text-primary/80 font-medium">
              View All Projects
            </Link>

            {project.nextProject && (
              <Link href={`/portfolio/${project.nextProject}`} className="group flex items-center">
                <div className="text-right">
                  <p className="text-sm text-secondary">Next Project</p>
                  <p className="font-semibold text-contrast-dark group-hover:text-primary transition-colors">
                    {projects[project.nextProject as keyof typeof projects]?.title}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-contrast-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in a Similar Project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you bring your vision to life with our comprehensive real estate development and construction
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                DISCUSS YOUR PROJECT
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-contrast-dark px-8 py-3"
              >
                VIEW OUR SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
