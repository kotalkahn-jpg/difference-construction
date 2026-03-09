
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HowItWorks from "@/components/HowItWorks";
import GetQuoteCTA from "@/components/GetQuoteCTA";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main>

      <Loader>
    <Header/>
    
    
      <AboutSection />

      <ServicesSection />
<HowItWorks />
<GetQuoteCTA />
      <Footer />
      </Loader>

    </main>
  )
}