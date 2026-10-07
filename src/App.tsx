import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroDemo from "./components/HeroDemo";
import Problem from "./components/Problem";
import Solutions from "./components/Solutions";
import PhysicalDigital from "./components/PhysicalDigital";
import CounterDisplay from "./components/CounterDisplay";
import DigitalMenu from "./components/DigitalMenu";
import RestaurantMap from "./components/RestaurantMap";
import Packages from "./components/Packages";
import Calculator from "./components/Calculator";
import Why from "./components/Why";
import HowItWorks from "./components/HowItWorks";
import Portfolio from "./components/Portfolio";
import BuildPackage from "./components/BuildPackage";
import Future from "./components/Future";
import Testimonials from "./components/Testimonials";
import Trust from "./components/Trust";
import FAQ from "./components/FAQ";
import InquiryForm, { InquiryProvider } from "./components/InquiryForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
export default function App() {
  return (
    <InquiryProvider>
      <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
        <Navbar />
        <main>
          <Hero />
          <HeroDemo />
          <Problem />
          <Solutions />
          <PhysicalDigital />
          <CounterDisplay />
          <DigitalMenu />
          <RestaurantMap />
          <Packages />
          <Calculator />
          <Why />
          <HowItWorks />
          <Portfolio />
          <BuildPackage />
          <Future />
          <Testimonials />
          <Trust />
          <FAQ />
          <InquiryForm />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </InquiryProvider>
  );
}
