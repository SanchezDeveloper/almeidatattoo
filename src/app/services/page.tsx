import { Navbar } from "@/components/parts/navbar";
import WhatsAppBtn from "@/components/parts/whatsapp-btn";
import Footer from "@/components/parts/footer";
import BWSection from "@/components/parts/parts-service/blackwork-section";
import FLSection from "@/components/parts/parts-service/fineline-section";
import CSection from "@/components/parts/parts-service/comercial-section";
import FSection from "@/components/parts/parts-service/flash-section";
import FAQ from "@/components/parts/parts-service/faq-section";
export default function Home() {
  return (
    
    <div className="flex flex-col dark:bg-black ">
      <Navbar></Navbar>
      <WhatsAppBtn></WhatsAppBtn>
      <p className="h-24"></p>
      <BWSection></BWSection>
      <FLSection></FLSection>
      <CSection></CSection>
      <FSection></FSection>
      <FAQ></FAQ>
      
      <Footer></Footer>
    </div>
  );
}
