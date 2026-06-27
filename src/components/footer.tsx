import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest/95 backdrop-blur-md border-t-2 border-dashed border-outline-variant py-[80px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Cột 1: Đơn vị thực hiện */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-primary text-xl font-headline">Đơn vị thực hiện</h4>
            <div className="text-on-surface-variant text-base font-body space-y-2">
              <p className="font-semibold text-tertiary">Dự án xã hội &ldquo;Điều Em Muốn&rdquo;</p>
              <p>Thực hiện bởi nhóm sinh viên</p>
              <p>Trường Đại học FPT</p>
            </div>
          </div>

          {/* Cột 2: Thông tin liên hệ */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-primary text-xl font-headline">Thông tin liên hệ</h4>
            <div className="text-on-surface-variant text-base font-body space-y-2">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-secondary">phone</span>
                <span>Hotline:</span>
                <a href="tel:0393083281" className="hover:text-primary transition-colors font-semibold">0393 083 281</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-secondary">mail</span>
                <span>Email:</span>
                <a href="mailto:dieuemmuonnnn@gmail.com" className="hover:text-primary transition-colors font-semibold">dieuemmuonnnn@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Cột 3: Kết nối với chúng tôi */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-primary text-xl font-headline">Kết nối với chúng tôi</h4>
            <div className="text-on-surface-variant text-base font-body space-y-2">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-secondary">public</span>
                <span>Fanpage:</span>
                <a href="https://www.facebook.com/profile.php?id=61561570774351" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">Điều Em Muốn</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-secondary">video_library</span>
                <span>TikTok:</span>
                <a href="https://www.tiktok.com/@iu.em.mun50" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">@iu.em.mun50</a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant text-center text-on-surface-variant text-sm">
          &copy; 2024 Điều Em Muốn - Triển lãm nghệ thuật nhí thiện nguyện
        </div>
      </div>
    </footer>
  );
}
