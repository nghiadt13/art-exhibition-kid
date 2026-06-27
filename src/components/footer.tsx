import Link from "next/link";

const quickLinks = [
  { label: "Về dự án", href: "/#about" },
  { label: "Phòng tranh", href: "/gallery" },
  { label: "Các họa sĩ nhí", href: "/artists" },
  { label: "Góp sức", href: "/#volunteer" },
];

const infoLinks = [
  { label: "Chính sách bảo mật", href: "#" },
  { label: "Điều khoản sử dụng", href: "#" },
  { label: "Câu chuyện của bé", href: "#" },
];

const socialLinks = [
  { icon: "face_nod", href: "#" },
  { icon: "camera", href: "#" },
  { icon: "mail", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest/95 backdrop-blur-md border-t-2 border-dashed border-outline-variant py-[80px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              className="text-headline-lg font-headline text-primary mb-4 block text-3xl font-bold"
              href="/"
            >
              Điều Em Muốn
            </Link>
            <p className="text-on-surface-variant text-base">
              Triển lãm nghệ thuật nhí thiện nguyện lớn nhất Việt Nam. Kết nối
              trái tim qua hội họa.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-tertiary">Liên kết nhanh</h4>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  className="text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out underline decoration-dashed decoration-2 underline-offset-4"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-tertiary">Thông tin</h4>
              {infoLinks.map((link) => (
                <Link
                  key={link.label}
                  className="text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out underline decoration-dashed decoration-2 underline-offset-4"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-tertiary">Theo dõi chúng tôi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  className="w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  href={social.href}
                >
                  <span className="material-symbols-outlined">
                    {social.icon}
                  </span>
                </a>
              ))}
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
