"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  ShoppingCartIcon,
  HistoryIcon,
  PackageIcon,
  DownloadIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import InstallPWA from "./InstallPWA";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Kasir",
    path: "/kasir",
    icon: ShoppingCartIcon,
  },
  {
    name: "Transaksi",
    path: "/transaksi",
    icon: HistoryIcon,
  },
  {
    name: "Produk",
    path: "/produk",
    icon: PackageIcon,
  },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-[160px] h-screen border-r bg-background">
      <div className="p-4">
        <h2 className="text-lg font-semibold">KasirBro</h2>
      </div>
      <nav className="flex-1 px-2">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                pathname === route.path ? "bg-accent" : "transparent"
              )}>
              <Icon className="h-4 w-4" />
              {route.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <InstallPWA>
          {({ install }) => (
            <Button
              variant="outline"
              className="w-full justify-center gap-1"
              onClick={install}>
              <DownloadIcon className="h-4 w-4" />
              Install Aplikasi
            </Button>
          )}
        </InstallPWA>
      </div>
    </div>
  );
}
