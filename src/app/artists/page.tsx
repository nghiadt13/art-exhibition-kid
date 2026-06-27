import type { Metadata } from "next";
import ArtistsView from "./artists-view";

export const metadata: Metadata = {
  title: "Câu Chuyện Các Em - Điều Em Muốn",
  description: "Gặp gỡ những họa sĩ nhí tài năng và lắng nghe những ước mơ nhỏ bé ẩn sau mỗi nét vẽ hồn nhiên.",
};

export default function ArtistsPage() {
  return <ArtistsView />;
}
