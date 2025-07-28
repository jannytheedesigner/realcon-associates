// components/ServicesOverview.tsx

import React, {JSX} from "react";
import Link from "next/link";
import {
    Calculator,
    Building2,
    FileText,
    TrendingUp,
    ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // adjust if needed

type Service = {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
    href: string;
};

const services: Service[] = [
    {
        id: 1,
        title: "Quantity Surveying",
        description:
            "Professional cost management and quantity surveying services for construction projects.",
        icon: <Calculator className="h-16 w-16 stroke-[1.25px] text-brand-primary mb-4" />,
        href: "/services",
    },
    {
        id: 2,
        title: "Real Estate Development",
        description: "End-to-end development services from concept to completion.",
        icon: <Building2 className="h-16 w-16 stroke-[1.25px] text-brand-primary mb-4" />,
        href: "/services",
    },
    {
        id: 3,
        title: "Property Transactions",
        description: "Expert guidance on property transactions and valuations.",
        icon: <FileText className="h-16 w-16 stroke-[1.25px] text-brand-primary mb-4" />,
        href: "/services",
    },
    {
        id: 4,
        title: "Market Research",
        description: "In-depth market analysis and research for informed decisions.",
        icon: <TrendingUp className="h-16 w-16 stroke-[1.25px] text-brand-primary mb-4" />,
        href: "/services",
    },
];

const ServicesOverview: React.FC = () => {
    return (
        <section className="py-26 bg-brand-secondary-dark/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center flex flex-col mb-10">
                    <div className="flex flex-row mx-auto gap-2 mb-3">
                        <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
                        <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">
                            Our Expertise
                        </p>
                    </div>
                    <h2 className="text-5xl text-brand-complimentary max-w-2xl mx-auto font-bold mb-4">
                        Comprehensive Real Estate Solutions
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            className="border-neutral/30 group px-4 py-8 bg-white relative overflow-hidden transition-all hover:-translate-y-1"
                        >
                            <CardHeader >
                                {service.icon}
                                <CardTitle className="text-contrast-dark tracking-tight font-semibold group-hover:text-brand-complimentary text-lg leading-[1.2]">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                                <Link
                                    href={service.href}
                                    className="text-brand-complimentary text-xs tracking-wide uppercase w-fit font-semibold hover:text-brand-primary/80 flex items-center"
                                >
                                    Know More <ArrowRight className="h-4 w-4 ml-1" />
                                </Link>
                            </CardContent>
                            <div className="w-[75%] mx-auto absolute h-0 transition-all duration-100 ease-in left-0 right-0 bg-brand-primary bottom-0 group-hover:h-2"></div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
