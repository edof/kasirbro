"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Plus } from "lucide-react";

export default function KasirPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Kasir</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {/* Left side - Product selection */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Pilih Produk</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">
                  Semua
                </TabsTrigger>
                <TabsTrigger value="food" className="flex-1">
                  Makanan
                </TabsTrigger>
                <TabsTrigger value="drink" className="flex-1">
                  Minuman
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <Button
                      key={item}
                      variant="outline"
                      className="h-24 flex flex-col items-center justify-center gap-2">
                      <span className="text-sm">Produk {item}</span>
                      <span className="text-xs text-muted-foreground">
                        Rp 15.000
                      </span>
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center">
                    <Plus className="h-6 w-6" />
                    <span className="text-xs">Tambah Produk</span>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="food">
                <p className="text-sm text-muted-foreground">
                  Tidak ada produk makanan.
                </p>
              </TabsContent>
              <TabsContent value="drink">
                <p className="text-sm text-muted-foreground">
                  Tidak ada produk minuman.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Right side - Cart */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Keranjang
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground text-center">
                  Belum ada produk di keranjang
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between">
                  <span>PPN (11%)</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>Rp 0</span>
                </div>
              </div>
              <Button className="w-full">Proses Pembayaran</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
