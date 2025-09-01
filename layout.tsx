import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AvalCloud — Build Supply Chain Apps Fast",
  description: "Royal-grade cloud platform for founders building consumer distribution & supply chain systems on AWS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#0B0219] text-white">{children}</body>
    </html>
  );
}