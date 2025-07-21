"use client"

import { Building2, Calculator, FileText, TrendingUp, Users, Star, Quote, ArrowRight, CheckCircle, Calendar, User, Clock} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { HeroSlider } from "@/components/hero-slider"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import FeaturedProperties from "@/components/featured-properties"

function AchievementsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      <div>
        <h1 className="text-7xl font-bold text-brand-primary">
          {inView && <CountUp className="expose" end={200} duration={3} />}+
        </h1>
        <p className="mt-2 text-sm text-slate-600">Completed Projects</p>
      </div>

      <div>
        <h1 className="text-7xl font-bold expose text-brand-primary">
          {inView && <CountUp className="expose" end={100} duration={3} />}%
        </h1>
        <p className="mt-2 text-sm text-slate-600">Client Satisfaction Rate</p>
      </div>

      <div>
        <h1 className="text-7xl expose font-bold text-brand-primary">
          {inView && <CountUp className="expose" end={10} duration={3} />}+
        </h1>
        <p className="mt-2 text-sm text-slate-600">Years of Industry Experience</p>
      </div>

      <div>
        <h1 className="text-7xl font-bold text-brand-primary">
          {inView && <CountUp className="expose" end={50} duration={3} />}+
        </h1>
        <p className="mt-2 text-sm text-slate-600">Corporate Clients & Partnerships</p>
      </div>
    </div>
  )
}

