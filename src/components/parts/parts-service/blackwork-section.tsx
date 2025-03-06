import { Gallery } from "./gallery";

export default function BWSection() {
  const images = [
    "/images/gallery-tattoo1.jpg",
    "/images/gallery-tattoo2.jpg",
    "/images/gallery-tattoo3.jpg",
    "/images/gallery-tattoo4.jpg",
    "/images/gallery-tattoo5.jpg",
    "/images/gallery-tattoo6.jpg",
    "/images/gallery-tattoo7.jpg",
    "/images/gallery-tattoo8.jpg",
    "/images/gallery-tattoo9.jpg",
  ];

  return (
    <div className="container mx-auto p-4">
      <Gallery
        images={images}
        title="BlackWork"
        text="Arte ousada com traços fortes e sombreamentos profundos. Cada tatuagem é única, feita para impressionar. Explore nossa galeria e veja a beleza dessa técnica"
      />
    </div>
  );
}