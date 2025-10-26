import HeroSection from '@/components/hero-section';
import LogoCloud from '@/components/logo-cloud';
import Features3 from '@/components/features-3';
import Features8 from '@/components/features-8';
import Features1 from '@/components/features-1';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import CTA from '@/components/call-to-action';
import FAQ from '@/components/faqs-3';
import Footer from '@/components/footer';

export default function Home() {
  
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <Features1 />
      <Features8 />
      <CTA />
      <Features3 />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
