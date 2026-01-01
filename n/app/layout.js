import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'Restoran biasa',
  description: 'Website uji coba',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const menuItem = [
    { href: '/' }
  ]
  return (
    <html lang='id'>
      <body className='bg-gray-100 text-gray-900'>
        <header className='bg-white shadow-md'>
          <nav className='max-w-4xl mx-auto p-4 flex gap-6'>
            
          </nav>
        </header>

        <main className='max-w-4xl mx-auto p-4'>
          {children}
        </main>

        <footer className='mt-10 p-4 text-center text-sm text-gray-400'>
          @ 2025 Restoran Aamiin
        </footer>
      </body>
    </html>
  );
}
