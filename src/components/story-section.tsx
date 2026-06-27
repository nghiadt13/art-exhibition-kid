export default function StorySection() {
  return (
    <section className="bg-primary/90 backdrop-blur-sm text-on-primary py-[80px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-surface-container-lowest rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-on-surface">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <div className="polaroid-frame rotate-[3deg]">
              <img
                className="w-full h-full object-cover rounded-sm"
                alt="Em Mai vẽ tranh"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPHGbiNZCEUZ8Aj6_NUErslUIeEtDrHAgzR_SmT9Np9ffz6WLSUoN9bJaIcG_8CAhEOIsqn15gGNZohSYNgYzw4tbrTjaIaAM2xDISkHEB4yx0Rvg6aRj85MGB0TdQtGuiT01jel90ETSGRP8iAvMvsR2ktC088Z-VQtdkyKERVgiplXDzz8gjeSXgyr6Zl6-dK27Px-FY1m8YYXnb8mu3A0j3u7bksfc8KbukuDkwJ-7Zv6h4KJbYplNl9OwZtTN7ooL6lBo3PxpY"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3">
            <span className="text-tertiary font-bold uppercase tracking-widest text-sm mb-4 block">
              Câu chuyện truyền cảm hứng
            </span>
            <h2 className="font-display text-[32px] leading-[1.3] font-bold text-primary mb-6">
              Hạnh phúc từ những điều giản dị
            </h2>
            <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant mb-8 italic">
              &ldquo;Nhờ sự hỗ trợ của cộng đồng qua dự án &lsquo;Điều Em
              Muốn&rsquo;, em Mai đã có thể tiếp tục đến trường và nuôi dưỡng
              ước mơ trở thành cô giáo dạy vẽ cho những bạn nhỏ có hoàn cảnh
              giống mình.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">
                  favorite
                </span>
              </div>
              <span className="font-bold text-primary">
                Cùng chúng tôi viết tiếp những câu chuyện đẹp
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
