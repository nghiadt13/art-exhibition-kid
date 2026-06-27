import Link from "next/link";

const drawings = [
  { id: 1, src: "/artworks/artwork_1.png", rotate: "rotate-2" },
  { id: 2, src: "/artworks/artwork_2.png", rotate: "-rotate-2" },
  { id: 3, src: "/artworks/artwork_3.png", rotate: "rotate-1" },
  { id: 4, src: "/artworks/artwork_4.png", rotate: "-rotate-1" },
  { id: 5, src: "/artworks/artwork_5.png", rotate: "rotate-3" },
  { id: 6, src: "/artworks/artwork_6.png", rotate: "-rotate-3" },
  { id: 7, src: "/artworks/artwork_7.png", rotate: "rotate-2" },
  { id: 8, src: "/artworks/artwork_8.png", rotate: "-rotate-2" },
  { id: 9, src: "/artworks/artwork_9.png", rotate: "rotate-1" },
  { id: 10, src: "/artworks/artwork_10.png", rotate: "-rotate-1" },
];

const marqueeItems = [...drawings, ...drawings];

export default function HeroSection() {
  return (
    <header className="relative pt-24 pb-20 overflow-hidden scribble-bg">
      {/* Infinite Marquee Artworks */}
      <div className="w-full overflow-hidden py-6 relative z-10 mb-6">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee gap-8 py-4">
          {marqueeItems.map((item, index) => (
            <Link
              key={index}
              href={`/product/${item.id}`}
              className={`inline-block polaroid-frame cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-0 hover:z-30 hover:shadow-md ${item.rotate}`}
            >
              <div className="w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded bg-surface-container-low">
                <img
                  src={item.src}
                  alt={`Tranh của bé ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-3 text-xs font-bold text-primary font-headline">
                Tác phẩm #{item.id}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        <h1 className="font-display text-[48px] leading-[1.2] tracking-[-0.02em] font-extrabold text-primary max-w-3xl mb-6">
          Chắp cánh những ước mơ nhỏ qua từng nét vẽ hồn nhiên
        </h1>

        <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mb-10 bg-surface/40 backdrop-blur-sm rounded-xl p-4 md:bg-transparent md:p-0">
          Mỗi bức tranh là một lời nhắn nhủ, một khát khao của trẻ em vùng cao.
          Hãy cùng chúng tôi biến những điều em muốn thành hiện thực thông qua
          nghệ thuật.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/gallery"
            className="bg-primary text-on-primary px-10 py-4 rounded-full font-body text-lg font-semibold button-3d bouncy-hover flex items-center justify-center"
          >
            Khám phá triển lãm
          </Link>
          <Link
            href="/#about"
            className="secondary-crayon-btn text-primary px-10 py-4 rounded-full font-body text-lg font-semibold bouncy-hover bg-surface/50 backdrop-blur-sm flex items-center justify-center"
          >
            Tìm hiểu dự án
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container wonky-border opacity-30 blur-2xl" />
      <div className="absolute top-40 -right-20 w-64 h-64 bg-tertiary-fixed wonky-border opacity-40 blur-3xl" />
    </header>
  );
}
