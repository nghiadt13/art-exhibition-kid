"use client";

import { useState } from "react";
import Link from "next/link";
import { Artwork } from "@/lib/data";
import LazyImage from "@/components/lazy-image";

interface ArtistCardProps {
  art: Artwork;
}

export default function ArtistCard({ art }: ArtistCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="content-card-bg p-8 rounded-[40px] border-2 border-outline-variant relative wonky-rotation-alt overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/20 rounded-bl-[100%]" />

        {/* Artist Info */}
        <div className="flex items-center gap-6 mb-6">
          <div 
            className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-surface-container relative cursor-zoom-in hover:scale-105 active:scale-95 transition-all duration-300"
            onClick={() => setShowModal(true)}
          >
            <LazyImage
              className="w-full h-full object-cover pointer-events-none select-none"
              alt={art.artistName}
              src={art.artistAvatar}
              wrapperClassName="w-full h-full"
            />
          </div>
          <div>
            <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-tertiary">
              {art.artistName}
            </h2>
            <p className="text-[18px] leading-[1.4] font-body text-on-surface-variant">
              Sinh năm {art.birthYear}
            </p>
            <p className="text-[18px] leading-[1.4] font-body text-on-surface-variant mt-0.5">
              {art.location}
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

      {/* Portrait Lightbox Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative max-w-lg w-full bg-surface-container-lowest rounded-[2.5rem] p-6 border border-outline-variant/30 shadow-2xl flex flex-col items-center gap-4 cursor-default animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-outline hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high"
              onClick={() => setShowModal(false)}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-4 border-white shadow-md overflow-hidden bg-surface-container relative mt-4">
              <LazyImage
                className="w-full h-full object-cover select-none"
                alt={art.artistName}
                src={art.artistAvatar}
                wrapperClassName="w-full h-full"
              />
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary mt-2">
              {art.artistName}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
