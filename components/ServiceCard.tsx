// components/ServiceCard.tsx

import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

type ServiceCardProps = {
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
    image: string;
    imageAlt: string;
    imageLeft?: boolean;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
};

export function ServiceCard({
                                title,
                                description,
                                features,
                                buttonText,
                                buttonLink = "#",
                                image,
                                imageAlt,
                                imageLeft = false,
                                secondaryButtonText,
                                secondaryButtonLink,
                            }: ServiceCardProps) {
    const Content = () => (
        <div className={""}>
            <div className="flex items-center mb-2">
                <p className="text-3xl font-bold text-brand-secondary tracking-tight">{title}</p>
            </div>
            <p className="text-base text-gray-800 mb-6">{description}</p>
            <div className="space-y-2 mb-8 text-sm">
                {features.map((feature, i) => (
                    <div className="flex items-center" key={i}>
                        <CheckCircle className="h-4 w-4 text-brand-primary mr-3" />
                        <span className="text-gray-600">{feature}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <a href={buttonLink}>
                    <Button variant="outline" className="border-brand-primary text-gray-800 font-semibold">
                        {buttonText} <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </a>
                {secondaryButtonText && secondaryButtonLink && (
                    <a href={secondaryButtonLink}>
                        <Button
                            variant="secondary"
                            className=""
                        >
                            {secondaryButtonText}
                        </Button>
                    </a>
                )}
            </div>
        </div>
    );

    const ImageBlock = () => (
        <div className="relative h-[30em] bg-brand-primary">
            <Image
                src={image}
                alt={imageAlt}
                width={500}
                height={400}
                className="absolute object-cover inset-0 w-full h-full"
            />
        </div>
    );

    return (
        <div className="mb-20 max-w-5xl mx-auto">
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    imageLeft ? "lg:flex-row-reverse" : ""
                }`}
            >
                {imageLeft ? (
                    <>
                        <div className="order-2 lg:order-1">{ImageBlock()}</div>
                        <div className="order-1 lg:order-2">{Content()}</div>
                    </>
                ) : (
                    <>
                        <div>{Content()}</div>
                        <div>{ImageBlock()}</div>
                    </>
                )}
            </div>
        </div>
    );
}
