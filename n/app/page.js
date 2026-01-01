import styles from "./page.module.css";

export const revalidate = false; // PURE SSG

export default function Home() {
  const menu = [
    { img: "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/chicken-&-other-poultry-dishes/ayam-madu/main-header.jpg", title: "Ayam Bakar Madu" },
    { img: "/menu2.jpg", title: "Nasi Goreng Spesial" },
    { img: "/menu3.jpg", title: "Sate Daging Premium" },
  ];

  const reviews = [
    { name: "Andi", review: "Makanannya enak banget!", rating: 5 },
    { name: "Siti", review: "Pelayanan ramah dan cepat.", rating: 4 },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Background slider */}
      <div className={styles.sliderWrapper}>
        <img src="/bg1.jpg" className={`${styles.slideImage} ${styles.fade1}`} />
        <img src="/bg2.jpg" className={`${styles.slideImage} ${styles.fade2}`} />
        <img src="/bg3.jpg" className={`${styles.slideImage} ${styles.fade3}`} />
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Selamat Datang di Restoran Lezat!</h1>
        <p className="mb-10">Kami menyajikan makanan terbaik untuk Anda.</p>

        {/* Produk Cards */}
        <h2 className="text-2xl font-semibold mb-4">Menu Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {menu.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={item.img} className="w-full h-40 object-cover" />
              <div className="p-4 font-semibold">{item.title}</div>
            </div>
          ))}
        </div>

        {/* Map */}
        <h2 className="text-2xl font-semibold mb-4">Lokasi Kami</h2>
        <div className="w-full h-72 rounded-lg overflow-hidden mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>

        {/* Review */}
        <h2 className="text-2xl font-semibold mb-4">Review Pelanggan</h2>
        <div className="space-y-4 mb-12">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-4 border rounded-lg shadow-sm bg-white">
              <div className="font-bold">{r.name}</div>
              <div className="text-yellow-500">{"⭐".repeat(r.rating)}</div>
              <p>{r.review}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Restoran Lezat. All rights reserved.</p>
      </footer>
    </div>
  );
}
