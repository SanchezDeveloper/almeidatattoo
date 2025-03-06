"use client"

import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import ButtonLink from "../ui/buttons-link";

export default function CTA() {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);
  return (
    <section
      className="text-white py-16 px-6 flex justify-center items-center text-center min-h-96 h-screen"
      style={{
        background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/bg-cta.JPEG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-2xl mx-auto" data-aos="fade-up">
        <h2 className="text-yellow-600 text-2xl mb-4">Sua próxima tattoo começa aqui!</h2>
        <p className="text-sm font-semibold mb-6">
          Agende um horário e transforme sua ideia em arte. Entre em contato e garanta sua sessão com um dos melhores profissionais!
        </p>
        <ButtonLink href="/contact" text="Agendar Agora"></ButtonLink>
      </div>
    </section>
  );
};


