import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RippleButton } from "@/components/animate-ui/buttons/ripple"

import { PointerHighlight } from "@/components/ui/pointer-highlight";
export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <img src="/fondo.jpg" alt="Background" className="absolute inset-0 object-cover w-full h-full z-0" />
      <div className="relative z-10 min-h-screen">
        <div className="container pl-50 py-22 max-w-6x2">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center min-h-[80vh]">
            {/* Left Column - Logo, Text and Buttons */}
            <div className="space-y-8">
              {/* Logo *
              <div className="space-y-4">
                <div className="inline-block">
                  <img src="/logo.png" alt="Logo Revista La Vidriera" className="h-24 md:h-32 w-auto" />
                </div>
              </div>*/}

              <div className="mx-auto py-8 text-2xl font-bold tracking-tight md:text-5xl text-white">
                Encontra todo lo que necesitas en 
                <PointerHighlight>
                  <span className="relative z-10">City Bell, Villa Elisa y Gonnet</span>
                </PointerHighlight> 
              </div>

              <div className="text-lg md:text-xl text-white max-w-xl">
                La Vidriera es la revista digital que conecta a la comunidad local con los mejores comercios, servicios y eventos de la zona. ¡Descubrí todo lo que City Bell, Villa Elisa y Gonnet tienen para ofrecerte!
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
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
        <img src="/Mano2.png" alt="Mano" className="absolute bottom-0 right-0 z-20 w-3/8 pointer-events-none" />
      </div>
      <div className="min-h-screen bg-gray-900 text-white relative z-20">
        <div className="container mx-auto px-4 py-8 max-w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <img
                src="/FrenteRevista.jpg"
                alt="Portada de la Revista La Vidriera"
                className="w-full max-w-md h-auto rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
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
