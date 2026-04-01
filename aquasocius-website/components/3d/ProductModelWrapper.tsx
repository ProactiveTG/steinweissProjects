"use client";

import dynamic from "next/dynamic";

const ProductModel = dynamic(
  () => import("@/components/3d/ProductModel"),
  { ssr: false }
);

export default function ProductModelWrapper() {
  return <ProductModel />;
}
