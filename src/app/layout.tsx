import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideNav } from "./components/SideNav";
import { MobileNav } from "./components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KasirBro - Aplikasi Kasir Modern",
  description: "Aplikasi kasir modern untuk bisnis Anda",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden">
          <SideNav />
          <div className="flex-1 overflow-auto">
            <div className="md:hidden h-14 border-b flex items-center px-4">
              <MobileNav />
            </div>
            <main className="p-4 md:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
