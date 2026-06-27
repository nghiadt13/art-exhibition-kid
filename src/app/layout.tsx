import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art Exhibition for Kids",
  description: "A fun and educational art exhibition platform for children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
