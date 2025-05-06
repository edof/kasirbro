"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import {
  Dashboard,
  PointOfSale,
  Receipt,
  Inventory,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation
        value={pathname}
        onChange={(event, newValue) => {
          router.push(newValue);
        }}
        showLabels>
        <BottomNavigationAction
          label="Dashboard"
          value="/dashboard"
          icon={<Dashboard />}
        />
        <BottomNavigationAction
          label="Kasir"
          value="/kasir"
          icon={<PointOfSale />}
        />
        <BottomNavigationAction
          label="Transaksi"
          value="/transaksi"
          icon={<Receipt />}
        />
        <BottomNavigationAction
          label="Produk"
          value="/produk"
          icon={<Inventory />}
        />
      </BottomNavigation>
    </Paper>
  );
}
