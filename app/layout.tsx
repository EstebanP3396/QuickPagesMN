import type { Metadata, Viewport } from "next";
import { inter, archivo } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickPages — Creative Web Studio",
  description:
    "QuickPages is a boutique creative web studio crafting bold, high-craft digital experiences. Not templates — perspectives.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} bg-background`}
    >
      <body className="antialiased bg-background text-primary">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
