"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  ShoppingCartIcon,
  HistoryIcon,
  PackageIcon,
} from "lucide-react";

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

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="flex flex-col h-full">
          <div className="p-6">
            <h2 className="text-lg font-semibold">KasirBro</h2>
          </div>
          <nav className="flex-1 px-3">
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
        </div>
      </SheetContent>
    </Sheet>
  );
}
