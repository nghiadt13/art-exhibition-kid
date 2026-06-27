export default function AboutSection() {
  return (
    <section
      className="py-[80px] paper-texture bg-surface-container-low/90 relative backdrop-blur-sm"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="polaroid-frame rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
              <img
                className="w-full h-[400px] object-cover rounded-sm"
                alt="Em bé Việt Nam vui vẽ"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLt2uTASZhmtCy0Mk2l8bbSJED0DMV2F_R2F7xCQ54t2nPXuTjazw-csBqTOnLjZs3tk0wYPcCwO7a39mDGzfkJGRJzdYMB_B5sLvgxjdieLYlr0UJbIeYSawJkkdijF9qq7i6yQR4MPZczY7vLkY86ww8PVGIdvBQgP7qqSRolg7k4v5YLLQHXg3EBmIOrWCiwbN_lMvu0_WgS0mEpkbvGMshSgvaboMr95lfyQPKSJ_drzCBkQaQWOJolZ8uOThYGlUiE_IZvnGd"
              />
            </div>
            {/* Floating sun decoration */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 float-anim hidden md:block">
              <img
                className="w-full h-full object-contain"
                alt="Mặt trời crayon"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrQWu_SGKC_FsoFMd311q2WoKNl5EXPjmdUffhMGz2cmfsD6Cz-2WSZiGDfE5YrRsdv2rCakgd6H_Hvt7GA3PPlN9OgSbUEVKrT-MGa-BYT5prpm28RBNoF7OBxex8ChL7fmmWt0ZmqyZzhLrngmSC504XFBQHjl7-KyRGX41s3AksVuEzvEyiKNIh9-DKFdY0dl9d47LtXAxdj6yiy1-EZ70G4_ly1obcGyMws4qmZf0hueOpOw2w4J2pGXe-W8NJ0eLfuJTK9h0Q"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <div className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed-variant px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Câu chuyện của chúng tôi
            </div>
            <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-primary mb-6">
              Mỗi nét vẽ là một hy vọng
            </h2>
            <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant mb-6">
              &ldquo;Điều Em Muốn&rdquo; khởi nguồn từ niềm tin rằng sự sáng tạo
              không có giới hạn. Chúng tôi mang giấy, bút màu và tình yêu đến
              với trẻ em nghèo, giúp các em bộc lộ thế giới nội tâm đầy màu
              sắc.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-secondary-container bg-primary p-2 rounded-full"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  volunteer_activism
                </span>
                <div>
                  <h4 className="font-bold text-primary">
                    Sứ mệnh thiện nguyện
                  </h4>
                  <p className="text-on-surface-variant">
                    100% lợi nhuận từ việc bán tranh được dùng để hỗ trợ giáo
                    dục và y tế cho trẻ em.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-secondary-container bg-primary p-2 rounded-full"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  palette
                </span>
                <div>
                  <h4 className="font-bold text-primary">
                    Sáng tạo không rào cản
                  </h4>
                  <p className="text-on-surface-variant">
                    Khuyến khích trẻ em tự tin thể hiện ước mơ thông qua hội
                    họa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
