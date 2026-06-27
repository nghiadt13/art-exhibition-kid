import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-headline",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Điều Em Muốn - Triển lãm nghệ thuật nhí thiện nguyện",
  description:
    "Nơi những nét vẽ hồn nhiên của trẻ em thắp sáng hy vọng và sẻ chia yêu thương thông qua nghệ thuật.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${beVietnam.variable} bg-background text-on-surface font-body relative`}
      >
        {children}
      </body>
    </html>
  );
}
