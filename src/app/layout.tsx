import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playpen_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600"],
  variable: "--font-body-custom",
  display: "swap",
});

const playpenSans = Playpen_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-headline-custom",
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
        className={`${plusJakarta.variable} ${playpenSans.variable} bg-background text-on-surface font-body relative`}
      >
        {children}
      </body>
    </html>
  );
}

