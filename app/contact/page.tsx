import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {Mail, Phone, Calendar} from "lucide-react";
import {CtaFarewell} from "@/components/CtaFarewell";
import Image from "next/image"

export default function ContactPage() {
  return (
      <div className="bg-gray-100">
        <div className={"bg-brand-secondary py-32"}>
          <div className="text-center flex flex-col mb-12">
            <div className="flex flex-row mx-auto gap-2 mb-3">
              <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
              <p className="text-xs my-auto uppercase font-semibold text-brand-primary-light tracking-widest">contact page</p>
            </div>
            <h2 className="text-5xl text-white font-bold mb-4">Get Started with Us</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Over the years, Realcon Associates has achieved key milestones and delivered impactful results in Malawi’s real estate and construction industry.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-1 gap-10 mb-20">
            {/* Contact Options */}
            <div className="grid grid-cols-3 gap-10 mt-[-7em]">
              <Card className="p-6 bg-brand-primary transition-all">
                <CardContent className="flex flex-col gap-4 p-6">
                  <Mail className="text-white stroke-[1px] w-16 h-16 mt-1" />
                  <div>
                    <h3 className="text-xl text-brand-complimentary">Send us an Email</h3>
                    <p className="text-sm text-brand-secondary/80">
                      Send an email — we’ll respond promptly.
                    </p>
                    <p className="mt-2 text-brand-secondary font-bold">info@realconassociates.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-brand-primary transition-all">
                <CardContent className="flex flex-col gap-4 p-6">
                  <Phone className="text-white stroke-[1px] w-16 h-16 mt-1" />
                  <div>
                    <h3 className="text-xl text-brand-complimentary">Call us now</h3>
                    <p className="text-sm text-brand-secondary/80">
                      Make a call directly — we’ll pick up.
                    </p>
                    <p className="mt-2 text-brand-secondary font-bold">(+265) 995 477 957</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-brand-primary transition-all">
                <CardContent className="flex flex-col gap-4 p-6">
                  <Calendar className="text-white stroke-[1px] w-16 h-16 mt-1" />
                  <div>
                    <h3 className="text-lg text-brand-complimentary">Schedule a Meeting</h3>
                    <p className="text-sm text-brand-secondary/80">
                     We can also talk to you later.
                    </p>
                    <p className="mt-2 text-brand-secondary font-bold">Google Link</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className={"grid grid-cols-2 gap-10"}>
            <div className={"relative overflow-hidden"}>
              <Image src={"/images/slide-1.webp"} alt={"address-image"} width={"500"} height={"500"} className={"object-cover w-full h-full inset-0 absolute"} />
            </div>
            {/* Contact Form */}
            <div className="space-y-4 p-10 bg-white">
              <h3 className="text-3xl text-brand-complimentary font-semibold">Prefer sending a message?</h3>
              <form method="POST" action="#" className="space-y-4">
                <Input name="fullname" placeholder="Full Name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <textarea
                    rows={6}
                    required
                    className="w-full px-6 py-3 rounded-sm border text-sm focus-visible:border-ring focus:border-none focus-visible:ring-brand-primary/50 focus-visible:ring-[2px]"
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                ></textarea>
                <Button type="submit" className="w-full bg-brand-primary text-white hover:bg-brand-secondary">
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Farewell Section */}
          <CtaFarewell />
        </div>
      </div>
  );
}


