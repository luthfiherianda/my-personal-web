import MiniStatCard from "./MiniStatCard";

export default function MiniStatGrid({ stats, columns = 2 }) {
  const gridClass =
    columns === 3
      ? "grid grid-cols-3 gap-3"
      : columns === 4
        ? "grid grid-cols-2 gap-3 lg:grid-cols-4"
        : "grid grid-cols-2 gap-2 sm:gap-3";

  return (
    <div className={gridClass}>
      {stats.map(({ value, label }) => (
        <MiniStatCard key={label} value={value} label={label} />
      ))}
    </div>
  );
}
