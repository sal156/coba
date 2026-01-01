import Banner from "./1_Banner";
import Diskon from "./2_Diskon";
import KalkulatorCicilan from "./3_KalkulatorCicilan";
import ReviewPengguna from "./4_ReviewPengguna";

export default function Beranda() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <Diskon />
      <KalkulatorCicilan />
      <ReviewPengguna />
    </main>
  );
}
