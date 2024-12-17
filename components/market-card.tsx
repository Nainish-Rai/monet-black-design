interface MarketCardProps {
  title: string;
  description: string;
}

export function MarketCard({ title, description }: MarketCardProps) {
  return (
    <div className="rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/50 duration-300 transition-all cursor-crosshair p-6 backdrop-blur-sm z-0">
      <h3 className="mb-2 text-2xl text-white">{title}</h3>
      <p className="text-sm text-[#B4B4B4]">{description}</p>
    </div>
  );
}
