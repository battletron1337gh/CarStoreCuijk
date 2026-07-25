import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center px-4">
          {/* Logo */}
          <div className="mb-8">
            <span className="text-6xl font-bold">
              <span className="text-white">Car</span>
              <span className="text-[#c8102e]">Store</span>
            </span>
          </div>
          
          {/* 404 */}
          <h1 className="text-8xl font-bold text-[#c8102e] mb-4">404</h1>
          
          {/* Message */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Pagina niet gevonden
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            De pagina die je zoekt bestaat niet meer of is verplaatst. 
            Bekijk ons occasionaanbod of ga terug naar de homepage.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#c8102e] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#a00d24] transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <Link
              href="/occasions"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Occasions
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
