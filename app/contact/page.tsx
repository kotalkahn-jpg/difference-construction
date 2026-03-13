import ContactNavbar from "@/components/contact/ContactNavbar"
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import GetQuoteCTA from "@/components/GetQuoteCTA";
export default function ContactPage() {
  return (
    <main>

      <ContactNavbar/>

      <ContactSection />
 <GetQuoteCTA/>
      <Footer />
     

    </main>
  );
}