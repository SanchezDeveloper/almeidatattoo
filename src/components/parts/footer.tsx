"use client"

import { useTheme } from "next-themes";

export default function Footer() {

    const { theme } = useTheme(); 

    return( 
        <footer className=" flex items-center justify-center h-20">
            <img
                className="w-11 h-11 rounded-full"
                src={theme === "dark" ? "/images/logo-menu.jpg" : "/images/logo-menu-light.jpg"}
                alt="Logo da empresa"
            />

            <div className="w-1/2">
                <p className="text-zinc-600 text-xs">© {new Date().getFullYear()} Todos os direitos reservados a Almeida Tattoo.</p>
                <p className="text-zinc-600 text-xs"> &lt;/&gt; Desenvolvido por <a href="https://www.instagram.com/sanchezdev.oficial/"   target="blank" className="text-purple-800">@sanchezdev.oficial</a></p>
                
            </div>
        </footer>
    )
}