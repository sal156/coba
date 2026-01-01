"use client";
import { useState } from "react";

export default function KalkulatorCicilan() {
  const [harga, setHarga] = useState(0);
  const [bulan, setBulan] = useState(1);

  const hasil = bulan > 0 ? (harga / bulan).toFixed(0) : 0;

  return (
    <section className="py-14 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Kalkulator Cicilan 💳
      </h2>

      <div className="bg-white p-8 rounded-xl shadow border">
        <label className="block mb-4">
          <span className="font-semibold">Harga total:</span>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(Number(e.target.value))}
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Masukkan harga…"
          />
        </label>

        <label className="block mb-6">
          <span className="font-semibold">Durasi (bulan):</span>
          <input
            type="number"
            value={bulan}
            onChange={(e) => setBulan(Number(e.target.value))}
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Misal: 3 atau 6"
            min={1}
          />
        </label>

        <p className="text-xl font-semibold text-center">
          Cicilan per bulan:{" "}
          <span className="text-red-600">Rp {hasil}</span>
        </p>
      </div>
    </section>
  );
}
