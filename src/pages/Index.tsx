import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Solution from "@/components/Solution";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Solution />
      <Demo />
      <Benefits />
      <AboutUs />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
      <ScrollToTop />

    </div>
  );
};

export default Index;
