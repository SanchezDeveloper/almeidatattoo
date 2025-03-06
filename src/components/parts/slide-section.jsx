"use client"

import { Scrollbar, Navigation, Pagination, A11y, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonLink from "../ui/buttons-link";

const slides = [
    {
        title: "Almeida Tattoo",
        subtitle: '"Traço preto, arte marcante."',
        image: "/images/bg-first-section.jpg",
        hrefButton: "#studio",
        textButton: "Saiba Mais"
    },
    {
        title: "Artes Exclusivas",
        subtitle: '"Tatuagens sob medida para clientes exigentes."',
        image: "/images/bg-matheus-artist.jpg",
        hrefButton: "/services",
        textButton: "Saiba mais"
    },
    {
        title: "Blackwork Intenso",
        subtitle: '"Sombras e contrastes que marcam presença."',
        image: "/images/bg-slider-blackwork.jpg",
        hrefButton: "/services",
        textButton: "Descubra"
    },
    {
        title: "Fine Line Art",
        subtitle: '"Traços delicados, significados profundos."',
        image: "/images/bg-slider-fineline.webp",
        hrefButton: "/services",
        textButton: "Veja mais"
    },
    {
        title: "Flash Tattoo",
        subtitle: '"Arte pronta para levar na pele."',
        image: "/images/bg-slider-flashtattoo.jpg",
        hrefButton: "/services",
        textButton: "Escolha a sua"
    },
    {
        title: "Galeria de Artes",
        subtitle: '"Inspirações para sua próxima tatuagem."',
        image: "/images/bg-slider-gallery.png",
        hrefButton: "/services",
        textButton: "Explore"
    }
    
]

export default function SlideSection() {
    return (
        <section className="w-full h-screen">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                autoplay={{ delay: 5000, disableOnInteraction: false}}
                loop
                slidesPerview={1}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="flex items-center justify-center relative w-full h-screen bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})`}}
                        >
                            <div className="swiper-button-prev !opacity-0 hover:!opacity-100 transition-opacity"></div>
                            <div className="swiper-button-next !opacity-0 hover:!opacity-100 transition-opacity"></div>
                            {/* Overlay para efeito de escurecimento */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white dark:from-black dark:via-black to-transparent opacity-50 dark:opacity-85"></div>
            
                            {/*Contetúdo centralizado*/}
                            <div className="lg:4/5 mx-auto relative z-20 flex justify-center items-center h-full px-10 flex-col text-center">
                                <h1 className="font-bold max-w-lg text-gold-gradient text-6xl">
                                    {slide.title}
                                </h1>
                                <h2 className="font-semibold">
                                    {slide.subtitle}
                                </h2>
                                <ButtonLink href={slide.hrefButton} text={slide.textButton}></ButtonLink>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>      
    );
}