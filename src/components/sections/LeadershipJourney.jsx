import { Users } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function LeadershipJourney() {
  return (
    <section
      className="bento-card bento-card-hover md:col-span-3 lg:col-span-3"
    >
      <SectionHeader label="Leadership Journey" icon={Users} />
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        My foundation in leadership was built early — coordinating hundreds of
        students across <span className="text-foreground">OSIS</span> and{" "}
        <span className="text-foreground">Pramuka</span> at{" "}
        <span className="text-foreground">Al-Hasra Senior High School</span>.
        Those years taught me that good coordination is half logistics, half
        trust. That thread carries through to today, where as{" "}
        <span className="text-foreground">
          Head of Event at GDGoC UIN Jakarta
        </span>{" "}
        I run programs connecting students with real tools and opportunities,
        while also contributing as a{" "}
        <span className="text-foreground">
          Data Specialist Intern at Pusat Karier UIN Jakarta
        </span>
        .
      </p>
    </section>
  );
}
