export default function StoryCard() {
  return (
    <div className="relative p-2">
      <div className="absolute inset-0 bg-white/40 -rotate-1 rounded-3xl backdrop-blur-sm" />
      <div className="relative content-card-bg p-8 rounded-3xl sketch-border">
        <span
          className="material-symbols-outlined text-4xl text-primary mb-4"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </span>
        <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-on-surface mb-4">
          Câu chuyện đằng sau bức tranh
        </h2>
        <div className="space-y-4 text-on-surface-variant leading-relaxed">
          <p className="font-body text-base">
            Minh Quân sinh ra trong một gia đình thuần nông tại vùng cao Quảng
            Ngãi. Cuộc sống của em gắn liền với những buổi chiều cùng bà ra
            đồng, ngắm nhìn ánh mặt trời lặn sau những dãy núi nhấp nhô.
          </p>
          <p className="font-body text-base">
            &ldquo;Ước Mơ Dưới Ánh Mặt Trời&rdquo; không chỉ là một bức tranh,
            đó là niềm tin của một cậu bé chưa bao giờ được đi xa khỏi bản làng.
            Những đám mây trắng phau trong tranh chính là những hòn đảo bay trong
            tưởng tượng của Quân, nơi mà mọi trẻ em đều được đi học và có đủ cơm
            no.
          </p>
          <p className="font-body text-base">
            Thông qua những nét vẽ đầy bản năng và rực rỡ này, Quân muốn gửi
            gắm thông điệp về sự lạc quan, dù hoàn cảnh có khó khăn đến đâu, nụ
            cười của ánh mặt trời vẫn luôn sưởi ấm trái tim mỗi người.
          </p>
        </div>

        {/* Donor Count */}
        <div className="mt-8 pt-6 border-t-2 border-dashed border-outline-variant flex items-center justify-between">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-fixed" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-fixed" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-tertiary-fixed" />
          </div>
          <span className="text-sm font-semibold text-on-surface-variant">
            124 người đã quyên góp giúp đỡ Quân
          </span>
        </div>
      </div>
    </div>
  );
}
