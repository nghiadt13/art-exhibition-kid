const activities = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCC7OgFBvTNmFCzFM_hG4bIOfoJcS7zOhY24qyJGdfhnPx3qnPR8BDNx_kzblkRsbdtYwrUt60D_ceYMCRy0UkZsYglpbGBX0pjGUEnNssu2O7_ki1jigcYYpTTmgXIweg9NyXrS7umohv9GNCnI_rAiXsXEimX4OpMb34XOweCpb6xa5EXLhDGTq3on0O6V83ivGW_jLwYn_FBO9oBU_zcxWTxOD7U3MDyIHzmvt2mLpfirw9NIt5-7-reo7Fynfo0fZrrFgR9J-uF",
    badge: "Hoạt động",
    title: "Lớp vẽ cho em tại Bản Mông",
    desc: "Cung cấp bộ họa cụ và tổ chức lớp học vẽ hàng tuần cho các bé tại điểm trường vùng cao.",
    progress: 75,
    target: "15.000.000đ",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIVuZeSmRErYUGh023oDKYwa0PkyctHliNgTXnok2NJPjWXoRwWSDfIp-siLcdmIt7QsrADJ39ChehOXgTp_XsAI90grazSII8HyRMvWqhPtvDx-O-DTgKTq3Dc54GAcCZS77bygB5VtZ0HGgEC3Rp4fArtnp49OBwY69ZndnBW3WTRWAv_NZCi0Bg_qs8oXns2_pYeo0UOOHluIOeh3DUERWdnzdlkVV_Aipk3260lLAFyfUgg3XL0pgilG0SVle31tYliJ6oPcnP",
    badge: "Triển lãm",
    title: "Đấu giá tranh &ldquo;Ước mơ hồng&rdquo;",
    desc: "Chương trình đấu giá trực tuyến gây quỹ xây dựng thư viện đồ chơi cho trẻ em mồ côi.",
    progress: 40,
    target: "50.000.000đ",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXulT-ccg8-i6IRdu1WOrZkPTu1hoCkBDzil06A817EOdehOl9f4lI6tBtBaIOicllRbkOvoMGDjetipCOTxZ16chP6w2HmJJeiPvXwfY4EQoIBTrFay6_73NnzY_5lbm5ntBMjYaYk3K1KXG5GJMv5e6vabWRNLK6-1tpq1fFgG6jeqnC7ynMO8G2PG-N3Qh9HktxELEF0lL573tM7AGK7cM0bYWG5CQpdbroIgMSp8g_aJeMf0QNJ4_5aa1AQpOov8oOutQrl45v",
    badge: "Cộng đồng",
    title: "Góp sức cùng tình nguyện viên",
    desc: "Đăng ký tham gia trực tiếp vào các buổi ngoại khóa và hướng dẫn nghệ thuật cho trẻ.",
    isVolunteer: true,
  },
];

export default function ActivitiesSection() {
  return (
    <section
      className="py-[80px] overflow-hidden bg-white/40 backdrop-blur-[2px]"
      id="gallery"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-primary">
              Những chương trình đang cần bạn
            </h2>
            <p className="text-on-surface-variant mt-2">
              Cùng cộng đồng lan tỏa yêu thương
            </p>
          </div>
          <a
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline"
            href="#"
          >
            Xem tất cả hoạt động
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((item) => (
            <div
              key={item.title}
              className="group bg-surface-container-lowest/90 backdrop-blur-md rounded-3xl p-4 shadow-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl h-48 mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={item.title}
                  src={item.image}
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.badge}
                </div>
              </div>
              <h3 className="font-headline text-xl text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-base mb-6 line-clamp-2">
                {item.desc}
              </p>

              {item.isVolunteer ? (
                <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold hover:bg-secondary-fixed transition-colors">
                  Đăng ký ngay
                </button>
              ) : (
                <>
                  <div className="bg-surface-container rounded-full h-3 mb-4 overflow-hidden">
                    <div
                      className="wax-progress-bg h-full rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm font-bold text-primary">
                    <span>Đã đạt: {item.progress}%</span>
                    <span>Cần: {item.target}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
