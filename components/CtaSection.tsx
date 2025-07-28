'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import React from "react";

export function CtaSection() {
    return (
        <section className="py-24 bg-gray-50 text-white">
            <div className={"px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"} >
                <div className="mx-auto bg-brand-primary p-20 text-center rounded-sm relative overflow-hidden">
                    <Image alt={"cta-image"} src="/images/cta-image-2.png" width={"700"} height={"500"} className={"object-cover inset-0 absolute w-full my-auto"}/>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-linear-to-b from-white/0 to-brand-primary group-hover:bg-black/60 transition-colors duration-300"></div>
                    <div className={"relative z-30"}>
                        <h2 className="text-5xl font-medium max-w-2xl mx-auto mb-4">
                            Schedule a Meeting
                        </h2>
                        <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
                            Whether you&#39;re looking to develop, invest, or sell — our team is ready to guide you every step of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button
                                    variant="secondary"
                                    className="bg-white text-brand-complimentary hover:bg-white/90 px-8 py-3 font-semibold"
                                >
                                    Get In Touch
                                </Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-brand-secondary hover:border-brand-secondary-dark hover:text-white"
                                >
                                    View Our Work
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
