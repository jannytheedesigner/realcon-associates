import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Malawi Real Estate Market Outlook 2024",
      excerpt:
        "Comprehensive analysis of current market trends, investment opportunities, and future projections for Malawi's real estate sector.",
      category: "Market Analysis",
      author: "Grace Mwale",
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
      author: "Sarah Banda",
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
      author: "James Mbewe",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "Sustainable Building Practices in Malawi",
      excerpt:
        "How sustainable construction methods are shaping the future of building development in Malawi's urban centers.",
      category: "Sustainability",
      author: "Michael Phiri",
      date: "November 28, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "Property Transaction Guide: Legal Requirements in Malawi",
      excerpt: "Essential legal considerations and documentation requirements for property transactions in Malawi.",
      category: "Legal",
      author: "Patricia Kamoto",
      date: "November 20, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "Building Survey Best Practices for Property Buyers",
      excerpt:
        "Important aspects of building surveys and what property buyers should look for when purchasing real estate.",
      category: "Property",
      author: "David Chirwa",
      date: "November 15, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-contrast-dark mb-6">Industry Insights & News</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and developments in Malawi's real estate and construction
              industry
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-primary text-white mb-4">Featured Article</Badge>
              <h2 className="text-3xl font-bold text-contrast-dark">Latest Insights</h2>
            </div>

            <Card className="border-neutral/30 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{featuredPost.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-contrast-dark mb-4">{featuredPost.title}</h3>
                  <p className="text-secondary text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-secondary mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white w-fit">
                    Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-contrast-dark">Recent Articles</h2>
            <div className="flex gap-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                All Categories
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Market Analysis
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
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
                  <p className="text-secondary text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center text-xs text-secondary mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest market insights, industry news, and expert analysis
            directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-contrast-dark focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-gray-100 px-6">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
