"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonLink from "../ui/buttons-link";

interface InfoSectionProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  reverseLayout?: boolean;
  showButton?: boolean;
}

export default function InfoSection({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
  reverseLayout = false,
  showButton = true,
}: InfoSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id={id}
      className="dark:bg-black min-h-[calc(100vh-64px)] flex items-center justify-center"
    >
      <div
        className={`flex flex-col gap-5 lg:gap-10 lg:flex-row ${
          reverseLayout ? "lg:flex-row-reverse" : ""
        } lg:w-4/5 items-center`}
      >
        <img
          className="w-2/5 lg:max-w-[30%] rounded-lg"
          src={imageSrc}
          alt={imageAlt}
          data-aos={reverseLayout ? "fade-left" : "fade-right"} // Animação conforme a posição
        />

        {/* Texto com efeito fade-up */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-yellow-600 text-2xl mb-4">{title}</h2>
          <p className="font-medium mx-2 text-sm mb-5">{description}</p>
          {showButton && <ButtonLink text={buttonText} href={buttonLink} />}
        </div>
      </div>
    </section>
  );
}