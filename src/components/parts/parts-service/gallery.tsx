"use client";

import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"; // Importando os componentes do Carousel do Shadcn
import Link from "next/link";

type GalleryProps = {
  images: string[]; // Lista de URLs das imagens
  title: string;    // Título da galeria
  text: string;     // Texto da galeria
};

export const Gallery = ({ images, title, text }: GalleryProps) => {
  const [modalOpen, setModalOpen] = useState(false); // Definindo o estado para o modal
  const [currentImage, setCurrentImage] = useState<string | null>(null); // Para manter a imagem atual do modal

  // Função para abrir o modal com a imagem
  const openModal = (image: string) => {
    setCurrentImage(image);  // Atualiza a imagem atual
    setModalOpen(true);      // Abre o modal
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);  // Fecha o modal
    setCurrentImage(null); // Limpa a imagem
  };

  return (
    <div className="text-center lg:mt-9 lg:max-w-[50vw] mx-auto">
      {/* Título e texto acima da galeria */}
      <h2 className="text-yellow-600 text-3xl font-bold text-center my-4">{title}</h2>
      <p className="text-center mb-4 ">{text}</p>
      <Link href="/contact" target="blank" className="text-center p-3 rounded-md bg-black text-yellow-600 dark:bg-white">Solicitar Orçamento</Link>

      {/* Carousel para as imagens */}
      <Carousel className="relative flex items-center min-h-56 mt-8">
        <CarouselContent className=" w-1/2  sm:w-1/3 md:w-1/4 h-1/3 flex gap-4">
          {images.map((img, index) => (
            <CarouselItem key={index} className="w-32 flex-shrink-0 cursor-pointer">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                onClick={() => openModal(img)} // Ao clicar, abre o modal com a imagem
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          {"<"}
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          {">"}
        </CarouselNext>
      </Carousel>

      {/* Modal para exibir imagem expandida */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal} // Fecha o modal ao clicar fora da imagem
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={currentImage || ""}
              alt="Expanded view"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
