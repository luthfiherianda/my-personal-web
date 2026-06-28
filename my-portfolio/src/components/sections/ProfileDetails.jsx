import { profileDetails } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function ProfileDetails() {
  return (
    <section className="bento-card bento-card-hover md:col-span-6">
      <SectionHeader label="Profile Details" />
      <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profileDetails.map(({ label, items, Icon }) => (
          <div key={label} className="flex gap-3 pb-4">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed text-foreground marker:text-muted-foreground">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
