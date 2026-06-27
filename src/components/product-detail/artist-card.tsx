import Link from "next/link";
import { Artwork } from "@/lib/data";

interface ArtistCardProps {
  art: Artwork;
}

export default function ArtistCard({ art }: ArtistCardProps) {
  return (
    <div className="content-card-bg p-8 rounded-[40px] border-2 border-outline-variant relative wonky-rotation-alt overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/20 rounded-bl-[100%]" />

      {/* Artist Info */}
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-surface-container">
          <img
            className="w-full h-full object-cover"
            alt={art.artistName}
            src={art.artistAvatar}
          />
        </div>
        <div>
          <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-tertiary">
            {art.artistName}
          </h2>
          <p className="text-[18px] leading-[1.6] font-body text-on-surface-variant">
            {art.artistAge} tuổi &bull; {art.location}
          </p>
        </div>
      </div>

      {/* Dream Quote */}
      <div className="space-y-4">
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/80">
          <h3 className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-1">
            Ước mơ của em
          </h3>
          <p className="text-base font-body text-on-background">
            &ldquo;{art.dream}&rdquo;
          </p>
        </div>
      </div>

      {/* Button to go to the new /artists page */}
      <Link
        href={`/artists#artist-${art.id}`}
        className="w-full mt-6 flex items-center justify-center gap-2 py-3.5 bg-secondary-container text-on-secondary-container rounded-2xl font-bold text-center text-sm hover:scale-105 active:scale-95 transition-all shadow-sm uppercase tracking-wider button-3d"
        style={{ boxShadow: "0 4px 0 0 #564500" }}
      >
        <span className="material-symbols-outlined text-base">face</span>
        Xem câu chuyện chi tiết của bé
      </Link>
    </div>
  );
}
