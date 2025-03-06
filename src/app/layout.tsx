import type { Metadata } from "next";
import { Lora, Cinzel } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ClientLayout from "@/components/parts/client-layout"; // Novo componente que será Client

const lora = Lora({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Almeida Tattoo",
  description: "Estúdio de tatuagem especializado em artes exclusivas e personalizadas.",
  icons: {
    icon: "favicon.ico", // Caminho do favicon
  },
  openGraph: {
    title: "Almeida Tattoo - Arte na Pele",
    description: "Venha conhecer nossos trabalhos e transformar sua ideia em arte!",
    images: [
      {
        url: "/images/matheus-artist-share.jpeg",
        width: 1200,
        height: 630,
        alt: "Almeida Tattoo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lora.className} ${cinzel.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientLayout>{children}</ClientLayout> {/* Agora o estado de carregamento está aqui */}
        </ThemeProvider>
      </body>
    </html>
  );
}
