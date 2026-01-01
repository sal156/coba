export default function Banner() {
  return(
    <section className="
    w-full 
  text-white 
    py-24
    text-center 
    bg-gradient-to-r  from-red-600/80  to-orange-500/80  
    bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80')]
    bg-cover  bg-center
    relative
    ">

       {/* Lapisan gelap tipis agar teks lebih jelas */}
       <div className="absolute  inset-0  bg-black/40"></div>

       {/* Konten Banner */}
       <div className="relative  z-10  animate-fadeIn"></div>
       {/* Judul */}
       <h1 className="text-4xl  md:text-6xl  font-extrabold  mb-4  drop-shadow-sm"></h1>
    </section>
  );
}