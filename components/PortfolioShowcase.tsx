import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Project = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    alt: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Commercial Complex",
        subtitle: "Blantyre CBD Development",
        image: "/images/project-1.jpg",
        alt: "Commercial Development Project",
    },
    {
        id: 2,
        title: "Residential Estate",
        subtitle: "Limbe Housing Project",
        image: "/images/project-2.jpg",
        alt: "Residential Development Project",
    },
    {
        id: 3,
        title: "Industrial Facility",
        subtitle: "Manufacturing Complex",
        image: "/images/project-3.jpg",
        alt: "Industrial Development Project",
    },
];

const PortfolioShowcase: React.FC = () => {
    return (
        <section className="py-26 bg-brand-complimentary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-left mb-10">
                    <div className="flex flex-row gap-2 mb-3">
                        <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
                        <p className="text-xs my-auto font-semibold tracking-wide text-white/70">REALCON PORTFOLIO</p>
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-4">Our Past Projects & Experiences</h2>
                    <p className="text-white/80 text-lg max-w-2xl mr-auto">
                        Explore some of our recent successful projects across Malawi.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-sm">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    width={400}
                                    height={300}
                                    className="w-full h-[20em] object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                                <div className="absolute right-8 left-8 py-4 px-6 rounded-sm bottom-8 text-white bg-brand-primary/60 backdrop-blur-xs">
                                    <h3 className="text-xl font-regular mb-2">{project.title}</h3>
                                    <p className="text-sm">{project.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Link href="/portfolio">
                        <Button variant={"outline"}>
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
