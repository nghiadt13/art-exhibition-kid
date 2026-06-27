"use client";

import React from "react";
import Link from "next/link";
import TopNavBar from "@/components/top-nav-bar";
import Footer from "@/components/footer";

const artworks = [
  {
    id: 1,
    title: "Mặt Trời Của Em",
    artist: "Bé Mai, 6 tuổi",
    description:
      "Em muốn vẽ ông mặt trời thật to để sưởi ấm cho tất cả mọi người vào mùa đông.",
    tag: "Ước mơ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdYGHIAA-jHvbrYsk3TizTZLW08NQ-qbf_vYdAM8RVhVBfFgNvp8hoHuWen5p1QIx9u02Dej1zsPFaNSjJcg1hH2w5uLzIvzNze7PD8Etkjt_68hw69YitojD8ZJcpO5puKJoO9O41lV3UoKNUB_pDQjv43PYxSTTyFfCzabC43D_CN5zyiYivq-ONOoilsooQuA0RwfowFnhyaAhBcjVZiE68mnYXt4WMTnZVGd7x2RfcEf4xF206610D6Mx6bULV5mJTxZ4FWG_8",
  },
  {
    id: 2,
    title: "Xóm Nhỏ Yên Bình",
    artist: "Minh Khôi, 8 tuổi",
    description:
      "Làng của em có nhiều cây xanh và con suối nhỏ chảy qua mỗi sáng.",
    tag: "Thiên nhiên",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIVuZeSmRErYUGh023oDKYwa0PkyctHliNgTXnok2NJPjWXoRwWSDfIp-siLcdmIt7QsrADJ39ChehOXgTp_XsAI90grazSII8HyRMvWqhPtvDx-O-DTgKTq3Dc54GAcCZS77bygB5VtZ0HGgEC3Rp4fArtnp49OBwY69ZndnBW3WTRWAv_NZCi0Bg_qs8oXns2_pYeo0UOOHluIOeh3DUERWdnzdlkVV_Aipk3260lLAFyfUgg3XL0pgilG0SVle31tYliJ6oPcnP",
  },
  {
    id: 3,
    title: "Gia Đình Hạnh Phúc",
    artist: "Bé Na, 5 tuổi",
    description:
      "Nhà mình có ba, mẹ và em. Lúc nào cũng tràn ngập tiếng cười.",
    tag: "Gia đình",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXulT-ccg8-i6IRdu1WOrZkPTu1hoCkBDzil06A817EOdehOl9f4lI6tBtBaIOicllRbkOvoMGDjetipCOTxZ16chP6w2HmJJeiPvXwfY4EQoIBTrFay6_73NnzY_5lbm5ntBMjYaYk3K1KXG5GJMv5e6vabWRNLK6-1tpq1fFgG6jeqnC7ynMO8G2PG-N3Qh9HktxELEF0lL573tM7AGK7cM0bYWG5CQpdbroIgMSp8g_aJeMf0QNJ4_5aa1AQpOov8oOutQrl45v",
  },
  {
    id: 4,
    title: "Em Làm Khoa Học",
    artist: "Khánh An, 10 tuổi",
    description:
      "Sau này lớn lên em muốn trở thành phi hành gia để khám phá vũ trụ.",
    tag: "Ước mơ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCC7OgFBvTNmFCzFM_hG4bIOfoJcS7zOhY24qyJGdfhnPx3qnPR8BDNx_kzblkRsbdtYwrUt60D_ceYMCRy0UkZsYglpbGBX0pjGUEnNssu2O7_ki1jigcYYpTTmgXIweg9NyXrS7umohv9GNCnI_rAiXsXEimX4OpMb34XOweCpb6xa5EXLhDGTq3on0O6V83ivGW_jLwYn_FBO9oBU_zcxWTxOD7U3MDyIHzmvt2mLpfirw9NIt5-7-reo7Fynfo0fZrrFgR9J-uF",
  },
  {
    id: 5,
    title: "Mái Trường Mến Yêu",
    artist: "Tùng Lâm, 7 tuổi",
    description: "Trường của em có nhiều bạn mới và cô giáo rất hiền.",
    tag: "Trường học",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSF2rEPXH12KG2EdpcPb1KQIN0WrXoR8YWfuadJILjZr2ZsfxK19iB37dcwbaqCMONmD0HxNsA-HQXO2jYSXzsAGPS3zvuWVdE1GrWgcPqzVkkyF_Xe9JNHEwQZGCdoZH-hluuaFURe8sWsQR6cyXmD2VY3nyyLQN9H2OGk-4_kcafo0OysAD9gg3S9AHVQ-mAEI9LTBSd87DBQIrMkAWrgXhtQDMNfw3Yow7x-CgQgXDowPlSjRgiBVOpaGqe5ysX0AnbkRCPsHs",
  },
  {
    id: 6,
    title: "Biển Chiều Mơ Mộng",
    artist: "Linh Chi, 9 tuổi",
    description:
      "Em muốn một lần được đi tàu ra biển ngắm hoàng hôn rực rỡ.",
    tag: "Thiên nhiên",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqcX7yrAvguldaBckyjKUO-Fb-zGZQOqQWdxOa6-Ux7Y1i7tQifDSVAezKu8LXenNXJpicEPWZ5PzMfu1tUNad3SyKim7EYplJQ4Va6uEL1OsM16xluqYgSl3xwtYWVcOPBSpBeshChmtfOJhTEbuJg2M6pxXC2O8xBG43R_vxv_dxdlnfXPRKyOpAALOZh9nFRT4DcFAj0LRlbzZTjEWYOl4F2JJS6Igklt2iONNh-b7r58kr8MxnZO1d6WS9ZiRcPdRTBADECL1F",
  },
];

