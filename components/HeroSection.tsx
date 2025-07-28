"use client";

import Image from "next/image";
import { cn } from "@/lib/utils"; // utility to merge Tailwind classes (optional)

type HeroSectionProps = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    overlayClassName?: string;
};

export default function HeroSection({
                                        title,
                                        description,
                                        imageSrc,
                                        imageAlt = "Hero Image",
                                        overlayClassName = "bg-black/40",
                                    }: HeroSectionProps) {
    return (
        <section className="py-20 bg-brand-complimentary relative overflow-hidden">
            <Image
                alt={imageAlt}
                src={imageSrc}
                width={700}
                height={500}
                className="object-cover inset-0 absolute w-full h-full"
            />
            <div className={cn("absolute inset-0 transition-colors duration-300", overlayClassName)} />
            <div className="absolute inset-0 bg-linear-to-r from-white/0 to-brand-secondary-dark z-20 transition-colors duration-300" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="relative z-30">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
                    <p className="text-base font-medium text-white/60 max-w-lg">{description}</p>
                </div>
            </div>
        </section>
    );
}
