import { ServiceCard } from "@/components/ServiceCard";

const services = [
    {
        title: "Quantity Surveying Consultancy",
        description:
            "Professional cost management and quantity surveying services for construction projects of all scales. Our certified quantity surveyors ensure accurate cost estimation and effective project financial management.",
        features: [
            "Cost Planning and Estimation",
            "Bill of Quantities Preparation",
            "Contract Administration",
            "Value Engineering",
            "Final Account Settlement",
        ],
        buttonText: "Get Quote",
        buttonLink: "#",
        image: "/images/services/consultancy.jpg",
        imageAlt: "Quantity surveying services",
        imageLeft: false,
    },
    {
        title: "Real Estate Development",
        description:
            "End-to-end real estate development services from concept to completion. We manage every aspect of your development project to ensure successful delivery within budget and timeline.",
        features: [
            "Site Analysis and Feasibility Studies",
            "Project Planning and Design Coordination",
            "Construction Management",
            "Quality Control and Assurance",
            "Project Handover and Support",
        ],
        buttonText: "Start Project",
        buttonLink: "#",
        image: "/images/services/development.jpg",
        imageAlt: "Real estate development",
        imageLeft: true,
    },
    {
        title: "Real Estate Transactions",
        description:
            "Expert guidance on property transactions, valuations, and investment opportunities. Our team ensures smooth and transparent property deals with complete legal compliance.",
        features: [
            "Property Valuations",
            "Due Diligence Services",
            "Transaction Management",
            "Investment Advisory",
            "Legal Documentation Support",
        ],
        buttonText: "Consult Now",
        buttonLink: "#",
        image: "/images/services/transaction.jpg",
        imageAlt: "Real estate transactions",
        imageLeft: false,
    },
    {
        title: "Research & Market Commentary",
        description:
            "In-depth market analysis and research to inform your real estate investment decisions. Our comprehensive reports provide valuable insights into Malawi's property market trends.",
        features: [
            "Market Trend Analysis",
            "Investment Opportunity Reports",
            "Property Price Forecasting",
            "Sector-Specific Studies",
            "Custom Research Services",
        ],
        buttonText: "Request Research",
        buttonLink: "#",
        secondaryButtonText: "Browse Reports",
        secondaryButtonLink: "/store",
        image: "/images/services/analyzing.jpg",
        imageAlt: "Market research and analysis",
        imageLeft: true,
    },
];

export default function ServiceSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
}
