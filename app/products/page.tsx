import ProductsSection from "@/components/products/ProductsSection";
import React from "react";

// type Props = {}; // No longer needed if not used

function ProductsPage(/*{}: Props*/) {
  return (
    <main className="min-h-screen pt-28 bg-black text-foreground">
      <ProductsSection />
    </main>
  );
}

export default ProductsPage;
