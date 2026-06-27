"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { artworks, Artwork } from "@/lib/data";

interface RelatedWorksProps {
  currentId: number;
}

export default function RelatedWorks({ currentId }: RelatedWorksProps) {
  // Deterministic initial state to prevent layout shift during SSR/Hydration
  const getInitialRelated = () => {
    const filtered = artworks.filter((art) => art.id !== currentId && art.hasDrawing);
    return filtered.slice(0, 3);
  };

  const [suggested, setSuggested] = useState<Artwork[]>(getInitialRelated);

  useEffect(() => {
    const filtered = artworks.filter((art) => art.id !== currentId && art.hasDrawing);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setSuggested(shuffled.slice(0, 3));
  }, [currentId]);

  const rotations = ["wonky-rotation-alt", "-rotate-1", "rotate-2"];

  return (
    <section className="mt-[80px]">
      <div className="flex items-end justify-between mb-8">
        <div className="content-card-bg px-6 py-4 rounded-2xl shadow-sm">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">
            Khám phá thêm
          </span>
          <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-on-surface">
            Những ước mơ khác
          </h2>
        </div>
        <Link
          className="content-card-bg px-6 py-4 rounded-full text-primary font-bold hover:underline flex items-center gap-1 group shadow-sm"
          href="/gallery"
        >
          Xem tất cả
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suggested.map((work, idx) => (
          <Link
            key={work.id}
            href={`/product/${work.id}`}
            className="group cursor-pointer block"
          >
            <div
              className={`content-card-bg p-3 rounded-2xl shadow-sm group-hover:shadow-lg transition-all duration-300 ${
                rotations[idx % rotations.length]
              }`}
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={work.title}
                  src={work.image}
                />
              </div>
              <h4 className="font-body text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                {work.title}
              </h4>
              <p className="text-xs text-on-surface-variant">
                {work.artistName} &bull; Sinh năm {work.birthYear}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
