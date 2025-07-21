import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  Building2,
  FileText,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Users,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-contrast-dark mb-6">Our Services</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Comprehensive real estate development and construction services tailored to meet your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quantity Surveying */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Calculator className="h-12 w-12 text-primary mr-4" />
                  <h2 className="text-3xl font-bold text-contrast-dark">Quantity Surveying Consultancy</h2>
                </div>
                <p className="text-lg text-secondary mb-6">
                  Professional cost management and quantity surveying services for construction projects of all scales.
                  Our certified quantity surveyors ensure accurate cost estimation and effective project financial
                  management.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Cost Planning and Estimation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Bill of Quantities Preparation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Contract Administration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Value Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Final Account Settlement</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Get Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Quantity surveying services"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Real Estate Development */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Real estate development"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <Building2 className="h-12 w-12 text-primary mr-4" />
                  <h2 className="text-3xl font-bold text-contrast-dark">Real Estate Development</h2>
                </div>
                <p className="text-lg text-secondary mb-6">
                  End-to-end real estate development services from concept to completion. We manage every aspect of your
                  development project to ensure successful delivery within budget and timeline.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Site Analysis and Feasibility Studies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Project Planning and Design Coordination</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Construction Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Quality Control and Assurance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Project Handover and Support</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Start Project <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Real Estate Transactions */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="h-12 w-12 text-primary mr-4" />
                  <h2 className="text-3xl font-bold text-contrast-dark">Real Estate Transactions</h2>
                </div>
                <p className="text-lg text-secondary mb-6">
                  Expert guidance on property transactions, valuations, and investment opportunities. Our team ensures
                  smooth and transparent property deals with complete legal compliance.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Property Valuations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Due Diligence Services</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Transaction Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Investment Advisory</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Legal Documentation Support</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Consult Now <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Real estate transactions"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Research and Market Commentary */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Market research and analysis"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-12 w-12 text-primary mr-4" />
                  <h2 className="text-3xl font-bold text-contrast-dark">Research & Market Commentary</h2>
                </div>
                <p className="text-lg text-secondary mb-6">
                  In-depth market analysis and research to inform your real estate investment decisions. Our
                  comprehensive reports provide valuable insights into Malawi's property market trends.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Market Trend Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Investment Opportunity Reports</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Property Price Forecasting</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Sector-Specific Studies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-contrast-dark">Custom Research Services</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Request Research <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Link href="/store">
                    <Button
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                    >
                      Browse Reports
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-contrast-dark mb-4">Why Choose Realcon Associates?</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our commitment to excellence and professional expertise sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-neutral/30 text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-3">Timely Delivery</h3>
                <p className="text-secondary">
                  We pride ourselves on delivering projects on time and within budget, every time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral/30 text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-3">Quality Assurance</h3>
                <p className="text-secondary">
                  Rigorous quality control processes ensure the highest standards in all our work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral/30 text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-3">Expert Team</h3>
                <p className="text-secondary">
                  Our certified professionals bring years of experience and industry expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral/30 text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-contrast-dark mb-3">Client-Focused</h3>
                <p className="text-secondary">
                  Personalized solutions tailored to meet your specific project requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-contrast-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a personalized consultation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              GET FREE CONSULTATION
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
