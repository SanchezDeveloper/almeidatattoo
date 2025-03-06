import { Navbar } from "@/components/parts/navbar";
import InfoSection from "@/components/parts/info-section";
import CTA from "@/components/parts/cta";
import WhatsAppBtn from "@/components/parts/whatsapp-btn";
import Footer from "@/components/parts/footer";
import SlideSection from "@/components/parts/slide-section";
export default function Home() {
  return (
    
    <div className="flex flex-col dark:bg-black">
      <Navbar></Navbar>
      <WhatsAppBtn></WhatsAppBtn>
      <SlideSection></SlideSection>
      <InfoSection
        id="studio"
        title="O Studio Almeida Tattoo"
        description="Localizado no coração de Brasília, no Núcleo Bandeirante, é um espaço onde arte, profissionalismo e conforto se encontram. Com um ambiente elegante e acolhedor, cada detalhe foi pensado para proporcionar uma experiência única e segura. Equipamentos de alta qualidade, higiene impecável e um atendimento atencioso garantem que cada cliente se sinta à vontade enquanto transforma suas ideias em tatuagens exclusivas. Mais do que um estúdio, é um espaço dedicado à expressão pessoal e à excelência na arte da tatuagem."
        imageSrc="/images/studio-panoramic.jpg"
        imageAlt="Matheus Almeida tatuador"
        reverseLayout={true}
        buttonText="Quero Conhecer o Studio"
        buttonLink="/contact"
        showButton={true}
      />
      <InfoSection
        id="tattoo"
        title="Quem é o Matheus Almeida?"
        description="Tatuador há mais de 7 anos, especializado no estilo Black Work, tattoos em traços finos e tattoos comerciais, criando obras detalhadas e expressivas. Sua jornada na tatuagem começou com a paixão pela arte e pela possibilidade de transformar histórias em desenhos permanentes na pele. Com um olhar apurado para sombras e contrastes, ele desenvolveu um estilo único que equilibra precisão e criatividade. Atualmente, atende no Núcleo Bandeirante, onde continua aprimorando suas técnicas e trazendo à vida tatuagens que refletem a personalidade e os desejos de cada cliente."
        imageSrc="/images/matheus-artist2.JPEG"
        imageAlt="Matheus Almeida tatuador"
        buttonText="Saiba mais sobre as Tattoos"
        buttonLink="/services"
        showButton={true}
      />
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}
