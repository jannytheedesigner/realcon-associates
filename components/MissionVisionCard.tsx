// components/MissionVisionCard.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MissionVisionCardProps {
    title: string;
    description: string;
    iconPath: string;
}

export function MissionVisionCard({ title, description, iconPath }: MissionVisionCardProps) {
    return (
        <Card className="bg-white/5 text-brand-white border-none py-12 px-6">
            <CardHeader className="text-center">
                <Image
                    alt={`${title} icon`}
                    src={iconPath}
                    width={60}
                    height={60}
                    className="mx-auto w-16 h-16 mb-4"
                />
                <CardTitle className="text-brand-primary text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-white/60">{description}</p>
            </CardContent>
        </Card>
    );
}
