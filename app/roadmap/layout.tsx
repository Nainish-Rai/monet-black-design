import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function RoadmapLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
