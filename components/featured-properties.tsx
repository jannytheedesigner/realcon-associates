import React, {JSX} from "react";
import { BedDouble, Bath, Car, Building2, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define a type for the property
type Property = {
    id: number;
    image: string;
    type: string;
    icon: JSX.Element;
    title: string;
    description: string;
    features: string[];
};

const properties: Property[] = [
    {
        id: 1,
        image: "/images/property-office.jpg",
        type: "Office Space",
        icon: <Building2 className="h-4 w-4" />,
        title: "Modern Office in City Centre",
        description: "Located in Blantyre CBD with high-speed internet and secure parking.",
        features: ["10 Parking Bays", "2 Bathrooms"],
    },
    {
        id: 2,
        image: "/images/property-house.jpg",
        type: "Family House",
        icon: <Home className="h-4 w-4" />,
        title: "4-Bedroom Luxury Home",
        description: "Spacious and modern design in a gated community in Area 43, Lilongwe.",
        features: ["4 Beds", "3 Baths", "2 Car Garage"],
    },
    {
        id: 3,
        image: "/images/property-home.jpg",
        type: "Suburban Home",
        icon: <Home className="h-4 w-4" />,
        title: "3-Bedroom Family Home",
        description: "A peaceful retreat in Chileka with a garden and borehole water system.",
        features: ["3 Beds", "2 Baths", "1 Garage"],
    },
];

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
    return (
        <div className="rounded-sm border border-neutral/20 bg-white overflow-hidden transition">
            <div className="relative w-full h-60">
                <Image
                    src={property.image}
                    alt={property.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-md"
                />
            </div>
            <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-sm text-brand-primary font-medium">
                    {property.icon}
                    <span>{property.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-contrast-dark mb-2">{property.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{property.description}</p>
                <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-4">
                    {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-1">
                            {feature.includes("Beds") && <BedDouble className="w-4 h-4" />}
                            {feature.includes("Bath") && <Bath className="w-4 h-4" />}
                            {feature.toLowerCase().includes("garage") || feature.toLowerCase().includes("parking") ? (
                                <Car className="w-4 h-4" />
                            ) : null}
                            {feature}
                        </div>
                    ))}
                </div>
                <Link href="/properties" className="text-sm rounded-xs font-medium text-center w-full py-3 px-6 mx-auto bg-brand-complimentary text-white hover:text-brand-primary">
                    View Details
                </Link>
            </div>
        </div>
    );
};

const FeaturedProperties: React.FC = () => {
    return (
        <section className="py-26 bg-brand-primary/10">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/properties">
                        <Button variant="secondary">
                            Browse All Properties
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
