export default function CtaSection() {
  return (
    <section className="py-[80px] text-center px-4 bg-white/40 backdrop-blur-[2px]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-tertiary-container text-on-tertiary-container rounded-full float-anim">
          <span
            className="material-symbols-outlined text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            volunteer_activism
          </span>
        </div>
        <h2 className="font-display text-[48px] leading-[1.2] tracking-[-0.02em] font-extrabold text-primary mb-6">
          Bạn đã sẵn sàng để giúp đỡ?
        </h2>
        <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant mb-12 bg-surface/40 backdrop-blur-sm rounded-xl p-6 md:bg-transparent">
          Mỗi đóng góp của bạn, dù nhỏ nhất, đều mang lại giá trị to lớn cho
          hành trình tìm kiếm nụ cười của trẻ em. Hãy bắt đầu ngay hôm nay!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-body text-xl font-semibold button-3d bouncy-hover">
            Quyên góp ngay
          </button>
          <button className="secondary-crayon-btn text-primary px-12 py-5 rounded-full font-body text-xl font-semibold bouncy-hover bg-surface/50 backdrop-blur-sm">
            Trở thành đối tác
          </button>
        </div>
      </div>
    </section>
  );
}
