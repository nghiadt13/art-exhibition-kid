export default function ArtworkDisplay() {
  return (
    <section className="lg:col-span-7 flex flex-col gap-6">
      {/* Main Artwork Card */}
      <div className="content-card-bg p-4 md:p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] wonky-rotation relative">
        <div className="absolute -top-4 -left-4 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-bold text-sm z-10 -rotate-12">
          Tác phẩm của tháng
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-surface-container/50">
          <img
            className="w-full h-full object-cover"
            alt="Ước Mơ Dưới Ánh Mặt Trời"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdYGHIAA-jHvbrYsk3TizTZLW08NQ-qbf_vYdAM8RVhVBfFgNvp8hoHuWen5p1QIx9u02Dej1zsPFaNSjJcg1hH2w5uLzIvzNze7PD8Etkjt_68hw69YitojD8ZJcpO5puKJoO9O41lV3UoKNUB_pDQjv43PYxSTTyFfCzabC43D_CN5zyiYivq-ONOoilsooQuA0RwfowFnhyaAhBcjVZiE68mnYXt4WMTnZVGd7x2RfcEf4xF206610D6Mx6bULV5mJTxZ4FWG_8"
        />
        </div>
        <div className="mt-6 text-center">
          <h1 className="font-display text-[48px] leading-[1.2] tracking-[-0.02em] font-extrabold text-primary mb-2">
            Ước Mơ Dưới Ánh Mặt Trời
          </h1>
          <p className="text-on-surface-variant font-body italic">
            Sáp màu trên giấy vẽ, 2024
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 md:justify-start justify-center">
        <button className="flex items-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-full font-headline text-[28px] leading-[1.3] font-bold transition-all hover:scale-105 active:scale-95 crayon-button-shadow group">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>
          Quyên góp ngay
        </button>
        <button className="flex items-center gap-2 content-card-bg text-primary border-4 border-dashed border-primary/30 px-8 py-4 rounded-full font-headline text-[28px] leading-[1.3] font-bold transition-all hover:bg-white active:scale-95 group">
          <span className="material-symbols-outlined">share</span>
          Chia sẻ câu chuyện
        </button>
      </div>
    </section>
  );
}
