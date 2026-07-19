"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TopNavBar from "@/components/top-nav-bar";
import Footer from "@/components/footer";
import { artworks, Artwork } from "@/lib/data";
import LazyImage from "@/components/lazy-image";

export default function ArtistsView() {
  const [highlightedId, setHighlightedId] = useState<number | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<{ src: string; name: string } | null>(null);
  const [selectedMediaArtist, setSelectedMediaArtist] = useState<Artwork | null>(null);
  const [activeMedia, setActiveMedia] = useState<{ type: "video" | "image"; src: string } | null>(null);

  const getYouTubeThumbnail = (embedUrl: string) => {
    const match = embedUrl.match(/\/embed\/([^/?]+)/);
    const videoId = match ? match[1] : null;
    return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null;
  };

  useEffect(() => {
    if (selectedMediaArtist) {
      const hasVideos = selectedMediaArtist.artistVideos && selectedMediaArtist.artistVideos.length > 0;
      setActiveMedia({
        type: hasVideos ? "video" : "image",
        src: hasVideos
          ? selectedMediaArtist.artistVideos![0]
          : selectedMediaArtist.artistPhotos?.[0] || selectedMediaArtist.artistAvatar,
      });
    } else {
      setActiveMedia(null);
    }
  }, [selectedMediaArtist]);

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
            &ldquo;Lắng nghe câu chuyện cuộc sống và những ước mơ ẩn sau mỗi bức tranh đầy sắc màu của các em nhỏ .&rdquo;
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
                <div 
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-md overflow-hidden bg-surface-container relative cursor-zoom-in hover:scale-105 active:scale-95 transition-all duration-300"
                  onClick={() => setSelectedAvatar({ src: art.artistAvatar, name: art.artistName })}
                >
                  <LazyImage
                    className="w-full h-full object-cover pointer-events-none select-none"
                    alt={art.artistName}
                    src={art.artistAvatar}
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <h2 className="font-headline text-3xl font-bold text-primary mt-4">
                  {art.artistName}
                </h2>
                <p className="text-[16px] font-body text-on-surface-variant mt-1">
                  Sinh năm {art.birthYear}
                </p>
                <p className="text-[16px] font-body text-on-surface-variant mt-0.5">
                  {art.location}
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

                <div className="space-y-4">
                  <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-white/80">
                    <h4 className="font-headline text-sm font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">workspace_premium</span>
                      Điều em mong muốn
                    </h4>
                    <p className="text-[16px] font-body text-on-background italic leading-[1.5]">
                      &ldquo;{art.dream}&rdquo;
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedMediaArtist(art)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-secondary-container text-on-secondary-container rounded-2xl font-bold text-sm hover:scale-[1.03] transition-all cursor-pointer shadow-sm w-fit border-2 border-secondary/20 button-3d-secondary"
                  >
                    <span className="material-symbols-outlined text-lg">play_circle</span>
                    Khoảnh khắc đời thường & Video
                  </button>
                </div>
              </div>

              {/* Right Column: Drawing Thumbnail & Action Button */}
              <div className="w-full lg:w-1/4 flex flex-col items-center justify-center gap-4 bg-surface-container/20 rounded-3xl p-6 border border-outline-variant/20 text-center">
                {art.hasDrawing ? (
                  <>
                    <span className="text-xs font-bold text-outline uppercase tracking-wider">
                      Tác phẩm của em
                    </span>
                    <Link
                      href={`/product/${art.id}`}
                      className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-surface-container-low shadow-sm border border-outline-variant/30 hover:scale-105 hover:shadow-md transition-all duration-300 relative group"
                    >
                      <LazyImage
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover"
                        wrapperClassName="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                      </div>
                    </Link>
                    <div>
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
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-4xl text-secondary mb-2">
                      auto_stories
                    </span>
                    <h4 className="font-display text-[18px] leading-[1.3] font-extrabold text-primary mb-2">
                      Trưng bày trực tiếp
                    </h4>
                    <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                      Tác phẩm của em hiện đang được giới thiệu trực tiếp tại không gian triển lãm vật lý của dự án.
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Media & Story Lightbox Modal */}
      {selectedMediaArtist && activeMedia && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-[999] flex items-center justify-center p-4 md:p-6 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedMediaArtist(null)}
        >
          <div
            className="relative max-w-[95%] md:max-w-5xl lg:max-w-6xl w-full bg-surface-container-lowest rounded-[2.5rem] p-6 md:p-8 border border-outline-variant/30 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-stretch cursor-default animate-scale-up overflow-y-auto max-h-[95vh] md:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-outline hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high cursor-pointer z-20"
              onClick={() => setSelectedMediaArtist(null)}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Left Column: Media Display & Playlist */}
            <div className="w-full md:w-3/5 flex flex-col gap-4">
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner relative border border-outline-variant/20">
                {activeMedia.type === "video" ? (
                  <iframe
                    className="w-full h-full"
                    src={activeMedia.src}
                    title={`Video về ${selectedMediaArtist.artistName}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <LazyImage
                    className="w-full h-full object-contain bg-black/35"
                    alt={`Ảnh của ${selectedMediaArtist.artistName}`}
                    src={activeMedia.src}
                    wrapperClassName="w-full h-full"
                  />
                )}
              </div>

              {/* Media selection row / Playlist */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-outline uppercase tracking-wider">
                  Album Khoảnh Khắc
                </span>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {/* Video Thumbnail Buttons */}
                  {selectedMediaArtist.artistVideos?.map((videoUrl, idx) => {
                    const ytThumb = getYouTubeThumbnail(videoUrl) || selectedMediaArtist.artistAvatar;
                    return (
                      <button
                        key={`video-${idx}`}
                        onClick={() =>
                          setActiveMedia({
                            type: "video",
                            src: videoUrl,
                          })
                        }
                        className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all duration-300 ${
                          activeMedia.type === "video" && activeMedia.src === videoUrl
                            ? "border-primary scale-105 shadow-md"
                            : "border-outline-variant/40 hover:border-primary/50"
                        }`}
                      >
                        <LazyImage
                          src={ytThumb}
                          alt={`Video ${idx + 1}`}
                          className="w-full h-full object-cover opacity-75"
                          wrapperClassName="w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                          <span className="material-symbols-outlined text-white text-2xl">play_circle</span>
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] text-white font-bold">
                          {selectedMediaArtist.artistVideos!.length > 1 ? `Video ${idx + 1}` : "Video"}
                        </div>
                      </button>
                    );
                  })}

                  {/* Photo Thumbnail Buttons */}
                  {selectedMediaArtist.artistPhotos?.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        setActiveMedia({
                          type: "image",
                          src: photo,
                        })
                      }
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all duration-300 ${
                        activeMedia.type === "image" && activeMedia.src === photo
                          ? "border-primary scale-105 shadow-md"
                          : "border-outline-variant/40 hover:border-primary/50"
                      }`}
                    >
                      <LazyImage
                        src={photo}
                        alt={`Photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                        wrapperClassName="w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Artist Info & Message Box */}
            <div className="w-full md:w-2/5 flex flex-col justify-between gap-6 py-2">
              <div className="space-y-4">
                <div>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wider inline-block mb-2">
                    Họa sĩ nhí
                  </span>
                  <h3 className="font-headline text-3xl font-bold text-primary">
                    {selectedMediaArtist.artistName}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-body mt-1">
                    Sinh năm {selectedMediaArtist.birthYear} • {selectedMediaArtist.location}
                  </p>
                </div>

                <div className="border-t border-outline-variant/30 pt-4">
                  <h4 className="font-headline text-[15px] font-bold text-secondary flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-lg">auto_stories</span>
                    Ước mơ của em
                  </h4>
                  <p className="text-sm font-body text-on-surface-variant italic leading-relaxed">
                    &ldquo;{selectedMediaArtist.dream}&rdquo;
                  </p>
                </div>
              </div>

              {/* Heart Warming Interactive Form */}
              <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex flex-col gap-3">
                <h4 className="font-headline text-sm font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">favorite</span>
                  Gửi lời chúc ấm áp đến em
                </h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const text = formData.get("message") as string;
                    if (text?.trim()) {
                      alert(`Cảm ơn bạn! Lời động viên ý nghĩa của bạn đã được ghi lại để chuyển tới bé ${selectedMediaArtist.artistName}.`);
                      form.reset();
                    }
                  }}
                  className="flex flex-col gap-2"
                >
                  <textarea
                    name="message"
                    placeholder={`Hãy gửi vài lời động viên ngọt ngào tới bé ${selectedMediaArtist.artistName} bạn nhé...`}
                    className="w-full p-3 text-xs rounded-xl border border-outline-variant bg-white focus:border-primary focus:outline-none resize-none h-18 text-on-surface"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-bold text-xs hover:scale-[1.02] active:scale-98 transition-all shadow-sm cursor-pointer text-center"
                  >
                    Gửi lời yêu thương
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
