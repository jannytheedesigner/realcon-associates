// app/team/page.tsx or your section component
import { TeamMemberCard } from "@/components/TeamMemberCard";
import React from "react";

const teamMembers = [
    {
        name: "Martin Chimangeni",
        role: "Managing Director",
        qualification: "MSc Construction Management",
        image: "/images/martin-chimangeni.jpg",
        description: "Over 15 years of experience in real estate development and quantity surveying. Holds certifications from RICS and local councils.",
        email: "martin@realconassociates.com",
        linkedin: "https://www.linkedin.com/in/martin-chimangeni-a4019316/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BvqXHafwPTSGojIucpvhJvQ%3D%3D"
    },
    {
        name: "Mr. Harris Chimangeni",
        role: "Senior Quantity Surveyor",
        qualification: "BSc Quantity Surveying",
        image: "",
        description: "Specialist in cost management and project estimation with over a decade of experience in commercial/residential development.",
        email: "harris@realconassociates.com",
        linkedin: "https://linkedin.com/in/sarahbanda"
    },
    {
        name: "Mr. Jephthah Malema",
        role: "Graduate Quantity Surveyor",
        qualification: "BSc Quantity Surveying",
        image: "",
        description: "Specialist in cost management and project estimation with over a decade of experience in commercial/residential development.",
        email: "jephthah@realconassociates.com",
        linkedin: "https://linkedin.com/in/sarahbanda"
    },
    {
        name: "Mr. Godfrey Kadzuwa",
        role: "Valuation Surveyor",
        qualification: "BSc Quantity Surveying",
        image: "",
        description: "Specialist in cost management and project estimation with over a decade of experience in commercial/residential development.",
        email: "godfrey@realconassociates.com",
        linkedin: "https://linkedin.com/in/sarahbanda"
    }
];

export default function TeamSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center flex flex-col mb-10">
                    <div className="flex flex-row mx-auto gap-2 mb-3">
                        <span className="w-1 h-1 bg-brand-primary flex my-auto"></span>
                        <p className="text-xs my-auto uppercase font-semibold text-slate-900 tracking-widest">
                            Meet Our Team
                        </p>
                    </div>
                    <h2 className="text-5xl text-brand-complimentary max-w-2xl mx-auto font-bold mb-4">
                        Decades of Expertise in Real Estate & Construction
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            qualification={member.qualification}
                            image={member.image}
                            description={member.description}
                            email={member.email}
                            linkedin={member.linkedin}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
