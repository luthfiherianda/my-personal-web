export default function MiniStatCard({ value, label }) {
  return (
    <div className="rounded-xl border border-border bg-background p-3 sm:rounded-2xl sm:p-4">
      <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">{value}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
