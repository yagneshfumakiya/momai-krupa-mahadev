import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import About from '@/components/About';
import Services from '@/components/Services';
import KathaSaptah from '@/components/KathaSaptah';
import VastuPitruSeva from '@/components/VastuPitruSeva';
import OnlineSeva from '@/components/OnlineSeva';
import Jyotish from '@/components/Jyotish';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Sankalp from '@/components/Sankalp';
import Footer from '@/components/Footer';
import FloatingWhatsAppBar from '@/components/FloatingWhatsAppBar';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#faf8f5] font-sans antialiased text-[#18181b]">
      <Header />
      <Hero />
      <WhyUs />
      <About />
      <Services />
      <KathaSaptah />
      <VastuPitruSeva />
      <OnlineSeva />
      <Jyotish />
      <Gallery />
      <Contact />
      <Sankalp />
      <Footer />
      <FloatingWhatsAppBar />
    </main>
  );
}
