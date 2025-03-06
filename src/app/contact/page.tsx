"use client"

import { Navbar } from "@/components/parts/navbar";
import WhatsAppBtn from "@/components/parts/whatsapp-btn";
import Footer from "@/components/parts/footer";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    
    <div className="flex flex-col dark:bg-black">
        <Navbar></Navbar>
        <WhatsAppBtn></WhatsAppBtn>
      
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center mt-20 lg:mt-8">
            <h1 className="text-3xl font-bold mb-4 uppercase tracking-wider text-yellow-600">
                    Feche sua tattoo
            </h1>
            <p className="max-w-2xl text-lg opacity-80">
                    A tatuagem perfeita começa com uma conversa. Tire dúvidas, fale sobre
                    seu projeto e agende um horário diretamente pelo WhatsApp ou redes
                    sociais.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                href="https://wa.me/5561983339011?text=Ol%C3%A1%2C%20Matheus%20gostei%20muito%20do%20seu%20trabalho%20e%20gostaria%20de%20saber%20mais%20sobre.%20Ah!%20Obrigado%20pelo%20cupom%20de%205%25%20nas%20tattoos%20pela%20visita%20ao%20site!"
                className="flex items-center bg-green-500 text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-600 transition"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaWhatsapp className="text-2xl mr-2" /> Chamar no WhatsApp
                </a>
                <a
                href="https://www.instagram.com/m.almeida_tattoo/"
                className="flex items-center bg-zinc-800 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-zinc-700 transition"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaInstagram className="text-2xl mr-2" /> Acompanhe nosso Instagram
                </a>
            </div>
            <div className="mt-8 text-lg text-center flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-3 text-yellow-600">Como Chegar</h2>
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-red-500 text-2xl" />
                    <a href="https://maps.app.goo.gl/tWJjQWRYBf9yGbDa9" target="_blank" className="pointer">3&ordf; Avenida, Área Especial 13, bloco h/i - Núcleo Bandeirante - Brasília/DF</a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d239.86199176226154!2d-47.96126090065303!3d-15.867532683129413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1741217856543!5m2!1spt-BR!2sbr" className="mt-3" width="100%" height="450" style={{border:0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
      
        <Footer></Footer>
    </div>
  );
}
