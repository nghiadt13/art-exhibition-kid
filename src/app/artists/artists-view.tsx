"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TopNavBar from "@/components/top-nav-bar";
import Footer from "@/components/footer";
import { artworks } from "@/lib/data";

export default function ArtistsView() {
  const [highlightedId, setHighlightedId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#artist-")) {
        const id = parseInt(hash.replace("#artist-", ""), 10);
        if (!isNaN(id)) {
          setHighlightedId(id);
          // Delay slightly to ensure elements are rendered and can be scrolled to
          setTimeout(() => {
            const element = document.getElementById(`artist-${id}`);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 100);
        }
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen pt-20 relative">
      <TopNavBar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
            Những Câu Chuyện Nhỏ
          </span>
          <h1 className="font-display text-5xl font-black text-primary mb-4">
            Hồ Sơ Họa Sĩ Nhí
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto italic">
            &ldquo;Lắng nghe câu chuyện cuộc sống và những ước mơ ẩn sau mỗi bức tranh đầy sắc màu của các em nhỏ vùng cao.&rdquo;
          </p>
        </div>

        {/* Artists Profiles List */}
        <div className="flex flex-col gap-10">
          {artworks.map((art) => (
            <div
              id={`artist-${art.id}`}
              key={art.id}
              className={`content-card-bg p-6 md:p-8 rounded-[40px] border-2 transition-all duration-500 shadow-sm flex flex-col lg:flex-row gap-8 items-stretch ${
                highlightedId === art.id
                  ? "border-primary bg-secondary-container/10 ring-4 ring-primary/20 scale-[1.01]"
                  : "border-outline-variant hover:border-primary/30"
              }`}
            >
              {/* Left Column: Avatar & Basic Info */}
              <div className="w-full lg:w-1/4 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-outline-variant/30 pb-6 lg:pb-0 lg:pr-8">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-md overflow-hidden bg-surface-container relative">
                  <img
                    className="w-full h-full object-cover"
                    alt={art.artistName}
                    src={art.artistAvatar}
                  />
                </div>
                <h2 className="font-headline text-3xl font-bold text-primary mt-4">
                  {art.artistName}
                </h2>
                <p className="text-[16px] font-body text-on-surface-variant mt-1">
                  {art.artistAge} tuổi &bull; {art.location}
                </p>
                <span className="mt-4 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                  Chủ đề: {art.tag}
                </span>
              </div>

              {/* Middle Column: Life Story & Dream Quote */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6 py-2">
                <div className="space-y-4">
                  <h3 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl">menu_book</span>
                    Hoàn cảnh gia đình
                  </h3>
                  <p className="font-body text-[16px] leading-[1.6] text-on-surface-variant">
                    {art.artistStory}
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-white/80">
                  <h4 className="font-headline text-sm font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">workspace_premium</span>
                    Điều em mong muốn
                  </h4>
                  <p className="text-[16px] font-body text-on-background italic leading-[1.5]">
                    &ldquo;{art.dream}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Drawing Thumbnail & Action Button */}
              <div className="w-full lg:w-1/4 flex flex-col items-center justify-center gap-4 bg-surface-container/20 rounded-3xl p-6 border border-outline-variant/20">
                <span className="text-xs font-bold text-outline uppercase tracking-wider">
                  Tác phẩm của em
                </span>
                <Link
                  href={`/product/${art.id}`}
                  className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-surface-container-low shadow-sm border border-outline-variant/30 hover:scale-105 hover:shadow-md transition-all duration-300 relative group"
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                  </div>
                </Link>
                <div className="text-center">
                  <h4 className="font-display text-[18px] leading-[1.3] font-extrabold text-primary mb-1">
                    {art.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant font-body italic">
                    {art.material}, {art.year}
                  </p>
                </div>
                <Link
                  href={`/product/${art.id}`}
                  className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold text-center text-sm hover:scale-105 active:scale-95 transition-all button-3d inline-block mt-2"
                >
                  Xem chi tiết tranh
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
