import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RippleButton } from "@/components/animate-ui/buttons/ripple"

import { PointerHighlight } from "@/components/ui/pointer-highlight";
export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <img src="/fondo.jpg" alt="Background" className="absolute inset-0 object-cover w-full h-full z-0" />
      <div className="relative z-10 min-h-screen">
        <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center min-h-[80vh]">
            {/* Left Column - Logo, Text and Buttons */}
            <div className="space-y-4 md:space-y-8 text-center md:text-left">
              {/* Logo Mobile */}
              <div className="md:hidden flex justify-center">
                <img src="/logoMovil.png" alt="Logo La Vidriera" className="h-60 w-auto" />
              </div>

              {/* Logo */}
              {/* <div className="space-y-4">
                <div className="inline-block">
                  <img src="/logo.png" alt="Logo Revista La Vidriera" className="h-24 md:h-32 w-auto" />
                </div>
              </div> */}

              <div className="space-y-4">
                <div className="mx-auto pt-4 text-4xl font-bold tracking-tight md:text-5xl text-white">
                  Encontra todo lo que necesitas en 
                  <PointerHighlight>
                    <span className="relative z-10">City Bell, Villa Elisa y Gonnet</span>
                  </PointerHighlight> 
                </div>
                <div className="text-base md:text-xl text-white max-w-xl mx-auto md:mx-0">
                  La Vidriera es la revista digital que conecta a la comunidad local con los mejores comercios, servicios y eventos de la zona. ¡Descubrí todo lo que City Bell, Villa Elisa y Gonnet tienen para ofrecerte!
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <RippleButton
                className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/revista">Ver Revista</Link>
              </RippleButton>

                  <RippleButton
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="/turnos-farmacia">Ver Turnos Farmacia</Link>
                  </RippleButton>

                 <RippleButton
                   className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                 >
                   <Link href="https://wa.me/5492215118756" target="_blank" rel="noopener noreferrer">
                      Contactanos
                   </Link>
                 </RippleButton>
                </div>

              </div>
            </div>
          </div>
        </div>
        <img src="/Mano2.png" alt="Mano" className="hidden md:block absolute bottom-0 right-0 z-20 w-1/4 lg:w-3/8 pointer-events-none" />
      </div>
      <div className="min-h-screen bg-gray-900 text-white relative z-20">
        <div className="container mx-auto px-4 py-8 max-w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <Link href="https://heyzine.com/flip-book/8d76b8f8e8.html"> 
                <img
                  src="/FrenteRevista.jpg"
                  alt="Portada de la Revista La Vidriera"
                  className="w-full max-w-md h-auto rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </Link>
            </div>
            {/* Text and Button */}
            <div className="text-center lg:text-left max-w-md">
              <h2 className="text-3xl font-bold mb-4">Nuestra Última Edición</h2>
              <p className="text-lg mb-6">
                Descubrí las últimas novedades, artículos y ofertas de nuestros anunciantes. ¡No te la pierdas!
              </p>
              <RippleButton
                className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/revista">Ver Revista</Link>
              </RippleButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
