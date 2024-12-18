import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PositionLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
