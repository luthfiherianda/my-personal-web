import { useState } from "react";
import { ChevronDown, Code2 } from "lucide-react";
import { hardSkillCategories, softSkills } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";

function splitIntoIndependentColumns(items) {
  const columns = [[], []];
  items.forEach((item, index) => {
    columns[index % 2].push({ item, index });
  });
  return columns;
}

function IndependentColumnGrid({
  items,
  renderItem,
  collapseAt,
  className = "",
}) {
  const [leftColumn, rightColumn] = splitIntoIndependentColumns(items);
  const singleColumnClass =
    collapseAt === "lg" ? "sm:hidden lg:flex" : "sm:hidden";
  const twoColumnClass =
    collapseAt === "lg"
      ? "hidden sm:grid sm:grid-cols-2 lg:hidden"
      : "hidden sm:grid sm:grid-cols-2";

  return (
    <>
      <div className={`mt-4 flex flex-col gap-3 ${singleColumnClass} ${className}`}>
        {items.map((item, index) => renderItem(item, index))}
      </div>

      <div
        className={`mt-4 items-start gap-3 ${twoColumnClass} ${className}`}
      >
        <div className="flex flex-col gap-3">
          {leftColumn.map(({ item, index }) => renderItem(item, index))}
        </div>
        <div className="flex flex-col gap-3">
          {rightColumn.map(({ item, index }) => renderItem(item, index))}
        </div>
      </div>
    </>
  );
}

function ExpandableSkillCard({ title, subtitle, description, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-3 text-left"
      >
        <div className="min-w-0 flex-1">
          <p className="font-display text-xs font-semibold leading-relaxed tracking-tight min-[400px]:text-sm sm:text-base">
            {title}
          </p>
          {subtitle ? (
            <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mt-3 border-t border-border pt-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <>
      <section
        id="skills"
        className="bento-card bento-card-hover md:col-span-6 lg:col-span-4"
      >
        <SectionHeader label="Hard Skills" icon={Code2} />
        <IndependentColumnGrid
          items={hardSkillCategories}
          renderItem={(group, index) => {
            const cardId = `hard-${index}`;
            return (
              <ExpandableSkillCard
                key={group.category}
                title={group.skills.join(" · ")}
                subtitle={group.category}
                description={group.description}
                isOpen={openId === cardId}
                onToggle={() => toggle(cardId)}
              />
            );
          }}
        />
      </section>

      <section className="bento-card bento-card-hover md:col-span-6 lg:col-span-2">
        <SectionHeader label="Soft Skills" />
        <IndependentColumnGrid
          collapseAt="lg"
          items={softSkills}
          renderItem={(skill, index) => {
            const cardId = `soft-${index}`;
            return (
              <ExpandableSkillCard
                key={skill.name}
                title={skill.name}
                description={skill.description}
                isOpen={openId === cardId}
                onToggle={() => toggle(cardId)}
              />
            );
          }}
        />
      </section>
    </>
  );
}
