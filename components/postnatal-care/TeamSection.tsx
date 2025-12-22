"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  qualifications?: string;
  regNo?: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Shoukath Ali (HC)",
    role: "Chief Physician",
    specialty: "Kalarimarma & Back Pain Specialist",
    qualifications: "DAPT, BAT, DTB, DIP, DCB (USA)",
    image: "/founder.webp",
    bio: "Leading expert in Kalarimarma therapy and back pain management, bringing extensive knowledge and experience to postnatal care programs.",
  },
  {
    name: "Dr. Manjusha P.",
    role: "Consultant Physician",
    specialty: "Ayurvedic Postnatal Care",
    qualifications: "BAMS, YIC",
    regNo: "21609",
    image: "/doctor1.jpeg",
    bio: "Specialized consultant physician at MM Gurukkals, providing expert guidance and care for postnatal recovery through traditional Ayurvedic methods.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Our Care <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced practitioners dedicated to supporting your postnatal recovery journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="relative w-full h-64 bg-muted overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-foreground/70 text-sm mb-2">{member.specialty}</p>
                {member.qualifications && (
                  <p className="text-foreground/80 text-xs mb-2 font-medium">
                    {member.qualifications}
                  </p>
                )}
                {member.regNo && (
                  <p className="text-foreground/60 text-xs mb-3">
                    Reg. No: {member.regNo}
                  </p>
                )}
                <p className="text-foreground/70 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

