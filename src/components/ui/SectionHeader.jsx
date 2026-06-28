export default function SectionHeader({ label, icon: Icon }) {
  return (
    <div className="flex items-center gap-2">
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
