import { Gallery } from "./gallery";

export default function FSection() {
  const images = [
    "/images/gallery-tattoo28.jpg",
    "/images/gallery-tattoo29.jpg",
    "/images/gallery-tattoo30.jpeg",
    "/images/gallery-tattoo31.jpeg",
    "/images/gallery-tattoo32.jpg",
    "/images/gallery-tattoo33.webp",
    "/images/gallery-tattoo34.jpg",
    "/images/gallery-tattoo35.webp",
    "/images/gallery-tattoo36.jpg",
  ];

  return (
    <div className="container mx-auto p-4">
      <Gallery
        images={images}
        title="Flash Tattoo"
        text="arte expressiva, pronta para marcar momentos. Escolha um design e eternize seu estilo com personalidade."
      />
    </div>
  );
}