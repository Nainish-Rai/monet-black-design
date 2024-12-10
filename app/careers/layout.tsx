import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};
export default function CareersLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
