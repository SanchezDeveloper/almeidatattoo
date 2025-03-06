import { Gallery } from "./gallery";

export default function CSection() {
  const images = [
    "/images/gallery-tattoo19.jpg",
    "/images/gallery-tattoo20.webp",
    "/images/gallery-tattoo21.jpg",
    "/images/gallery-tattoo22.webp",
    "/images/gallery-tattoo23.jpg",
    "/images/gallery-tattoo24.jpg",
    "/images/gallery-tattoo25.jpg",
    "/images/gallery-tattoo26.jpg",
    "/images/gallery-tattoo27.jpg",
  ];

  return (
    <div className="container mx-auto p-4">
      <Gallery
        images={images}
        title="Tatuagens Exclusivas"
        text="Detalhes bem definidos e traços marcantes que elevam cada arte a outro nível. Personalizadas para refletir estilo e autenticidade."
      />
    </div>
  );
}