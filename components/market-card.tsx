interface MarketCardProps {
  title: string;
  description: string;
}

export function MarketCard({ title, description }: MarketCardProps) {
  return (
    <div className="rounded-lg bg-neutral-950/50 p-6 backdrop-blur-sm">
      <h3 className="mb-2 font-semibold text-white">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  );
}
