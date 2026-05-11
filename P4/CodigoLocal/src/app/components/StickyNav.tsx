const items = [
  { id: "tienda", label: "Tienda" },
  { id: "carta", label: "Carta" },
  { id: "libros", label: "Libros" },
  { id: "eventos", label: "Eventos" },
  { id: "sobre", label: "Sobre Nosotros" },
  { id: "contacto", label: "Contacto" },
];

export function StickyNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#f3bb7b] border-b border-[#e7ad94]">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-3">
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5">
          {items.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="bg-[#8d262a] text-white rounded-2xl px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#a83136] active:scale-95 transition"
                style={{ fontFamily: "'Gentium Book Plus', serif" }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
