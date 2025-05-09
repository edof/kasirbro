"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/data/products";
import { EditProductModal } from "@/app/components/EditProductModal";
import { useState } from "react";

export default function ProdukPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Calculate total stock for each product
  const productsWithTotalStock = products.map((product) => ({
    ...product,
    totalStock: product.variants.reduce(
      (sum, variant) => sum + variant.stock,
      0
    ),
  }));

  // Calculate statistics
  const totalProducts = products.length;
  const activeProducts = productsWithTotalStock.filter(
    (p) => p.totalStock > 0
  ).length;
  const lowStockProducts = productsWithTotalStock.filter(
    (p) => p.totalStock <= 5
  ).length;
  const outOfStockProducts = productsWithTotalStock.filter(
    (p) => p.totalStock === 0
  ).length;

  // Format price to Indonesian Rupiah
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedProduct: Product) => {
    // TODO: Implement save functionality
    console.log("Saving product:", updatedProduct);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Produk</h1>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full pl-9 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          />
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Tambah Produk
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Produk</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.kode_brg}
                className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{product.nama}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.kode_brg} • {product.kategori}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {formatPrice(product.harga_jual)}
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="h-auto px-3 py-1"
                    onClick={() => handleEdit(product)}>
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Statistik Produk</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Produk</span>
              <span className="font-medium">{totalProducts}</span>
            </div>
            <div className="flex justify-between">
              <span>Produk Aktif</span>
              <span className="font-medium">{activeProducts}</span>
            </div>
            <div className="flex justify-between">
              <span>Stok Menipis</span>
              <span className="font-medium text-yellow-600">
                {lowStockProducts}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Stok Habis</span>
              <span className="font-medium text-red-600">
                {outOfStockProducts}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <EditProductModal
        product={selectedProduct}
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        onSave={handleSave}
      />
    </div>
  );
}
