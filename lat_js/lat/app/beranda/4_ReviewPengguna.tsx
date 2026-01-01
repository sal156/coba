export default function ReviewPengguna() {
  const reviews = [
    { nama: "Rina", teks: "Makanannya enak dan cepat sampai!" },
    { nama: "Andi", teks: "Burgernya juara banget 👌" },
    { nama: "Siti", teks: "Harga terjangkau, kualitas mantap." },
  ];

  return (
    <section className="py-14 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Review Pengguna ⭐
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-6 shadow rounded-xl border">
            <p className="italic text-gray-700 mb-3">"{r.teks}"</p>
            <p className="font-semibold text-red-500">— {r.nama}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
