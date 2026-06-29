"use client";

import { useState } from "react";
import { Artwork } from "@/lib/data";
import LazyImage from "@/components/lazy-image";

interface ArtworkDisplayProps {
  art: Artwork;
}

export default function ArtworkDisplay({ art }: ArtworkDisplayProps) {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `Điều Em Muốn - Tác phẩm: ${art.title}`,
      text: `Hãy cùng lắng nghe câu chuyện và chắp cánh ước mơ cho họa sĩ nhí ${art.artistName} qua tác phẩm "${art.title}"`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    }
  };

  return (
    <section className="lg:col-span-7 flex flex-col gap-6 relative">
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

      {/* Action Buttons - Centered */}
      <div className="flex justify-center mt-8">
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 content-card-bg text-primary border-4 border-dashed border-primary/30 px-10 py-4 rounded-full font-headline text-[24px] leading-[1.3] font-bold transition-all hover:bg-white hover:scale-105 active:scale-95 group cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">share</span>
          Chia sẻ câu chuyện
        </button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-primary text-on-primary px-6 py-3.5 rounded-full shadow-xl flex items-center gap-2 animate-toast-in font-body text-sm font-semibold whitespace-nowrap">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          Đã sao chép liên kết chia sẻ câu chuyện!
        </div>
      )}
    </section>
  );
}

