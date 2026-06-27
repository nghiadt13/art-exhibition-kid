const linkColumns = [
  {
    title: "Liên kết",
    links: [
      { label: "Câu chuyện của bé", href: "#" },
      { label: "Tham gia cùng chúng tôi", href: "#" },
    ],
  },
  {
    title: "Pháp lý",
    links: [
      { label: "Chính sách bảo mật", href: "#" },
      { label: "Điều khoản sử dụng", href: "#" },
    ],
  },
];

export default function ProductFooter() {
  return (
    <footer className="bg-surface/95 backdrop-blur-md py-[80px] border-t-2 border-dashed border-outline-variant relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-4 md:px-6 max-w-[1200px] mx-auto gap-6">
        {/* Brand */}
        <div className="max-w-md">
          <h2 className="text-[32px] leading-[1.3] font-headline font-bold text-primary mb-4">
            Điều Em Muốn
          </h2>
          <p className="text-base font-body text-on-surface-variant mb-6">
            Mỗi bức tranh là một câu chuyện, mỗi sự đóng góp là một bước chân
            đưa các em đến gần hơn với ước mơ của mình.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-12">
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-on-surface mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-on-surface-variant hover:text-primary underline decoration-dashed decoration-2 underline-offset-4 transition-all"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[80px] pt-8 border-t border-outline-variant/30 text-center w-full px-4">
        <p className="text-on-surface-variant text-sm">
          &copy; 2024 Điều Em Muốn - Triển lãm nghệ thuật nhí thiện nguyện
        </p>
      </div>
    </footer>
  );
}
