import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import FeaturedCars from '@/components/FeaturedCars';
import CarMarquee from '@/components/CarMarquee';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewMarquee from '@/components/ReviewMarquee';
import CTASection from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Store Cuijk | Garage Open tot 22:00 - Tweedehands Auto\'s',
  description: 'Car Store Cuijk - Garage open tot 22:00! Uw specialist in tweedehands auto\'s en 1ste eigenaar autos. 22:00 bereikbaar voor spoed reparatie. Altijd bereikbaar voor spoed, ook na sluitingstijd. Auto inkoop, onderhoud, reparatie. 168 reviews, 5 sterren.',
  keywords: 'tweedehands auto\'s Cuijk, 1ste eigenaar autos, garage open tot 22:00, 22:00 bereikbaar, spoed reparatie, reparatie na sluitingstijd, altijd bereikbaar voor spoed, 1e eigenaar, eerste eigenaar autos, gebruikte auto\'s, alle merken, auto inkoop, auto onderhoud, auto reparatie, airco vullen, 168 reviews, 5 sterren, Google reviews',
  openGraph: {
    title: 'Car Store Cuijk | Tweedehands Auto\'s & Garage',
    description: 'Uw specialist in tweedehands auto\'s en gebruikte auto\'s van alle merken. 168 reviews, 5 sterren. BOVAG erkend. 7 dagen open.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <FeaturedCars />
        <CarMarquee />
        <WhyChooseUs />
        <Services />
        <ReviewMarquee />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
