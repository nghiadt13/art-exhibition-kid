import LazyImage from "@/components/lazy-image";

export default function AboutSection() {
  return (
    <div id="about" className="divide-y divide-outline-variant/10">
      {/* 1. Về dự án "Điều em muốn" */}
      <section className="py-20 paper-texture bg-surface-container-low/90 relative backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="w-full lg:col-span-6 relative">
              <div className="polaroid-frame rotate-[-2deg] transition-transform hover:rotate-0 duration-500 shadow-lg">
                <LazyImage
                  className="w-full h-[400px] object-cover rounded-sm"
                  alt="Về dự án Điều em muốn"
                  src="/homepage/home_1.webp"
                />
              </div>
              {/* Floating sun decoration */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 float-anim hidden md:block">
                <LazyImage
                  className="w-full h-full object-contain"
                  alt="Mặt trời crayon"
                  src="/homepage/sun.webp"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:col-span-6 space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold shadow-sm uppercase tracking-wider">
                Về dự án
              </div>
              <h2 className="font-display text-[40px] leading-[1.2] font-black text-primary">
                Dự án  "Điều em muốn"
              </h2>
              <p className="font-body text-[18px] leading-[1.7] text-on-surface-variant">
                &ldquo;Điều em muốn&rdquo; là dự án truyền thông cộng đồng hướng
                đến việc lan tỏa sự thấu hiểu và đồng hành dành cho trẻ em
                khuyết tật tại lớp học Bảo Ái, tỉnh Lào Cai. Thông qua những câu
                chuyện, bức tranh và hành trình học tập của các em, dự án mong
                muốn giúp cộng đồng lắng nghe nhiều hơn những mong ước giản dị
                nhưng đầy ý nghĩa của các em nhỏ.
              </p>
              <div className="pt-2">
                <div className="flex items-center gap-3 text-secondary font-bold">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                  Lan tỏa yêu thương & thấu hiểu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Câu chuyện hình thành dự án */}
      <section className="py-20 bg-background relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="w-full lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-sm font-bold shadow-sm uppercase tracking-wider">
                Hành trình khởi đầu
              </div>
              <h2 className="font-display text-[40px] leading-[1.2] font-black text-primary">
                Câu chuyện hình thành
              </h2>
              <div className="space-y-4 font-body text-[18px] leading-[1.7] text-on-surface-variant">
                <p>
                  Tại lớp học khuyết tật ở xã Bảo Ái, nhiều em nhỏ vẫn đang đối
                  mặt với những khó khăn về điều kiện học tập và cơ hội phát
                  triển. Tuy vậy, các em vẫn luôn nỗ lực mỗi ngày để học tập,
                  vui chơi và nuôi dưỡng những ước mơ của riêng mình.
                </p>
                <p>
                  Chúng tôi nhận ra rằng điều các em cần không chỉ là sự hỗ trợ
                  vật chất mà còn là sự lắng nghe, thấu hiểu và đồng hành từ cộng
                  đồng. Từ đó, dự án &ldquo;Điều em muốn&rdquo; được hình thành
                  với mong muốn trở thành cầu nối đưa câu chuyện của các em đến
                  gần hơn với mọi người.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full lg:col-span-6 lg:order-1">
              <div className="polaroid-frame rotate-[2deg] transition-transform hover:rotate-0 duration-500 shadow-lg">
                <LazyImage
                  className="w-full h-[400px] object-cover rounded-sm"
                  alt="Câu chuyện lớp học Bảo Ái"
                  src="/homepage/home_2.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Thông điệp dự án */}
      <section className="py-20 paper-texture bg-surface-container-low/90 relative backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="w-full lg:col-span-6 relative">
              <div className="polaroid-frame rotate-[-1deg] transition-transform hover:rotate-0 duration-500 shadow-lg">
                <LazyImage
                  className="w-full h-[400px] object-cover rounded-sm"
                  alt="Thông điệp dự án Điều em muốn"
                  src="/homepage/home_3.webp"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:col-span-6 space-y-6">
              <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-sm font-bold shadow-sm uppercase tracking-wider">
                Giá trị cốt lõi
              </div>
              <h2 className="font-display text-[40px] leading-[1.2] font-black text-primary">
                Thông điệp dự án
              </h2>
              
              <div className="bg-white/60 border-2 border-primary/20 border-dashed rounded-3xl p-6 md:p-8 relative">
                <span
                  className="material-symbols-outlined text-4xl text-primary/30 absolute -top-5 -left-3 bg-background px-2"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-display text-2xl md:text-3xl font-extrabold text-primary text-center tracking-wide uppercase italic">
                  &ldquo; Lắng nghe - Thấu hiểu - Đồng hành &rdquo;
                </p>
              </div>

              <p className="font-body text-[18px] leading-[1.7] text-on-surface-variant">
                &ldquo;Điều em muốn&rdquo; không chỉ kể câu chuyện về trẻ em khuyết
                tật, mà còn là hành trình kết nối những trái tim biết sẻ chia. Chúng
                tôi tin rằng khi cộng đồng cùng lắng nghe và đồng hành, những mong
                muốn nhỏ bé hôm nay sẽ trở thành những cơ hội lớn cho tương lai
                của các em.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
