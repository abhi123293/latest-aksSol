import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import FloatingActions from "@/components/FloatingActions";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import RestorationProcess from "@/components/RestorationProcess";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import FreeQuoteCTA from "@/components/FreeQuoteCTA";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">

      <Navbar />

      <Hero />

      <FeatureStrip />

      <FloatingActions />
       <Services />
  <WhyChooseUs />
  <BeforeAfterShowcase />
  <RestorationProcess />
  <Portfolio />
  <Reviews />
  <Coverage />
  <FAQ />
  <ContactUs />
  <FreeQuoteCTA />
  <FeatureHighlights />
  <Footer />
    </main>
  );
}