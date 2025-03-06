import { Gallery } from "./gallery";

export default function FLSection() {
  const images = [
    "/images/gallery-tattoo10.jpeg",
    "/images/gallery-tattoo11.webp",
    "/images/gallery-tattoo12.jpg",
    "/images/gallery-tattoo13.webp",
    "/images/gallery-tattoo14.webp",
    "/images/gallery-tattoo15.jpg",
    "/images/gallery-tattoo16.webp",
    "/images/gallery-tattoo17.webp",
    "/images/gallery-tattoo18.webp",
  ];

  return (
    <div className="container mx-auto p-4">
      <Gallery
        images={images}
        title="Fine Line Arts"
        text="Delicadeza e precisão em traços finos e elegantes. Cada desenho é minimalista, mas cheio de expressão. Descubra a sutileza e sofisticação dessa arte."
      />
    </div>
  );
}