import { notFound } from "next/navigation";
import { artworks } from "@/lib/data";
import TopNavBar from "@/components/top-nav-bar";
import ArtworkDisplay from "@/components/product-detail/artwork-display";
import ArtistCard from "@/components/product-detail/artist-card";
import StoryCard from "@/components/product-detail/story-card";
import RelatedWorks from "@/components/product-detail/related-works";
import ProductFooter from "@/components/product-detail/product-footer";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const artworkId = parseInt(id, 10);
  const art = artworks.find((a) => a.id === artworkId);

  if (!art) {
    notFound();
  }

  return (
    <>
      <TopNavBar />

      {/* Paper Texture Overlay */}
      <div className="paper-texture-overlay" />

      <main className="pt-32 pb-[80px] px-4 md:px-6 max-w-[1200px] mx-auto relative z-10">
        {/* Decorative Scribbles */}
        <div className="absolute top-40 -left-10 opacity-40 pointer-events-none hidden lg:block">
          <div className="w-32 h-32 bg-secondary-container hand-drawn-star rotate-12" />
        </div>
        <div className="absolute bottom-20 -right-10 opacity-40 pointer-events-none hidden lg:block">
          <svg
            fill="none"
            height="200"
            viewBox="0 0 200 200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 100C10 44.7715 54.7715 10 110 10C165.228 10 210 54.7715 210 100"
              stroke="#005da7"
              strokeDasharray="10 15"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <ArtworkDisplay art={art} />

          {/* Artist & Story Section */}
          <section className="lg:col-span-5 flex flex-col gap-6">
            <ArtistCard art={art} />
            <StoryCard art={art} />
          </section>
        </div>

        {/* Related Works */}
        <RelatedWorks />
      </main>

      <ProductFooter />
    </>
  );
}
