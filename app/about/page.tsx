import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, CheckCircle, Mail, Linkedin, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-brand-complimentary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-brand-primary mb-2">About Us</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Leading the way in professional real estate development and construction services across Malawi
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-26 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-row mx-auto gap-2 mb-3">
              <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
              <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">REALCON STORY</p>
            </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-complimentary mb-6">The History Behind Realcon Associates</h2>
              <p className="text-lg text-slate-700 mb-6">
                Realcon Associates was founded with a vision to transform Malawi's real estate and construction
                landscape. Based in Blantyre, we have established ourselves as a trusted partner for clients seeking
                professional, reliable, and innovative solutions.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Our practice is registered with the National Construction Industry Council of Malawi and the Registrar
                of Companies, ensuring the highest standards of professionalism and regulatory compliance in all our
                operations.
              </p>
            </div>
            <div className="relative flex w-full">
              <Image
                src="/images/floating-house-2.png"
                alt="Realcon Associates office building"
                width={400}
                height={300}
                className="ml-auto flex"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-26 bg-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-brand-primary text-white border-none">
              <CardHeader className="text-center">
                <Target className="h-16 w-16 text-brand-complimentary stroke-[1.25px] mx-auto mb-4" />
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white">
                  To provide exceptional real estate development and construction services that exceed client
                  expectations while contributing to Malawi's economic growth and infrastructure development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-brand-primary stroke-[1.25px] mx-auto mb-4" />
                <CardTitle className="text-contrast-dark text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 ">
                  To be the leading real estate development and construction practice in Malawi, recognized for
                  innovation, quality, and sustainable development solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none">
              <CardHeader className="text-center">
                <Award className="h-16 w-16 text-brand-primary stroke-[1.25px] mx-auto mb-4" />
                <CardTitle className="text-contrast-dark text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Integrity, professionalism, innovation, and commitment to excellence guide everything we do, ensuring
                  sustainable and ethical business practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-26 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col mx-auto">
            <div className="flex flex-row mx-auto gap-2 mb-3">
              <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
              <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">OUR EXPERTS</p>
            </div>
            <h2 className="text-5xl font-bold text-contrast-dark mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our experienced professionals bring decades of combined expertise in real estate development and
              construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="border-gray-50/60 border">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-contrast-dark mb-2">James Mbewe</h3>
                <p className="text-brand-primary font-medium mb-3">Managing Director</p>
                <p className="text-brand-secondary text-sm mb-4">
                  Over 15 years of experience in real estate development and quantity surveying. Holds professional
                  certifications from RICS and local construction councils.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-brand-secondary mb-4">
                  <GraduationCap className="h-4 w-4" />
                  <span>MSc Construction Management</span>
                </div>
                <div className="flex justify-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                  <Linkedin className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="border-neutral/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Sarah Banda</h3>
                <p className="text-brand-primary font-medium mb-3">Senior Quantity Surveyor</p>
                <p className="text-brand-secondary text-sm mb-4">
                  Specialist in cost management and project estimation with 12 years of experience in commercial and
                  residential developments across Malawi.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-brand-secondary mb-4">
                  <GraduationCap className="h-4 w-4" />
                  <span>BSc Quantity Surveying</span>
                </div>
                <div className="flex justify-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                  <Linkedin className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="border-neutral/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Michael Phiri</h3>
                <p className="text-brand-primary font-medium mb-3">Development Manager</p>
                <p className="text-brand-secondary text-sm mb-4">
                  Expert in project management and development coordination with extensive experience in both public and
                  private sector projects.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-brand-secondary mb-4">
                  <GraduationCap className="h-4 w-4" />
                  <span>BSc Civil Engineering</span>
                </div>
                <div className="flex justify-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                  <Linkedin className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                </div>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="border-neutral/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Grace Mwale</h3>
                <p className="text-brand-primary font-medium mb-3">Market Research Analyst</p>
                <p className="text-brand-secondary text-sm mb-4">
                  Specializes in real estate market analysis and investment research, providing data-driven insights for
                  strategic decision making.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-brand-secondary mb-4">
                  <GraduationCap className="h-4 w-4" />
                  <span>MSc Economics</span>
                </div>
                <div className="flex justify-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                  <Linkedin className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                </div>
              </CardContent>
            </Card>

            {/* Team Member 5 */}
            <Card className="border-neutral/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-contrast-dark mb-2">David Chirwa</h3>
                <p className="text-brand-primary font-medium mb-3">Building Surveyor</p>
                <p className="text-brand-secondary text-sm mb-4">
                  Professional building surveyor with expertise in structural assessments, building inspections, and
                  compliance with local building regulations.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-brand-secondary mb-4">
                  <GraduationCap className="h-4 w-4" />
                  <span>BSc Building Surveying</span>
                </div>
                <div className="flex justify-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                  <Linkedin className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                </div>
              </CardContent>
            </Card>

            {/* Team Member 6 */}
            <Card className="border-neutral/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-contrast-dark mb-2">Patricia Kamoto</h3>
                <p className="text-brand-primary font-medium mb-3">Transaction Specialist</p>
                <p className="text-brand-secondary text-sm mb-4">
                  Expert in property transactions, legal compliance, and client relations with a focus on residential
                  and commercial property deals.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-brand-secondary mb-4">
                  <GraduationCap className="h-4 w-4" />
                  <span>LLB Property Law</span>
                </div>
                <div className="flex justify-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                  <Linkedin className="h-5 w-5 text-brand-primary cursor-pointer hover:text-brand-primary/80" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/90">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-white/90">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-white/90">Research Publications</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
