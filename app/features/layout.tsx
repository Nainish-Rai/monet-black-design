import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};

export default function FeaturesLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </main>
  );
}