const blogPosts = [
    {
      id: 1,
      title: "Malawi Real Estate Market Outlook 2024",
      excerpt:
        "Comprehensive analysis of current market trends, investment opportunities, and future projections for Malawi's real estate sector.",
      category: "Market Analysis",
      author: "G Mwale",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=250&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Understanding Quantity Surveying in Modern Construction",
      excerpt:
        "A detailed guide to quantity surveying practices, cost management strategies, and their importance in construction projects.",
      category: "Construction",
      author: "S Banda",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Investment Opportunities in Blantyre's Commercial Sector",
      excerpt:
        "Exploring the growing commercial real estate opportunities in Blantyre and key factors driving market growth.",
      category: "Investment",
      author: "J Mbewe",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
    
  ]


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Slider */}
      <section className="relative">
        <HeroSlider />
      </section>

      <section className="py-26 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-row gap-2"><span className="w-2 h-2 bg-brand-primary flex my-auto"></span><p className="text-base my-auto font-semibold text-brand-secondary-dark">Trusted by all our clients and organizations</p></div>
              <h2 className="text-3xl md:text-3xl font-medium text-brand-complimentary mb-6 mt-4">The members of our team of workers always collaborate to ensure that a client's needs are met during a visit or a transaction.</h2>
              <p className="text-base text-slate-900 mb-6">
                Realcon Associates is a Professional Real Estate Development and Construction practice with specialization in Quantity Surveying, Building Surveying,
                Development proposals and Transactions. The practice is registered with the National Construction Industry Council of Malawi and the Registrar of Companies.
                The Head office for the company in Blantyre, Malawi. The main current lines of business for the company are:
              </p>

              <div className="space-y-2">
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
      <section className="py-26 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col mb-10">
            <div className="flex flex-row mx-auto gap-2 mb-3"><span className="w-1 h-1 bg-brand-primary flex my-auto"></span><p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">Our Expertise</p></div>
            <h2 className="text-5xl text-brand-complimentary max-w-2xl mx-auto font-bold mb-4">Comprehensive Real Estate Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-neutral/30 group relative overflow-hidden transition-all hover:-translate-y-1">
              <CardHeader>
                <Calculator className="h-16 w-16 stroke-[1.25px] text-brand-primary mb-4" />
                <CardTitle className="text-contrast-dark group-hover:text-brand-complimentary text-lg">Quantity Surveying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-4">
                  Professional cost management and quantity surveying services for construction projects.
                </p>
                <Link href="/services" className="text-brand-complimentary text-sm w-fit font-semibold hover:text-brand-primary/80 font-medium flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
              <div className="w-[75%] mx-auto absolute h-0 transition-all duration-100 ease-in left-0 right-0 bg-brand-primary bottom-0 group-hover:h-2"></div>
            </Card>

            <Card className="border-neutral/30 group relative overflow-hidden transition-all hover:-translate-y-1">
              <CardHeader>
                <Building2 className="h-16 w-16 stroke-[1.25px] text-brand-primary mb-4" />
                <CardTitle className="text-contrast-dark group-hover:text-brand-complimentary text-lg">Real Estate Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">End-to-end development services from concept to completion.</p>
                <Link href="/services" className="text-brand-complimentary text-sm w-fit font-semibold hover:text-brand-primary/80 font-medium flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
              <div className="w-[75%] mx-auto absolute h-0 transition-all duration-100 ease-in left-0 right-0 bg-brand-primary bottom-0 group-hover:h-2"></div>
            </Card>

            <Card className="border-neutral/30 group relative overflow-hidden transition-all hover:-translate-y-1">
              <CardHeader>
                <FileText className="h-16 w-16 stroke-[1.25px] text-brand-primary mb-4" />
                <CardTitle className="text-contrast-dark group-hover:text-brand-complimentary text-lg">Property Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">Expert guidance on property transactions and valuations.</p>
                <Link href="/services" className="text-brand-complimentary w-fit text-sm font-semibold hover:text-brand-primary/80 font-medium flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
              <div className="w-[75%] mx-auto absolute h-0 transition-all duration-100 ease-in left-0 right-0 bg-brand-primary bottom-0 group-hover:h-2"></div>
            </Card>

            <Card className="border-neutral/30 group relative overflow-hidden transition-all hover:-translate-y-1">
              <CardHeader>
                <TrendingUp className="h-16 w-16 stroke-[1.25px] text-brand-primary mb-4" />
                <CardTitle className="text-contrast-dark group-hover:text-brand-complimentary text-lg">Market Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">In-depth market analysis and research for informed decisions.</p>
                <Link href="/services" className="text-brand-complimentary w-fit text-sm font-semibold hover:text-brand-primary/80 font-medium flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
              <div className="w-[75%] mx-auto absolute h-0 transition-all duration-100 ease-in left-0 right-0 bg-brand-primary bottom-0 group-hover:h-2"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-26 bg-brand-complimentary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <div className="flex flex-row gap-2 mb-3"><span className="w-1 h-1 bg-brand-primary flex my-auto"></span><p className="text-sm my-auto font-semibold text-white/70">REALCON PORTFOLIO</p></div>
            <h2 className="text-5xl font-bold text-white mb-4">Our Past Projects & Experiences</h2>
            <p className="text-white/80 text-lg max-w-2xl mr-auto">
              Explore some of our recent successful projects across Malawi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/project-1.jpg"
                  alt="Commercial Development Project"
                  width={400}
                  height={300}
                  className="w-full h-[20em] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-bold mb-2">Commercial Complex</h3>
                  <p className="text-sm">Blantyre CBD Development</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/project-2.jpg"
                  alt="Residential Development Project"
                  width={400}
                  height={300}
                  className="w-full h-[20em] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-bold mb-2">Residential Estate</h3>
                  <p className="text-sm">Limbe Housing Project</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/project-3.jpg"
                  alt="Industrial Development Project"
                  width={400}
                  height={300}
                  className="w-full h-[20em] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-bold mb-2">Industrial Facility</h3>
                  <p className="text-sm">Manufacturing Complex</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-26 bg-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col mb-12">
            <div className="flex flex-row mx-auto gap-2 mb-3">
              <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
              <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">Our Track Record</p>
            </div>
            <h2 className="text-5xl text-brand-complimentary font-bold mb-4">Excellence & Milestones</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Over the years, Realcon Associates has achieved key milestones and delivered impactful results in Malawi’s real estate and construction industry.
            </p>
          </div>

          <AchievementsCounter />
        </div>
      </section>

      {/* Properties Section */}
      <FeaturedProperties />


      {/* Insights & News Section */}
      <section className="py-26 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left flex flex-col mb-8">
            <div className="flex flex-row mr-auto gap-2 mb-3">
              <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
              <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">Insights & News</p>
            </div>
            <h2 className="text-5xl text-brand-complimentary font-bold mb-4">Latest Industry Insights</h2>
            <p className="text-slate-600 max-w-2xl mr-auto">
              Stay updated with the latest trends, advice, and market news in real estate and construction across Malawi and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border-neutral/30 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-contrast-dark mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center text-xs text-gray-800 mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-brand-primary text-sm font-semibold text-brand-complimentary hover:bg-brand-primary hover:text-brand-complimentary/90"
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/insights">
              <button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium px-6 py-3 rounded-md">
                View All Articles
              </button>
            </Link>
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-white">
        <div className="max-w-7xl mx-auto bg-brand-primary p-20 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-regular max-w-2xl mx-auto mb-4">Schedule a Meeting</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking to develop, invest, or sell — our team is ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant={"secondary"} className="bg-white text-brand-complimentary hover:bg-white/90 px-8 py-3 font-semibold">
                Get In Touch
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-brand-secondary hover:border-brand-secondary hover:text-white"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
