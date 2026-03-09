import Navbar from "@/components/about/Navbar";
import AboutSection from "@/components/about/AboutSection";
import WhyOurServices from "@/components/about/WhyOurServices";
import GetQuoteCTA from "@/components/GetQuoteCTA";
import Footer from "@/components/Footer";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <WhyOurServices />
      <GetQuoteCTA/>
      <Footer/>
    </>
  );
}