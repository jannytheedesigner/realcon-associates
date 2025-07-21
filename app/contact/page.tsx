import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-contrast-dark mb-6">Get In Touch</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Ready to start your next project? Contact our team of professionals for expert consultation and
              personalized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-contrast-dark mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-contrast-dark mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-contrast-dark mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-contrast-dark mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-contrast-dark mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+265 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-contrast-dark mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a service</option>
                    <option value="quantity-surveying">Quantity Surveying Consultancy</option>
                    <option value="real-estate-development">Real Estate Development</option>
                    <option value="property-transactions">Real Estate Transactions</option>
                    <option value="market-research">Research & Market Commentary</option>
                    <option value="building-surveying">Building Surveying</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-contrast-dark mb-2">Project Budget Range</label>
                  <select className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select budget range</option>
                    <option value="under-100k">Under $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="1m-5m">$1,000,000 - $5,000,000</option>
                    <option value="over-5m">Over $5,000,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-contrast-dark mb-2">Message *</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                  ></textarea>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-contrast-dark mb-8">Contact Information</h2>

              <div className="space-y-8">
                <Card className="border-neutral/30">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-contrast-dark mb-2">Head Office</h3>
                        <p className="text-secondary">
                          Blantyre, Malawi
                          <br />
                          Southern Region
                          <br />
                          Malawi
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-neutral/30">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-contrast-dark mb-2">Phone Numbers</h3>
                        <p className="text-secondary">
                          Main Office: +265 XXX XXX XXX
                          <br />
                          Emergency: +265 XXX XXX XXX
                          <br />
                          WhatsApp: +265 XXX XXX XXX
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-neutral/30">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-contrast-dark mb-2">Email Addresses</h3>
                        <p className="text-secondary">
                          General Inquiries: info@realconassociates.com
                          <br />
                          Projects: projects@realconassociates.com
                          <br />
                          Research: research@realconassociates.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-neutral/30">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-contrast-dark mb-2">Business Hours</h3>
                        <p className="text-secondary">
                          Monday - Friday: 8:00 AM - 5:00 PM
                          <br />
                          Saturday: 8:00 AM - 12:00 PM
                          <br />
                          Sunday: Closed
                          <br />
                          <span className="text-primary font-medium">Emergency consultations available 24/7</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-contrast-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-neutral/30">
              <CardHeader>
                <CardTitle className="text-contrast-dark">What services do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  We offer comprehensive real estate development and construction services including Quantity Surveying,
                  Real Estate Development, Property Transactions, Market Research, Building Surveying, and Development
                  Proposals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral/30">
              <CardHeader>
                <CardTitle className="text-contrast-dark">How long does a typical project take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Project timelines vary depending on scope and complexity. Quantity surveying projects typically take
                  2-4 weeks, while full development projects can range from 6 months to 2+ years. We provide detailed
                  timelines during consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral/30">
              <CardHeader>
                <CardTitle className="text-contrast-dark">Are you licensed and registered?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Yes, we are registered with the National Construction Industry Council of Malawi and the Registrar of
                  Companies. Our team holds professional certifications and maintains all required licenses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral/30">
              <CardHeader>
                <CardTitle className="text-contrast-dark">Do you work outside of Blantyre?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Yes, while our head office is in Blantyre, we provide services throughout Malawi including Lilongwe,
                  Mzuzu, and other regions. Travel costs may apply for projects outside the Blantyre area.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral/30">
              <CardHeader>
                <CardTitle className="text-contrast-dark">How do you charge for your services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Our pricing structure varies by service type. We offer fixed fees for standard services like quantity
                  surveying, and project-based pricing for development work. Contact us for a detailed quote based on
                  your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral/30">
              <CardHeader>
                <CardTitle className="text-contrast-dark">Can I get a free consultation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Yes, we offer free initial consultations to discuss your project requirements and how we can help.
                  This allows us to understand your needs and provide you with accurate project estimates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait - contact us today for your free consultation and let's discuss how we can help bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              CALL NOW: +265 XXX XXX XXX
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              SCHEDULE MEETING
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
