"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card Pendapatan Hari Ini */}
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Pendapatan Hari Ini</h2>
              <p className="text-3xl font-bold">Rp 0</p>
            </div>
          </div>

          {/* Card Total Transaksi */}
          <div className="card bg-secondary text-secondary-content">
            <div className="card-body">
              <h2 className="card-title">Total Transaksi</h2>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>

          {/* Card Produk Terlaris */}
          <div className="card bg-accent text-accent-content">
            <div className="card-body">
              <h2 className="card-title">Produk Terlaris</h2>
              <p className="text-3xl font-bold">-</p>
            </div>
          </div>

          {/* Card Stok Menipis */}
          <div className="card bg-neutral text-neutral-content">
            <div className="card-body">
              <h2 className="card-title">Stok Menipis</h2>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>
        </div>

        {/* Grafik dan Tabel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Grafik Penjualan</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-center">Grafik akan ditampilkan di sini</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Transaksi Terakhir</h2>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tanggal</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={3} className="text-center">
                        Belum ada transaksi
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
