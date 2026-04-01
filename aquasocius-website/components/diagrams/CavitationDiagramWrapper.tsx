"use client";

import dynamic from "next/dynamic";

const CavitationDiagram = dynamic(
  () => import("@/components/diagrams/CavitationDiagram"),
  { ssr: false }
);

export default function CavitationDiagramWrapper() {
  return <CavitationDiagram />;
}
