import type { Metadata } from "next";
import GalleryView from "./gallery-view";

export const metadata: Metadata = {
  title: "Phòng Trưng Bày - Điều Em Muốn",
  description: "Nơi những ước mơ nhỏ bé được vẽ lên bằng màu sắc của hy vọng và tình thương.",
};

export default function GalleryPage() {
  return <GalleryView />;
}
