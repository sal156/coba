export default function Diskon() {
  return (
    <section className="py-14 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Promo Diskon Hari Ini 🎉</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Diskon 20%", desc: "Untuk semua menu Burger" },
          { title: "Beli 1 Gratis 1", desc: "Khusus menu Pizza" },
          { title: "Cashback 10%", desc: "Pembelian via aplikasi" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 shadow-md rounded-xl border hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
