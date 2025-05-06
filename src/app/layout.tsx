import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InstallPWA from "./components/InstallPWA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KasirBro - Aplikasi Kasir Modern",
  description: "Aplikasi kasir modern dengan fitur lengkap untuk bisnis Anda",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "KasirBro",
  },
  icons: {
    icon: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className="min-h-screen bg-base-100">
          {children}
          <InstallPWA />
        </div>
      </body>
    </html>
  );
}
