export default function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-xl border border-ink/10 bg-white px-4 text-center text-xs font-semibold text-muted">
      {name}
    </div>
  );
}
