import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};

export default function RoadmapLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      <div className="pt-0">{children}</div>
    </main>
  );
}
