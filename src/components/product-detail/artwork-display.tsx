import { Artwork } from "@/lib/data";
import LazyImage from "@/components/lazy-image";

interface ArtworkDisplayProps {
  art: Artwork;
}

export default function ArtworkDisplay({ art }: ArtworkDisplayProps) {
  return (
    <section className="lg:col-span-7 flex flex-col gap-6">
      {/* Main Artwork Card */}
      <div className="content-card-bg p-4 md:p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] wonky-rotation relative">
        <div className="absolute -top-4 -left-4 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-bold text-sm z-10 -rotate-12">
          Họa sĩ nhí đóng góp
        </div>
        <div className="overflow-hidden rounded-lg flex items-center justify-center">
          <LazyImage
            className="w-full h-auto max-h-[550px] object-contain rounded-lg border-2 border-outline-variant/30 shadow-sm"
            alt={art.title}
            src={art.image}
            wrapperClassName="w-full h-full flex items-center justify-center"
            loading="eager"
          />
        </div>
        <div className="mt-6 text-center">
          <h1 className="font-display text-[42px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-extrabold text-primary mb-2">
            {art.title}
          </h1>
          <p className="text-on-surface-variant font-body italic">
            {art.material}, {art.year}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 md:justify-start justify-center">
        <button className="flex items-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-full font-headline text-[24px] leading-[1.3] font-bold transition-all hover:scale-105 active:scale-95 crayon-button-shadow group">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>
          Quyên góp ngay
        </button>
        <button className="flex items-center gap-2 content-card-bg text-primary border-4 border-dashed border-primary/30 px-8 py-4 rounded-full font-headline text-[24px] leading-[1.3] font-bold transition-all hover:bg-white active:scale-95 group">
          <span className="material-symbols-outlined">share</span>
          Chia sẻ câu chuyện
        </button>
      </div>
    </section>
  );
}
