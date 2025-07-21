import React from 'react';
import { BedDouble, Bath, Car, Building2, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FeaturedProperties: React.FC = () => {
    return (
        <section className="py-26 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center flex flex-col mb-12">
                    <div className="flex flex-row mx-auto gap-2 mb-3">
                        <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
                        <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">Available Listings</p>
                    </div>
                    <h2 className="text-5xl text-brand-complimentary font-bold mb-4">Featured Real Estate Properties</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explore our curated selection of properties available for lease or purchase — from family homes to executive offices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Property Card */}
                    <div className="rounded-md border border-neutral/20 overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="relative w-full h-60">
                            <Image
                                src="/images/property-office.jpg"
                                alt="Modern Office Space"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-md"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-2 text-sm text-brand-primary font-medium">
                                <Building2 className="h-4 w-4" />
                                <span>Office Space</span>
                            </div>
                            <h3 className="text-xl font-semibold text-contrast-dark mb-2">Modern Office in City Centre</h3>
                            <p className="text-sm text-slate-600 mb-4">Located in Blantyre CBD with high-speed internet and secure parking.</p>
                            <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-4">
                                <div className="flex items-center gap-1"><Car className="w-4 h-4" /> 10 Parking Bays</div>
                                <div className="flex items-center gap-1"><Bath className="w-4 h-4" /> 2 Bathrooms</div>
                            </div>
                            <Link href="/properties" className="text-sm text-brand-complimentary font-medium hover:text-brand-primary">
                                View Details →
                            </Link>
                        </div>
                    </div>

                    {/* Property Card */}
                    <div className="rounded-md border border-neutral/20 overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="relative w-full h-60">
                            <Image
                                src="/images/property-house.jpg"
                                alt="Luxury Family House"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-md"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-2 text-sm text-brand-primary font-medium">
                                <Home className="h-4 w-4" />
                                <span>Family House</span>
                            </div>
                            <h3 className="text-xl font-semibold text-contrast-dark mb-2">4-Bedroom Luxury Home</h3>
                            <p className="text-sm text-slate-600 mb-4">Spacious and modern design in a gated community in Area 43, Lilongwe.</p>
                            <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-4">
                                <div className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 4 Beds</div>
                                <div className="flex items-center gap-1"><Bath className="w-4 h-4" /> 3 Baths</div>
                                <div className="flex items-center gap-1"><Car className="w-4 h-4" /> 2 Car Garage</div>
                            </div>
                            <Link href="/properties" className="text-sm text-brand-complimentary font-medium hover:text-brand-primary">
                                View Details →
                            </Link>
                        </div>
                    </div>

                    {/* Property Card */}
                    <div className="rounded-md border border-neutral/20 overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="relative w-full h-60">
                            <Image
                                src="/images/property-home.jpg"
                                alt="Cozy Suburban Home"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-md"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-2 text-sm text-brand-primary font-medium">
                                <Home className="h-4 w-4" />
                                <span>Suburban Home</span>
                            </div>
                            <h3 className="text-xl font-semibold text-contrast-dark mb-2">3-Bedroom Family Home</h3>
                            <p className="text-sm text-slate-600 mb-4">A peaceful retreat in Chileka with a garden and borehole water system.</p>
                            <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-4">
                                <div className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 3 Beds</div>
                                <div className="flex items-center gap-1"><Bath className="w-4 h-4" /> 2 Baths</div>
                                <div className="flex items-center gap-1"><Car className="w-4 h-4" /> 1 Garage</div>
                            </div>
                            <Link href="/properties" className="text-sm text-brand-complimentary font-medium hover:text-brand-primary">
                                View Details →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/properties">
                        <button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium px-6 py-3 rounded-md">
                            Browse All Properties
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;