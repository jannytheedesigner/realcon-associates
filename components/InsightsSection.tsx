// components/InsightsSection.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"; // adjust if needed
import { Badge } from "@/components/ui/badge"; // adjust if needed
import { Button } from "@/components/ui/button"; // adjust if needed

const blogPosts = [
    {
        id: 1,
        title: "Malawi Real Estate Market Outlook 2024",
        excerpt:
            "Comprehensive analysis of current market trends, investment opportunities, and future projections for Malawi's real estate sector.",
        category: "Market Analysis",
        author: "G Mwale",
        date: "December 15, 2024",
        readTime: "8 min read",
        image: "/images/Blantyre_City.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "Understanding Quantity Surveying in Modern Construction",
        excerpt:
            "A detailed guide to quantity surveying practices, cost management strategies, and their importance in construction projects.",
        category: "Construction",
        author: "S Banda",
        date: "December 10, 2024",
        readTime: "6 min read",
        image: "/images/quantity-surveying.jpg",
        featured: false,
    },
    {
        id: 3,
        title: "Investment Opportunities in Blantyre's Commercial Sector",
        excerpt:
            "Exploring the growing commercial real estate opportunities in Blantyre and key factors driving market growth.",
        category: "Investment",
        author: "J Mbewe",
        date: "December 5, 2024",
        readTime: "5 min read",
        image: "/images/investment.jpg",
        featured: false,
    },
];

const InsightsSection: React.FC = () => {
    return (
        <section className="py-26 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-left flex lg:flex-row flex-col mb-8">
                    <div>
                        <div className="flex flex-row mr-auto gap-2 mb-3">
                            <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
                            <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">
                                Insights & News
                            </p>
                        </div>
                        <h2 className="text-5xl text-brand-complimentary font-bold mb-4">
                            Latest Industry Insights
                        </h2>
                        <p className="text-slate-600 max-w-2xl mr-auto">
                            Stay updated with the latest trends, advice, and market news in real estate and construction across Malawi and beyond.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center ml-auto my-auto">
                        <Link href="/blog">
                            <Button variant={"default"} className={"font-medium"}>
                                View All Articles
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="bg-gray-50 transition-all hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="relative">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-primary text-white">{post.category}</Badge>
                                </div>
                            </div>
                            <CardContent className="p-8 bg-linear-to-b from-white to-brand-primary/25">
                                <h3 className="text-xl font-bold text-contrast-dark mb-3 leading-[1.2]">{post.title}</h3>
                                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                                <div className="flex items-center text-xs text-gray-800 mb-4">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <span className="mr-3">{post.date}</span>
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>{post.readTime}</span>
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full border-brand-primary text-sm font-semibold text-brand-complimentary hover:bg-brand-primary hover:text-brand-complimentary/90"
                                >
                                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default InsightsSection;
