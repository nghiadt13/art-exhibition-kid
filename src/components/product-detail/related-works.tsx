const relatedWorks = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSF2rEPXH12KG2EdpcPb1KQIN0WrXoR8YWfuadJILjZr2ZsfxK19iB37dcwbaqCMONmD0HxNsA-HQXO2jYSXzsAGPS3zvuWVdE1GrWgcPqzVkkyF_Xe9JNHEwQZGCdoZH-hluuaFURe8sWsQR6cyXmD2VY3nyyLQN9H2OGk-4_kcafo0OysAD9gg3S9AHVQ-mAEI9LTBSd87DBQIrMkAWrgXhtQDMNfw3Yow7x-CgQgXDowPlSjRgiBVOpaGqe5ysX0AnbkRCPsHs",
    title: "Mái Trường Cầu Vồng",
    artist: "Bé Lan Anh, 6 tuổi",
    rotation: "wonky-rotation-alt",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqcX7yrAvguldaBckyjKUO-Fb-zGZQOqQWdxOa6-Ux7Y1i7tQifDSVAezKu8LXenNXJpicEPWZ5PzMfu1tUNad3SyKim7EYplJQ4Va6uEL1OsM16xluqYgSl3xwtYWVcOPBSpBeshChmtfOJhTEbuJg2M6pxXC2O8xBG43R_vxv_dxdlnfXPRKyOpAALOZh9nFRT4DcFAj0LRlbzZTjEWYOl4F2JJS6Igklt2iONNh-b7r58kr8MxnZO1d6WS9ZiRcPdRTBADECL1F",
    title: "Đại Dương Kỳ Diệu",
    artist: "Bé Duy Mạnh, 8 tuổi",
    rotation: "-rotate-1",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBB00KvoOgcp7jiIovYLPyNt4KNeFIR3-G650FFtq7UKwbTGsHVoJLLHvP7bQP_va_3RmNAuIDH-s_X6nIArLpLndZEQ8oTEINKYbRhEzZ_MV33qpJR4cfjT2yNl-1c591n6m6zawFsJlWro6t5kNiVPO_ooggr9vfP_TvryO2SvSJBm2VBtmiU2vs_QjmxRW3_5R64yDPckBbvLaSiMRMw9hlUAk19U3oI9sHJBDGrGWLQ1OTZHELs06L_gkEblE_gUHzvW5sf9xzg",
    title: "Khu Rừng Biết Hát",
    artist: "Bé Thảo My, 9 tuổi",
    rotation: "rotate-2",
  },
];

export default function RelatedWorks() {
  return (
    <section className="mt-[80px]">
      <div className="flex items-end justify-between mb-8">
        <div className="content-card-bg px-6 py-4 rounded-2xl shadow-sm">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">
            Khám phá thêm
          </span>
          <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-on-surface">
            Những ước mơ khác
          </h2>
        </div>
        <a
          className="content-card-bg px-6 py-4 rounded-full text-primary font-bold hover:underline flex items-center gap-1 group shadow-sm"
          href="#"
        >
          Xem tất cả
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedWorks.map((work) => (
          <div key={work.title} className="group cursor-pointer">
            <div
              className={`content-card-bg p-3 rounded-2xl shadow-sm group-hover:shadow-lg transition-all duration-300 ${work.rotation}`}
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={work.title}
                  src={work.image}
                />
              </div>
              <h4 className="font-body text-sm font-semibold text-on-surface">
                {work.title}
              </h4>
              <p className="text-xs text-on-surface-variant">{work.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
