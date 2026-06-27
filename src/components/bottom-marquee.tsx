"use client";

import { useState } from "react";

const marqueeImages = [
  "/marquee/marquee_1.png",
  "/marquee/marquee_2.png",
  "/marquee/marquee_3.png",
  "/marquee/marquee_4.png",
  "/marquee/marquee_5.png",
  "/marquee/marquee_6.png",
  "/marquee/marquee_7.png",
  "/marquee/marquee_8.png",
];

const displayImages = [...marqueeImages, ...marqueeImages];

const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-3", "-rotate-3"];

export default function BottomMarquee() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-surface-container-low/40 relative overflow-hidden border-t border-outline-variant/10">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mb-10 text-center">
        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-3 inline-block uppercase tracking-wider">
          Kỷ niệm đáng nhớ
        </span>
        <h2 className="font-display text-4xl font-black text-primary">
          Những khoảnh khắc cùng em
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="w-full overflow-hidden py-4 relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div 
          className="animate-marquee gap-8 py-4"
          style={{ animationPlayState: selectedImage ? "paused" : "running" }}
        >
          {displayImages.map((src, index) => {
            const rot = rotations[index % rotations.length];
            return (
              <div
                key={index}
                className={`inline-block polaroid-frame cursor-zoom-in transition-all duration-300 hover:scale-115 hover:rotate-0 hover:z-30 hover:shadow-lg ${rot}`}
                onClick={() => setSelectedImage(src)}
              >
                <div className="w-48 h-36 md:w-56 md:h-40 overflow-hidden rounded bg-surface-container-low flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Khoảnh khắc cùng em ${index + 1}`}
                    className="w-full h-full object-cover block select-none pointer-events-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-surface-container-lowest rounded-[2.5rem] p-4 border border-outline-variant/30 shadow-2xl flex flex-col items-center gap-4 cursor-default animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-outline hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high"
              onClick={() => setSelectedImage(null)}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="w-full max-h-[70vh] rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center mt-6">
              <img
                className="max-w-full max-h-[70vh] object-contain select-none"
                alt="Khoảnh khắc cùng em phóng to"
                src={selectedImage}
              />
            </div>
            <h3 className="font-headline text-lg font-bold text-primary mb-2 uppercase tracking-wider">
              Khoảnh khắc cùng em
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
