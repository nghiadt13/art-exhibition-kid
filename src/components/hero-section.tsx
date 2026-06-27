import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden scribble-bg">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        {/* Logo Image */}
        <div className="w-full max-w-2xl mb-8 float-anim">
          <img
            alt="Điều Em Muốn Logo"
            className="w-full h-auto drop-shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgpjJkXClINoQVWDX_Dsqd4GrCxc6-eri64n5BgnqVuGiqHtP70gbs1hdsfcx_1ZJ9_bRVM2opzjqbZoPqcB2d5s0AmDPXG5AKnAp5VY3LukW1MhgH5c1-WQkfa4Xv4GYoPWR31MLUz_OnRw9npgzWOy_2aaKMJcx9HYuYMpp4daxkjjHwt1RUOV19p6Wc1dDRGmJjxOUi2LTkkkurelTG47FCzLMFtUV8f8BRJIPMYxr3Fg2OXCaKqpYdx063pywCtl0ueQv7lg2R"
          />
        </div>

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
