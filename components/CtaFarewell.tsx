'use client'

import Image from "next/image"
import React from "react";

export function CtaFarewell() {
    return (
        <section className="py-16 bg-gray-50 text-white">
            <div className="max-w-7xl mx-auto p-20 px-4 sm:px-6 lg:px-8 text-center rounded-sm relative overflow-hidden">
                <Image alt={"cta-image"} src="/images/cta-image-2.png" width={"700"} height={"500"} className={"object-cover inset-0 absolute w-full my-auto"}/>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-linear-to-b from-white/0 to-brand-primary group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className={"relative z-30"}>
                    <h2 className="text-3xl font-medium max-w-lg mx-auto leading-[1.2]">
                        Thank you for visiting our website, hope we do business with you soon.
                    </h2>
                </div>

            </div>
        </section>
    )
}