export default function GalleryView() {
  return (
    <div className="min-h-screen pt-20 relative">
      <TopNavBar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-black text-primary mb-4">
            Phòng Trưng Bày Của Bé
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto italic">
            &ldquo;Nơi những ước mơ nhỏ bé được vẽ lên bằng màu sắc của hy vọng và tình thương.&rdquo;
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-surface-container-lowest/90 backdrop-blur-sm p-6 rounded-3xl shadow-sm mb-12 flex flex-wrap gap-4 items-center justify-between border border-outline-variant/30">
          <div className="flex gap-4 items-center">
            <span className="text-sm font-bold text-outline uppercase tracking-wider">
              Lọc theo:
            </span>
            <select className="bg-surface-container border-none rounded-xl px-4 py-2 text-on-surface-variant focus:ring-2 focus:ring-primary outline-none text-sm font-semibold">
              <option>Độ tuổi</option>
            </select>
            <select className="bg-surface-container border-none rounded-xl px-4 py-2 text-on-surface-variant focus:ring-2 focus:ring-primary outline-none text-sm font-semibold">
              <option>Chủ đề</option>
            </select>
          </div>
          <div className="flex bg-surface-container p-1 rounded-xl">
            <button className="p-2 bg-surface-container-lowest rounded-lg shadow-sm text-primary flex items-center">
              <span className="material-symbols-outlined text-xl">grid_view</span>
            </button>
            <button className="p-2 text-outline hover:text-on-surface-variant flex items-center">
              <span className="material-symbols-outlined text-xl">format_list_bulleted</span>
            </button>
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <Link
              href={`/product/${art.id}`}
              key={art.id}
              className="group block bg-surface-container-lowest/90 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 border border-outline-variant/20 wonky-rotation even:wonky-rotation-alt"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {art.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-container transition-colors">
                  {art.title}
                </h3>
                <p className="text-secondary text-sm font-semibold mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">face</span>{" "}
                  {art.artist}
                </p>
                <p className="text-on-surface-variant line-clamp-2 mb-6 leading-relaxed">
                  &ldquo;{art.description}&rdquo;
                </p>
                <div className="w-full flex justify-between items-center text-outline font-bold group-hover:text-primary transition-all">
                  Chi tiết
                  <span className="material-symbols-outlined transform transition-transform group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-surface-container-lowest text-primary border-2 border-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all shadow-sm button-3d">
            Xem thêm tác phẩm
          </button>
        </div>

        {/* Featured Story Banner */}
        <section className="mt-24 bg-surface-container-lowest/90 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-md border border-outline-variant/30 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] shadow-sm aspect-[4/3]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPHGbiNZCEUZ8Aj6_NUErslUIeEtDrHAgzR_SmT9Np9ffz6WLSUoN9bJaIcG_8CAhEOIsqn15gGNZohSYNgYzw4tbrTjaIaAM2xDISkHEB4yx0Rvg6aRj85MGB0TdQtGuiT01jel90ETSGRP8iAvMvsR2ktC088Z-VQtdkyKERVgiplXDzz8gjeSXgyr6Zl6-dK27Px-FY1m8YYXnb8mu3A0j3u7bksfc8KbukuDkwJ-7Zv6h4KJbYplNl9OwZtTN7ooL6lBo3PxpY"
              alt="Story"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-xs font-black text-tertiary uppercase tracking-[0.2em] block">
              Câu chuyện truyền cảm hứng
            </span>
            <h2 className="text-4xl font-black text-primary">
              Hạnh phúc từ những điều giản dị
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed italic">
              Nhờ sự hỗ trợ của cộng đồng, em Mai đã có thể tiếp tục đến trường
              và nuôi dưỡng ước mơ trở thành cô giáo. Những bức tranh của em
              không chỉ là nét vẽ, mà là lời cảm ơn chân thành nhất gửi tới
              những trái tim nhân hậu.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-sm button-3d">
                Góp sức ngay
              </button>
              <button className="bg-transparent text-primary border-2 border-primary border-dashed px-8 py-4 rounded-full font-bold hover:bg-surface-container transition-all">
                Đọc câu chuyện
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
