"use client";

import React from "react";
import Link from "next/link";
import TopNavBar from "@/components/top-nav-bar";
import Footer from "@/components/footer";
import { artworks } from "@/lib/data";

export default function GalleryView() {
  return (
    <div className="min-h-screen pt-20 relative">
      <TopNavBar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-black text-primary mb-4">
            Phòng Trưng Bày Của Bé
          </h1>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto italic">
            &ldquo;Nơi những ước mơ nhỏ bé được vẽ lên bằng màu sắc của hy vọng và tình thương.&rdquo;
          </p>
        </div>



        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.filter((art) => art.hasDrawing).map((art) => (
            <Link
              href={`/product/${art.id}`}
              key={art.id}
              className="group block bg-surface-container-lowest/90 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 border border-outline-variant/20 wonky-rotation even:wonky-rotation-alt"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {art.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-container transition-colors">
                  {art.title}
                </h3>
                <p className="text-secondary text-sm font-semibold mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">face</span>{" "}
                  {art.artistName} &bull; Sinh năm {art.birthYear}
                </p>
                <p className="text-on-surface-variant line-clamp-2 mb-6 leading-relaxed">
                  &ldquo;{art.description}&rdquo;
                </p>
                <div className="w-full flex justify-between items-center text-outline font-bold group-hover:text-primary transition-all">
                  Chi tiết
                  <span className="material-symbols-outlined transform transition-transform group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-surface-container-lowest text-primary border-2 border-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all shadow-sm button-3d">
            Xem thêm tác phẩm
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
