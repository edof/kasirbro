"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TransaksiPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Transaksi</h1>
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Transaksi</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="today" className="flex-1">
                Hari Ini
              </TabsTrigger>
              <TabsTrigger value="week" className="flex-1">
                Minggu Ini
              </TabsTrigger>
              <TabsTrigger value="month" className="flex-1">
                Bulan Ini
              </TabsTrigger>
            </TabsList>
            <TabsContent value="today" className="mt-4 space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Transaksi #{item}</p>
                    <p className="text-sm text-muted-foreground">
                      2 items • 14:30
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rp 45.000</p>
                    <Button variant="link" className="h-auto p-0">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="week" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Memuat data transaksi minggu ini...
              </p>
            </TabsContent>
            <TabsContent value="month" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Memuat data transaksi bulan ini...
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ringkasan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Transaksi</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between">
              <span>Total Pendapatan</span>
              <span className="font-medium">Rp 1.250.000</span>
            </div>
            <div className="flex justify-between">
              <span>Rata-rata per Transaksi</span>
              <span className="font-medium">Rp 52.083</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
