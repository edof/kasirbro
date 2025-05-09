"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product, categories } from "@/data/products";
import { useState, useEffect } from "react";

interface EditProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (product: Product) => void;
}

export function EditProductModal({
  product,
  open,
  onOpenChange,
  onSave,
}: EditProductModalProps) {
  const [editedProduct, setEditedProduct] = useState<Product | null>(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  if (!editedProduct) return null;

  const handleSave = () => {
    onSave(editedProduct);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col w-[95%] mx-auto">
        <DialogHeader>
          <DialogTitle>Edit Produk</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="kode" className="text-right">
              Kode Barang
            </Label>
            <Input
              id="kode"
              value={editedProduct.kode_brg}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, kode_brg: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nama" className="text-right">
              Nama Barang
            </Label>
            <Input
              id="nama"
              value={editedProduct.nama}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, nama: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="harga-modal" className="text-right">
              Harga Modal
            </Label>
            <Input
              id="harga-modal"
              type="number"
              value={editedProduct.harga_modal}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  harga_modal: parseInt(e.target.value),
                })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="harga-jual" className="text-right">
              Harga Jual
            </Label>
            <Input
              id="harga-jual"
              type="number"
              value={editedProduct.harga_jual}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  harga_jual: parseInt(e.target.value),
                })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="kategori" className="text-right">
              Kategori
            </Label>
            <Select
              value={editedProduct.kategori}
              onValueChange={(value) =>
                setEditedProduct({ ...editedProduct, kategori: value })
              }>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <Label>Ukuran dan Stok</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {editedProduct.variants.map((variant, index) => (
                <div key={variant.size} className="flex gap-2">
                  <Input value={variant.size} disabled className="w-24" />
                  <Input
                    type="number"
                    value={variant.stock}
                    onChange={(e) => {
                      const newVariants = [...editedProduct.variants];
                      newVariants[index] = {
                        ...variant,
                        stock: parseInt(e.target.value),
                      };
                      setEditedProduct({
                        ...editedProduct,
                        variants: newVariants,
                      });
                    }}
                    className="w-24"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Tutup
          </Button>
          <Button onClick={handleSave}>Simpan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
