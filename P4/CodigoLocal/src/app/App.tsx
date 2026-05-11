import { useState } from "react";
import imgLogo from "../imports/PaginaPrincipal/52cdb7a43a9c003884db5727d0235657ebdf763f.png";
import imgFrame from "../imports/PaginaPrincipal/1b874155ffdb9a428433f7ee7f6389c08a63dbd9.png";
import { StickyNav } from "./components/StickyNav";
import { Tienda, Carta, Libros, Eventos, SobreNosotros, Contacto } from "./components/Sections";
import { TiendaLibros } from "./components/TiendaLibros";

export default function App() {
  const [route, setRoute] = useState<"home" | "tienda-libros">("home");

  if (route === "tienda-libros") {
    return <TiendaLibros onHome={() => setRoute("home")} />;
  }

  return (
    <div
      className="min-h-screen bg-[#ffdac1] text-black"
      style={{ fontFamily: "'Gentium Book Plus', serif" }}
    >
      <header className="relative w-full overflow-hidden">
        <div className="relative bg-[#8d262a]">
          <img
            src={imgFrame}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
          />
          <div className="relative flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16">
            <h1
              className="text-white text-5xl sm:text-7xl md:text-8xl"
              style={{
                fontFamily: "'Mirza', serif",
                textShadow: "0 4px 4px rgba(0,0,0,0.38)",
              }}
            >
              La Qarmita
            </h1>
            <img
              src={imgLogo}
              alt="La Qarmita"
              className="mt-6 sm:mt-8 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded"
            />
          </div>
        </div>
      </header>

      <StickyNav />

      <main>
        <Tienda />
        <Carta />
        <Libros onOpenTienda={() => setRoute("tienda-libros")} />
        <Eventos />
        <SobreNosotros />
        <Contacto />
      </main>

      <footer className="bg-[#e7ad94] py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-around gap-4 text-center">
          <a href="#" className="underline text-2xl" style={{ fontFamily: "'Mirza', serif" }}>Aviso legal</a>
          <a href="#" className="underline text-2xl" style={{ fontFamily: "'Mirza', serif" }}>Política de Privacidad</a>
          <a href="#" className="underline text-2xl" style={{ fontFamily: "'Mirza', serif" }}>Términos y condiciones</a>
        </div>
      </footer>
    </div>
  );
}
