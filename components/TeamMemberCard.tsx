// components/TeamMemberCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface TeamMemberCardProps {
    name: string;
    role: string;
    qualification: string;
    image: string;
    description: string;
    email?: string;
    linkedin?: string;
}

export function TeamMemberCard({
                                   name,
                                   role,
                                   image,
                                   description,
                                   email,
                                   linkedin,
                               }: TeamMemberCardProps) {
    const [open, setOpen] = useState(false);

    const fallbackImage = "/images/placeholder-profile.png";

    return (
        <>
            <div className="relative rounded-sm overflow-hidden group">
                {/* Profile Image */}
                <Image
                    src={image || fallbackImage}
                    alt={name}
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover"
                />

                {/* Floating Footer */}
                <div className="absolute right-8 left-8 py-4 px-6 rounded-sm bottom-8 text-white bg-brand-secondary/60 backdrop-blur-xs">
                    <h3 className="text-lg font-medium capitalize">{name}</h3>
                    <p className="text-sm opacity-90 mb-2">{role}</p>

                    {/* Socials & Button */}
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                            {email && (
                                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                                    <Mail className="h-5 w-5 text-white hover:text-white/80" />
                                </a>
                            )}
                            {linkedin && (
                                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5 text-white hover:text-white/80" />
                                </a>
                            )}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setOpen(true)}
                            className="text-white border-white hover:bg-white/80"
                        >
                            View Resume
                        </Button>
                    </div>
                </div>
            </div>

            {/* Resume Modal */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="p-8 overflow-hidden bg-white rounded-2xl border-none ">
                    <div className="flex flex-col md:flex-row gap-6 h-full ">
                        {/* Left: Image */}
                        <div className="md:w-1/2 min-h-[400px] flex items-center justify-center">
                            <Image
                                src={image || fallbackImage}
                                alt={name}
                                width={300}
                                height={400}
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>

                        {/* Right: Resume Content */}
                        <div className="bg-brand-primary/10 p-12 text-brand-secondary rounded-lg w-[30em]">
                            <div className="flex items-center space-x-2 mb-1">
                                <div className="w-2 h-6 bg-brand-primary" />
                                <h2 className="text-3xl capitalize font-bold">{name}</h2>
                            </div>

                            <h3 className="text-brand-primary-dark text-md font-semibold mb-4">Resume Overview</h3>
                            <p className="text-sm text-[#012b28] mb-6 leading-relaxed">{description}</p>

                            <h4 className="text-lg font-semibold mb-3 text-[#014341]">Past Experience & Employment</h4>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Managing Director @ Realcon Associates",
                                    "Lecturer @ Malawi University of Business and Applied Sciences",
                                    "Lecturer @ University of German"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="w-2 h-2 mt-1.5 mr-2 bg-brand-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    );
}
