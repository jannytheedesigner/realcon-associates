import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  Tag,
  Eye,
  Download,
  Facebook,
  Twitter,
  Linkedin,
  LinkIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Blog post data - in a real app, this would come from a database or CMS
const blogPosts = {
  "malawi-real-estate-market-outlook-2024": {
    id: 1,
    title: "Malawi Real Estate Market Outlook 2024",
    subtitle: "Comprehensive Analysis of Market Trends and Investment Opportunities",
    excerpt:
      "Comprehensive analysis of current market trends, investment opportunities, and future projections for Malawi's real estate sector.",
    content: `
      <p>The Malawi real estate market is experiencing unprecedented growth and transformation in 2024, driven by economic reforms, infrastructure development, and increasing foreign investment. This comprehensive analysis examines the key trends shaping the market and identifies promising investment opportunities for both local and international investors.</p>

      <h2>Market Overview</h2>
      <p>Malawi's real estate sector has shown remarkable resilience despite global economic challenges. The market has benefited from government initiatives to improve the business environment, including streamlined property registration processes and enhanced legal frameworks for property ownership.</p>

      <p>Key market indicators show:</p>
      <ul>
        <li>15% year-over-year growth in property values in urban areas</li>
        <li>Increased demand for commercial and residential properties</li>
        <li>Growing interest from international investors</li>
        <li>Expansion of mortgage financing options</li>
      </ul>

      <h2>Regional Analysis</h2>
      <h3>Blantyre Commercial District</h3>
      <p>Blantyre continues to be the commercial hub of Malawi, with significant developments in the Central Business District. The area has seen a 20% increase in commercial property values, driven by demand for modern office spaces and retail facilities.</p>

      <h3>Lilongwe Expansion</h3>
      <p>As the capital city, Lilongwe is experiencing rapid expansion, particularly in the Areas 43-47 corridor. New residential developments and commercial complexes are transforming the city's skyline.</p>

      <h3>Mzuzu Growth</h3>
      <p>The northern region's commercial center is emerging as an attractive investment destination, with lower entry costs and significant growth potential.</p>

      <h2>Investment Opportunities</h2>
      <p>Several sectors present compelling investment opportunities:</p>

      <h3>Affordable Housing</h3>
      <p>There's a significant shortage of affordable housing units, creating opportunities for developers who can deliver quality housing at accessible price points. Government initiatives supporting affordable housing development provide additional incentives.</p>

      <h3>Commercial Real Estate</h3>
      <p>The growing economy has increased demand for modern office spaces, retail centers, and industrial facilities. International companies establishing operations in Malawi are driving this demand.</p>

      <h3>Tourism and Hospitality</h3>
      <p>Malawi's tourism sector is recovering strongly, creating opportunities for hotel and resort developments, particularly around Lake Malawi and national parks.</p>

      <h2>Market Challenges</h2>
      <p>Despite positive trends, several challenges remain:</p>
      <ul>
        <li>Limited access to long-term financing</li>
        <li>Infrastructure constraints in some areas</li>
        <li>Regulatory complexities for foreign investors</li>
        <li>Skills shortage in construction and development</li>
      </ul>

      <h2>Future Projections</h2>
      <p>Looking ahead to 2025 and beyond, we anticipate:</p>
      <ul>
        <li>Continued growth in urban property values</li>
        <li>Increased foreign direct investment in real estate</li>
        <li>Development of new satellite towns around major cities</li>
        <li>Growth in industrial and logistics real estate</li>
      </ul>

      <h2>Recommendations for Investors</h2>
      <p>Based on our analysis, we recommend:</p>
      <ol>
        <li>Focus on urban markets with strong economic fundamentals</li>
        <li>Consider partnerships with local developers</li>
        <li>Invest in properties with clear title and proper documentation</li>
        <li>Diversify across residential, commercial, and industrial sectors</li>
        <li>Engage professional property management services</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The Malawi real estate market presents significant opportunities for informed investors. While challenges exist, the overall trajectory is positive, supported by economic growth, infrastructure development, and improving regulatory frameworks. Success in this market requires local knowledge, professional guidance, and a long-term investment perspective.</p>
    `,
    category: "Market Analysis",
    author: {
      name: "Grace Mwale",
      title: "Market Research Analyst",
      bio: "Grace specializes in real estate market analysis and investment research, providing data-driven insights for strategic decision making.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    publishedDate: "December 15, 2024",
    readTime: "8 min read",
    views: 1247,
    likes: 89,
    comments: 23,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Market Analysis", "Investment", "Malawi", "Real Estate", "2024 Outlook"],
    featured: true,
    relatedPosts: [
      "understanding-quantity-surveying-in-modern-construction",
      "investment-opportunities-in-blantyre-commercial-sector",
      "sustainable-building-practices-in-malawi",
    ],
    downloadableResources: [
      {
        title: "Malawi Real Estate Market Report 2024 (Full PDF)",
        description: "Complete 45-page market analysis with charts and data",
        fileSize: "2.3 MB",
        format: "PDF",
      },
      {
        title: "Investment Opportunity Matrix",
        description: "Excel spreadsheet with investment analysis tools",
        fileSize: "1.1 MB",
        format: "Excel",
      },
    ],
  },
  "understanding-quantity-surveying-in-modern-construction": {
    id: 2,
    title: "Understanding Quantity Surveying in Modern Construction",
    subtitle: "A Comprehensive Guide to Cost Management and Project Estimation",
    excerpt:
      "A detailed guide to quantity surveying practices, cost management strategies, and their importance in construction projects.",
    content: `
      <p>Quantity surveying plays a crucial role in modern construction projects, serving as the backbone of cost management and financial control. This comprehensive guide explores the evolving role of quantity surveyors and the essential practices that ensure project success.</p>

      <h2>What is Quantity Surveying?</h2>
      <p>Quantity surveying is a professional discipline that focuses on the commercial and contractual aspects of construction projects. Quantity surveyors are responsible for managing costs throughout the project lifecycle, from initial feasibility studies to final account settlement.</p>

      <h2>Core Responsibilities</h2>
      <h3>Pre-Construction Phase</h3>
      <ul>
        <li>Feasibility studies and cost planning</li>
        <li>Preparation of bills of quantities</li>
        <li>Tender documentation and evaluation</li>
        <li>Value engineering recommendations</li>
      </ul>

      <h3>Construction Phase</h3>
      <ul>
        <li>Cost monitoring and control</li>
        <li>Variation order management</li>
        <li>Progress payment certification</li>
        <li>Risk assessment and mitigation</li>
      </ul>

      <h3>Post-Construction Phase</h3>
      <ul>
        <li>Final account preparation</li>
        <li>Dispute resolution</li>
        <li>Project cost analysis</li>
        <li>Lessons learned documentation</li>
      </ul>

      <h2>Modern Tools and Technologies</h2>
      <p>The quantity surveying profession has embraced digital transformation:</p>

      <h3>Building Information Modeling (BIM)</h3>
      <p>BIM technology enables quantity surveyors to extract accurate quantities directly from 3D models, improving accuracy and efficiency in cost estimation.</p>

      <h3>Cost Management Software</h3>
      <p>Specialized software solutions help manage project costs, track variations, and generate reports in real-time.</p>

      <h3>Digital Measurement Tools</h3>
      <p>Advanced measurement tools and mobile applications streamline the quantity take-off process.</p>

      <h2>Best Practices in Malawi</h2>
      <p>In the Malawi construction context, quantity surveyors must consider:</p>
      <ul>
        <li>Local material costs and availability</li>
        <li>Currency fluctuation impacts</li>
        <li>Seasonal construction constraints</li>
        <li>Local labor rates and productivity</li>
        <li>Import duties and logistics costs</li>
      </ul>

      <h2>Career Development</h2>
      <p>The quantity surveying profession offers excellent career prospects in Malawi, with opportunities in:</p>
      <ul>
        <li>Private consulting firms</li>
        <li>Construction companies</li>
        <li>Government agencies</li>
        <li>International development organizations</li>
        <li>Financial institutions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Quantity surveying remains essential to successful construction project delivery. As the construction industry evolves, quantity surveyors must adapt to new technologies and methodologies while maintaining their core focus on cost management and value delivery.</p>
    `,
    category: "Construction",
    author: {
      name: "Sarah Banda",
      title: "Senior Quantity Surveyor",
      bio: "Sarah is a specialist in cost management and project estimation with 12 years of experience in commercial and residential developments across Malawi.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    publishedDate: "December 10, 2024",
    readTime: "6 min read",
    views: 892,
    likes: 67,
    comments: 15,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Quantity Surveying", "Construction", "Cost Management", "Professional Development"],
    featured: false,
    relatedPosts: [
      "malawi-real-estate-market-outlook-2024",
      "sustainable-building-practices-in-malawi",
      "property-transaction-guide-legal-requirements-malawi",
    ],
    downloadableResources: [
      {
        title: "Quantity Surveying Best Practices Guide",
        description: "Professional guide with templates and checklists",
        fileSize: "1.8 MB",
        format: "PDF",
      },
    ],
  },
  "investment-opportunities-in-blantyre-commercial-sector": {
    id: 3,
    title: "Investment Opportunities in Blantyre's Commercial Sector",
    subtitle: "Exploring Growth Potential in Malawi's Commercial Hub",
    excerpt:
      "Exploring the growing commercial real estate opportunities in Blantyre and key factors driving market growth.",
    content: `
      <p>Blantyre, as Malawi's commercial capital, presents compelling investment opportunities in the commercial real estate sector. This analysis examines current market conditions, growth drivers, and specific opportunities for investors.</p>

      <h2>Market Fundamentals</h2>
      <p>Blantyre's commercial real estate market is characterized by:</p>
      <ul>
        <li>Strong demand for modern office spaces</li>
        <li>Limited supply of Grade A commercial buildings</li>
        <li>Growing presence of international companies</li>
        <li>Improving infrastructure and connectivity</li>
      </ul>

      <h2>Key Investment Sectors</h2>
      <h3>Office Buildings</h3>
      <p>The demand for modern office spaces continues to outstrip supply, creating opportunities for developers to build Grade A office buildings with modern amenities.</p>

      <h3>Retail Centers</h3>
      <p>Growing consumer spending and urbanization are driving demand for modern retail facilities, particularly shopping centers and mixed-use developments.</p>

      <h3>Industrial Properties</h3>
      <p>Blantyre's industrial area is expanding, with opportunities for warehouse and manufacturing facilities to serve both local and regional markets.</p>

      <h2>Investment Considerations</h2>
      <p>Successful investment in Blantyre's commercial sector requires consideration of:</p>
      <ul>
        <li>Location and accessibility</li>
        <li>Infrastructure availability</li>
        <li>Tenant demand and rental yields</li>
        <li>Regulatory compliance</li>
        <li>Exit strategy planning</li>
      </ul>

      <h2>Future Outlook</h2>
      <p>The commercial real estate sector in Blantyre is expected to continue growing, driven by economic expansion and increasing business activity.</p>
    `,
    category: "Investment",
    author: {
      name: "James Mbewe",
      title: "Managing Director",
      bio: "James has over 15 years of experience in real estate development and quantity surveying, with professional certifications from RICS and local construction councils.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    publishedDate: "December 5, 2024",
    readTime: "5 min read",
    views: 654,
    likes: 45,
    comments: 12,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Investment", "Commercial Real Estate", "Blantyre", "Market Analysis"],
    featured: false,
    relatedPosts: [
      "malawi-real-estate-market-outlook-2024",
      "understanding-quantity-surveying-in-modern-construction",
      "sustainable-building-practices-in-malawi",
    ],
    downloadableResources: [],
  },
  "sustainable-building-practices-in-malawi": {
    id: 4,
    title: "Sustainable Building Practices in Malawi",
    subtitle: "Green Construction Methods for the Future",
    excerpt:
      "How sustainable construction methods are shaping the future of building development in Malawi's urban centers.",
    content: `
      <p>Sustainable building practices are becoming increasingly important in Malawi as the country seeks to balance development needs with environmental conservation. This article explores current trends and future opportunities in green construction.</p>

      <h2>Current State of Sustainable Construction</h2>
      <p>Malawi's construction industry is gradually adopting sustainable practices, driven by:</p>
      <ul>
        <li>Environmental awareness</li>
        <li>Energy cost considerations</li>
        <li>International development standards</li>
        <li>Government policy initiatives</li>
      </ul>

      <h2>Key Sustainable Practices</h2>
      <h3>Local Material Usage</h3>
      <p>Utilizing locally sourced materials reduces transportation costs and environmental impact while supporting local economies.</p>

      <h3>Energy Efficiency</h3>
      <p>Incorporating energy-efficient design elements and renewable energy systems helps reduce operational costs and environmental impact.</p>

      <h3>Water Conservation</h3>
      <p>Implementing rainwater harvesting and water recycling systems addresses water scarcity challenges.</p>

      <h2>Challenges and Opportunities</h2>
      <p>While challenges exist, including higher upfront costs and limited awareness, opportunities for sustainable construction continue to grow in Malawi.</p>
    `,
    category: "Sustainability",
    author: {
      name: "Michael Phiri",
      title: "Development Manager",
      bio: "Michael is an expert in project management and development coordination with extensive experience in both public and private sector projects.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    publishedDate: "November 28, 2024",
    readTime: "7 min read",
    views: 743,
    likes: 56,
    comments: 18,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Sustainability", "Green Building", "Construction", "Environment"],
    featured: false,
    relatedPosts: [
      "understanding-quantity-surveying-in-modern-construction",
      "malawi-real-estate-market-outlook-2024",
      "property-transaction-guide-legal-requirements-malawi",
    ],
    downloadableResources: [
      {
        title: "Sustainable Building Guidelines for Malawi",
        description: "Comprehensive guide to green construction practices",
        fileSize: "2.1 MB",
        format: "PDF",
      },
    ],
  },
  "property-transaction-guide-legal-requirements-malawi": {
    id: 5,
    title: "Property Transaction Guide: Legal Requirements in Malawi",
    subtitle: "Essential Legal Considerations for Property Buyers and Sellers",
    excerpt: "Essential legal considerations and documentation requirements for property transactions in Malawi.",
    content: `
      <p>Property transactions in Malawi require careful attention to legal requirements and documentation. This comprehensive guide outlines the essential steps and considerations for successful property transactions.</p>

      <h2>Legal Framework</h2>
      <p>Property transactions in Malawi are governed by various laws and regulations, including:</p>
      <ul>
        <li>The Land Act</li>
        <li>The Registered Land Act</li>
        <li>The Physical Planning Act</li>
        <li>Local government bylaws</li>
      </ul>

      <h2>Transaction Process</h2>
      <h3>Due Diligence</h3>
      <p>Proper due diligence is essential and includes:</p>
      <ul>
        <li>Title verification</li>
        <li>Survey confirmation</li>
        <li>Encumbrance checks</li>
        <li>Planning permission verification</li>
      </ul>

      <h3>Documentation Requirements</h3>
      <p>Essential documents include:</p>
      <ul>
        <li>Certificate of title</li>
        <li>Survey plans</li>
        <li>Tax clearance certificates</li>
        <li>Planning permissions</li>
      </ul>

      <h2>Common Pitfalls</h2>
      <p>Buyers and sellers should be aware of common issues that can complicate transactions:</p>
      <ul>
        <li>Incomplete documentation</li>
        <li>Boundary disputes</li>
        <li>Outstanding taxes or fees</li>
        <li>Unauthorized developments</li>
      </ul>

      <h2>Professional Assistance</h2>
      <p>Engaging qualified professionals is crucial for successful property transactions. This includes lawyers, surveyors, and real estate professionals.</p>
    `,
    category: "Legal",
    author: {
      name: "Patricia Kamoto",
      title: "Transaction Specialist",
      bio: "Patricia is an expert in property transactions, legal compliance, and client relations with a focus on residential and commercial property deals.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    publishedDate: "November 20, 2024",
    readTime: "9 min read",
    views: 1089,
    likes: 78,
    comments: 31,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Legal", "Property Transactions", "Documentation", "Compliance"],
    featured: false,
    relatedPosts: [
      "malawi-real-estate-market-outlook-2024",
      "investment-opportunities-in-blantyre-commercial-sector",
      "building-survey-best-practices-property-buyers",
    ],
    downloadableResources: [
      {
        title: "Property Transaction Checklist",
        description: "Step-by-step checklist for property transactions",
        fileSize: "0.8 MB",
        format: "PDF",
      },
      {
        title: "Legal Requirements Summary",
        description: "Summary of legal requirements and documentation",
        fileSize: "1.2 MB",
        format: "PDF",
      },
    ],
  },
  "building-survey-best-practices-property-buyers": {
    id: 6,
    title: "Building Survey Best Practices for Property Buyers",
    subtitle: "Essential Guide to Property Inspections and Assessments",
    excerpt:
      "Important aspects of building surveys and what property buyers should look for when purchasing real estate.",
    content: `
      <p>Building surveys are a critical component of the property buying process, providing essential information about a property's condition and potential issues. This guide outlines best practices for property buyers in Malawi.</p>

      <h2>Types of Building Surveys</h2>
      <h3>Basic Survey</h3>
      <p>A basic survey covers fundamental structural and safety issues, suitable for newer properties in good condition.</p>

      <h3>Comprehensive Survey</h3>
      <p>A detailed examination of all accessible parts of the property, recommended for older or complex properties.</p>

      <h3>Specialized Surveys</h3>
      <p>Focused surveys for specific issues such as structural problems, environmental concerns, or mechanical systems.</p>

      <h2>Key Areas of Focus</h2>
      <h3>Structural Elements</h3>
      <ul>
        <li>Foundation condition</li>
        <li>Wall integrity</li>
        <li>Roof structure and covering</li>
        <li>Floor systems</li>
      </ul>

      <h3>Building Services</h3>
      <ul>
        <li>Electrical systems</li>
        <li>Plumbing and drainage</li>
        <li>HVAC systems</li>
        <li>Fire safety systems</li>
      </ul>

      <h3>Environmental Factors</h3>
      <ul>
        <li>Moisture and dampness</li>
        <li>Ventilation adequacy</li>
        <li>Natural lighting</li>
        <li>Pest infestation signs</li>
      </ul>

      <h2>Interpreting Survey Results</h2>
      <p>Understanding survey findings is crucial for making informed decisions:</p>
      <ul>
        <li>Critical issues requiring immediate attention</li>
        <li>Maintenance items for future consideration</li>
        <li>Cost implications of identified problems</li>
        <li>Negotiation opportunities based on findings</li>
      </ul>

      <h2>Choosing a Surveyor</h2>
      <p>Selecting a qualified building surveyor is essential. Look for:</p>
      <ul>
        <li>Professional qualifications and certifications</li>
        <li>Local market experience</li>
        <li>Comprehensive insurance coverage</li>
        <li>Clear reporting standards</li>
      </ul>

      <h2>Conclusion</h2>
      <p>A thorough building survey is an investment in your property purchase decision. It provides valuable information that can save money and prevent future problems.</p>
    `,
    category: "Property",
    author: {
      name: "David Chirwa",
      title: "Building Surveyor",
      bio: "David is a professional building surveyor with expertise in structural assessments, building inspections, and compliance with local building regulations.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    publishedDate: "November 15, 2024",
    readTime: "6 min read",
    views: 567,
    likes: 42,
    comments: 14,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Building Survey", "Property Inspection", "Due Diligence", "Property Buying"],
    featured: false,
    relatedPosts: [
      "property-transaction-guide-legal-requirements-malawi",
      "malawi-real-estate-market-outlook-2024",
      "understanding-quantity-surveying-in-modern-construction",
    ],
    downloadableResources: [
      {
        title: "Building Survey Checklist",
        description: "Comprehensive checklist for property inspections",
        fileSize: "1.0 MB",
        format: "PDF",
      },
    ],
  },
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    .map((slug) => blogPosts[slug as keyof typeof blogPosts])
    .filter(Boolean)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Article Header */}
      <article className="py-12 bg-gradient-to-br from-neutral to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/blog" className="flex items-center text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
          </div>

          <div className="mb-8">
            <Badge className="bg-primary text-white mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-contrast-dark mb-4">{post.title}</h1>
            <p className="text-xl text-secondary mb-8">{post.subtitle}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-secondary mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.publishedDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  {post.comments}
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-secondary mr-2">Share:</span>
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </article>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none text-secondary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-neutral/30">
                <h3 className="text-lg font-semibold text-contrast-dark mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Downloadable Resources */}
              {post.downloadableResources.length > 0 && (
                <div className="mt-12 pt-8 border-t border-neutral/30">
                  <h3 className="text-lg font-semibold text-contrast-dark mb-4">Downloadable Resources</h3>
                  <div className="space-y-4">
                    {post.downloadableResources.map((resource, index) => (
                      <Card key={index} className="border-primary/20 bg-primary/5">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-contrast-dark mb-2">{resource.title}</h4>
                              <p className="text-sm text-secondary mb-2">{resource.description}</p>
                              <div className="flex items-center gap-4 text-xs text-secondary">
                                <span>{resource.format}</span>
                                <span>{resource.fileSize}</span>
                              </div>
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 text-white ml-4">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-neutral/30">
                <h3 className="text-lg font-semibold text-contrast-dark mb-4">About the Author</h3>
                <Card className="border-neutral/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-contrast-dark mb-1">{post.author.name}</h4>
                        <p className="text-primary font-medium mb-3">{post.author.title}</p>
                        <p className="text-secondary">{post.author.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Table of Contents */}
                <Card className="border-neutral/30">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-contrast-dark mb-4">Table of Contents</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#market-overview" className="block text-secondary hover:text-primary">
                        Market Overview
                      </a>
                      <a href="#regional-analysis" className="block text-secondary hover:text-primary">
                        Regional Analysis
                      </a>
                      <a href="#investment-opportunities" className="block text-secondary hover:text-primary">
                        Investment Opportunities
                      </a>
                      <a href="#market-challenges" className="block text-secondary hover:text-primary">
                        Market Challenges
                      </a>
                      <a href="#future-projections" className="block text-secondary hover:text-primary">
                        Future Projections
                      </a>
                      <a href="#recommendations" className="block text-secondary hover:text-primary">
                        Recommendations
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-contrast-dark mb-4">Stay Updated</h3>
                    <p className="text-sm text-secondary mb-4">
                      Get the latest insights and analysis delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 border border-neutral rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card className="border-neutral/30">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-contrast-dark mb-4">Popular Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.slice(0, 3).map((relatedPost, index) => (
                        <Link key={index} href={`/blog/${relatedPost.id}`} className="block group">
                          <div className="flex gap-3">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              width={60}
                              height={60}
                              className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-contrast-dark group-hover:text-primary line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-secondary mt-1">{relatedPost.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-contrast-dark mb-4">Related Articles</h2>
            <p className="text-lg text-secondary">Continue reading with these related insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Card
                key={index}
                className="border-neutral/30 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{relatedPost.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-contrast-dark mb-3 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-3">{relatedPost.excerpt}</p>

                  <div className="flex items-center text-xs text-secondary mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{relatedPost.author.name}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{relatedPost.publishedDate}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{relatedPost.readTime}</span>
                  </div>

                  <Link href={`/blog/${params.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Professional Consultation?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you with your real estate and construction needs. Contact us for
            personalized advice and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                GET CONSULTATION
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              >
                VIEW SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
