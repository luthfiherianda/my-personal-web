import { byTheNumbers } from "../../data/leadership";
import MiniStatGrid from "../ui/MiniStatGrid";
import SectionHeader from "../ui/SectionHeader";

export default function ByTheNumbers() {
  return (
    <section className="bento-card bento-card-hover md:col-span-3 lg:col-span-3">
      <SectionHeader label="By the Numbers" />
      <div className="mt-4">
        <MiniStatGrid stats={byTheNumbers} columns={2} />
      </div>
    </section>
  );
}
