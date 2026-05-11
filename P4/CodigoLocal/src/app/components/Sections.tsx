import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import imgImagen5 from "../../imports/PaginaPrincipal/435fc42a5066b48fd2d021d7cdb675a174ae43f9.png";
import imgImagen6 from "../../imports/PaginaPrincipal/d0bd77f87f8d7fb3239b272ca0dc2cc56da6b8dc.png";
import imgImagen7 from "../../imports/PaginaPrincipal/1df1589bed93b692f215b119e7656cda99d6c181.png";
import imgImagen8 from "../../imports/PaginaPrincipal/1d4fd26cf5f746a2059f56a448ade9b9675e2639.png";
import imgImagen1 from "../../imports/PaginaPrincipal/b9c0041f25f0549838ec76126ee0067c1975e103.png";
import imgImagen2 from "../../imports/PaginaPrincipal/493eef80ccfa77236209c1ec8eed9b5e4c25e3fb.png";
import imgImagen17 from "../../imports/PaginaPrincipal/aa935881478ed413a62eabe9f78888c053fee4b4.png";
import imgImage5 from "../../imports/PaginaPrincipal/0a2bf19363ccaa1ee508102b584cb631f44eb67a.png";
import imgImagen22 from "../../imports/PaginaPrincipal/f9c7412749df159ed62b390b235467f59db0064f.png";
import imgImage8 from "../../imports/PaginaPrincipal/d227b085410ec2c9b1d67f627d7e8957b3086c17.png";
import imgLogo from "../../imports/PaginaPrincipal/52cdb7a43a9c003884db5727d0235657ebdf763f.png";

export function SectionTitle({ children, size = "lg" }: { children: React.ReactNode; size?: "lg" | "sm" }) {
  return (
    <div className="bg-[#8d262a] w-full py-3 my-6 -mx-4 sm:mx-0">
      <h2
        className={`text-white text-center ${size === "lg" ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}
        style={{ fontFamily: "'Mirza', serif" }}
      >
        {children}
      </h2>
    </div>
  );
}

type Kind = "cafe" | "dulce" | "salado" | "libro";

type Item = {
  name: string;
  price?: string;
  subtitle?: string;
  img?: string;
  kind?: Kind;
  description?: string;
  allergens?: string[];
  options?: { label: string; extra?: string }[];
  author?: string;
  pages?: number;
  year?: number;
  synopsis?: string;
};

function ProductCard({ item, onClick }: { item: Item; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#f3bb7b] rounded-2xl sm:rounded-3xl w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex-shrink-0 flex flex-col items-center justify-between text-center text-[#8d262a] p-2 sm:p-3 text-xs sm:text-sm md:text-base hover:bg-[#e7ad94] hover:scale-105 transition cursor-pointer"
    >
      <p className="font-bold leading-tight" style={{ fontFamily: "'Gentium Book Plus', serif" }}>{item.name}</p>
      {item.img ? (
        <img src={item.img} alt="" className="w-12 h-10 sm:w-16 sm:h-14 md:w-20 md:h-16 object-contain my-1" />
      ) : (
        <div className="w-12 h-10 sm:w-16 sm:h-14 md:w-20 md:h-16 my-1" />
      )}
      <div className="leading-tight">
        {item.price && <p>{item.price} {item.subtitle && <span className="text-[10px] sm:text-xs">– {item.subtitle}</span>}</p>}
      </div>
    </button>
  );
}

function ProductModal({ item }: { item: Item }) {
  const isLibro = item.kind === "libro";
  return (
    <div className="p-6">
      <h3 className="text-3xl text-[#8d262a] mb-1" style={{ fontFamily: "'Mirza', serif" }}>{item.name}</h3>
      {isLibro && item.author && (
        <p className="italic text-[#8d262a]/80 mb-3">{item.author}{item.year ? ` · ${item.year}` : ""}{item.pages ? ` · ${item.pages} páginas` : ""}</p>
      )}
      {item.img && (
        <img src={item.img} alt="" className="w-full max-h-56 object-contain my-3 bg-[#fbd3a4] rounded-lg p-3" />
      )}
      {item.price && (
        <p className="bg-[#8d262a] text-white inline-block rounded-md px-3 py-1 mb-3">{item.price}</p>
      )}
      {item.description && <p className="leading-relaxed mb-3">{item.description}</p>}
      {isLibro && item.synopsis && (
        <>
          <h4 className="text-xl text-[#8d262a] mb-1" style={{ fontFamily: "'Mirza', serif" }}>Sinopsis</h4>
          <p className="text-justify leading-relaxed mb-3">{item.synopsis}</p>
        </>
      )}
      {item.options && item.options.length > 0 && (
        <>
          <h4 className="text-xl text-[#8d262a] mb-1" style={{ fontFamily: "'Mirza', serif" }}>Opciones</h4>
          <ul className="space-y-1 mb-3">
            {item.options.map((o, i) => (
              <li key={i} className="flex justify-between border-b border-[#e7ad94]/60 py-1">
                <span>{o.label}</span>
                {o.extra && <span className="text-[#8d262a]">{o.extra}</span>}
              </li>
            ))}
          </ul>
        </>
      )}
      {item.allergens && item.allergens.length > 0 && (
        <>
          <h4 className="text-xl text-[#8d262a] mb-1" style={{ fontFamily: "'Mirza', serif" }}>Alérgenos</h4>
          <div className="flex flex-wrap gap-2">
            {item.allergens.map((a) => (
              <span key={a} className="bg-[#f3bb7b] text-[#8d262a] rounded-full px-3 py-1 text-sm">{a}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function useVisibleCount() {
  const get = () => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth < 480) return 2;
    if (window.innerWidth < 768) return 3;
    if (window.innerWidth < 1024) return 4;
    return 5;
  };
  const [count, setCount] = useState(get);
  useEffect(() => {
    const onResize = () => setCount(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return count;
}

function Carousel({ items }: { items: Item[] }) {
  const [start, setStart] = useState(0);
  const [active, setActive] = useState<Item | null>(null);
  const visible = useVisibleCount();
  const max = Math.max(items.length - visible, 0);
  useEffect(() => { setStart((s) => Math.min(s, max)); }, [max]);
  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(max, s + 1));
  const slice = items.slice(start, start + visible);

  return (
    <div className="bg-[#ffdac1] py-4 px-2">
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <button
          onClick={prev}
          disabled={start === 0}
          aria-label="Anterior"
          className="bg-[#8d262a] text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center hover:bg-[#a83136] disabled:opacity-40 disabled:cursor-not-allowed text-2xl"
        >‹</button>
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-4 sm:gap-6 min-w-max px-2 justify-center">
            {slice.map((item, i) => (
              <ProductCard key={start + i} item={item} onClick={() => setActive(item)} />
            ))}
          </div>
        </div>
        <button
          onClick={next}
          disabled={start >= max}
          aria-label="Siguiente"
          className="bg-[#8d262a] text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center hover:bg-[#a83136] disabled:opacity-40 disabled:cursor-not-allowed text-2xl"
        >›</button>
      </div>
      {max > 0 && (
        <div className="flex justify-center gap-2 mt-3">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Ir a la página ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${i === start ? "bg-[#8d262a]" : "bg-[#b3b3b3] hover:bg-[#8d262a]/50"}`}
            />
          ))}
        </div>
      )}
      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && <ProductModal item={active} />}
      </Modal>
    </div>
  );
}

const cafeOptions = [
  { label: "Versión sin lactosa" },
  { label: "Bebida vegetal (avena, soja, almendra)", extra: "+0,30€" },
  { label: "Tamaño XL", extra: "+0,80€" },
  { label: "Doble shot de café", extra: "+0,50€" },
  { label: "Sirope (caramelo, vainilla, avellana)", extra: "+0,40€" },
];

const cafes: Item[] = [
  {
    name: "Capuccino XL", price: "3,80€", subtitle: "(alérgenos)", img: imgImagen7, kind: "cafe",
    description: "Cremoso capuccino en formato grande, con una capa de espuma generosa y cacao espolvoreado por encima.",
    options: cafeOptions, allergens: ["Lactosa"],
  },
  {
    name: "Espresso", price: "1,80€", subtitle: "(alérgenos)", kind: "cafe",
    description: "Café espresso clásico, intenso y aromático, servido en taza pequeña.",
    options: cafeOptions, allergens: [],
  },
  {
    name: "Latte vainilla", price: "3,20€", subtitle: "(alérgenos)", kind: "cafe",
    description: "Café con leche vaporizada y un toque de sirope de vainilla.",
    options: cafeOptions, allergens: ["Lactosa"],
  },
  {
    name: "Café con leche", price: "2,20€", subtitle: "(alérgenos)", kind: "cafe",
    description: "El clásico de toda la vida, café espresso con leche caliente al gusto.",
    options: cafeOptions, allergens: ["Lactosa"],
  },
  {
    name: "Cortado", price: "1,90€", subtitle: "(alérgenos)", kind: "cafe",
    description: "Espresso cortado con un toque de leche caliente.",
    options: cafeOptions, allergens: ["Lactosa"],
  },
  {
    name: "Mocaccino", price: "3,50€", subtitle: "(alérgenos)", kind: "cafe",
    description: "Mezcla de espresso, leche vaporizada y chocolate, con nata por encima.",
    options: cafeOptions, allergens: ["Lactosa"],
  },
  {
    name: "Té chai latte", price: "3,00€", subtitle: "(alérgenos)", kind: "cafe",
    description: "Té chai especiado con leche vaporizada y un toque de canela.",
    options: cafeOptions, allergens: ["Lactosa"],
  },
  {
    name: "Café Mola XL", price: "4,20€", subtitle: "(alérgenos)", img: imgImagen2, kind: "cafe",
    description: "Nuestra creación estrella: café especial de la casa con un toque secreto.",
    options: cafeOptions, allergens: ["Lactosa"],
  },
];

const dulces: Item[] = [
  { name: "Tarta 3 leches", price: "5,50€", subtitle: "(alérgenos)", img: imgImagen6, kind: "dulce",
    description: "Bizcocho esponjoso bañado en tres tipos de leche, coronado con merengue.",
    allergens: ["Gluten", "Lactosa", "Huevo"] },
  { name: "Brownie casero", price: "4,00€", subtitle: "(alérgenos)", kind: "dulce",
    description: "Brownie de chocolate negro con nueces, hecho cada mañana en nuestra cocina.",
    allergens: ["Gluten", "Lactosa", "Huevo", "Frutos secos"] },
  { name: "Cheesecake", price: "4,80€", subtitle: "(alérgenos)", kind: "dulce",
    description: "Tarta de queso al horno con base de galleta y mermelada de frutos rojos.",
    allergens: ["Gluten", "Lactosa", "Huevo"] },
  { name: "Croissant", price: "2,50€", subtitle: "(alérgenos)", kind: "dulce",
    description: "Croissant de mantequilla recién horneado.",
    allergens: ["Gluten", "Lactosa", "Huevo"] },
  { name: "Tarta zanahoria", price: "5,00€", subtitle: "(alérgenos)", kind: "dulce",
    description: "Bizcocho de zanahoria con frosting de queso crema.",
    allergens: ["Gluten", "Lactosa", "Huevo", "Frutos secos"] },
  { name: "Galletas avena", price: "1,80€", subtitle: "(alérgenos)", kind: "dulce",
    description: "Galletas crujientes de avena con pasas y un toque de canela.",
    allergens: ["Gluten", "Lactosa"] },
  { name: "Muffin chocolate", price: "3,20€", subtitle: "(alérgenos)", kind: "dulce",
    description: "Muffin esponjoso con pepitas de chocolate negro.",
    allergens: ["Gluten", "Lactosa", "Huevo"] },
];

const salados: Item[] = [
  { name: "Cachapa clásica", price: "9,90€", subtitle: "(alérgenos)", img: imgImagen8, kind: "salado",
    description: "Tortita de maíz tierno rellena de queso de mano, especialidad venezolana.",
    allergens: ["Lactosa"] },
  { name: "Tostada aguacate", price: "5,50€", subtitle: "(alérgenos)", kind: "salado",
    description: "Pan de masa madre con aguacate, tomate y semillas.",
    allergens: ["Gluten", "Sésamo"] },
  { name: "Sandwich vegetal", price: "6,20€", subtitle: "(alérgenos)", kind: "salado",
    description: "Pan integral con lechuga, tomate, queso, huevo y mayonesa.",
    allergens: ["Gluten", "Lactosa", "Huevo"] },
  { name: "Quiche lorraine", price: "7,00€", subtitle: "(alérgenos)", kind: "salado",
    description: "Tarta salada de bacon, queso y nata sobre masa quebrada.",
    allergens: ["Gluten", "Lactosa", "Huevo"] },
  { name: "Empanada gallega", price: "4,50€", subtitle: "(alérgenos)", kind: "salado",
    description: "Empanada tradicional rellena de atún y pimientos.",
    allergens: ["Gluten", "Pescado", "Huevo"] },
  { name: "Bagel salmón", price: "8,50€", subtitle: "(alérgenos)", kind: "salado",
    description: "Bagel con queso crema, salmón ahumado, alcaparras y cebolla roja.",
    allergens: ["Gluten", "Lactosa", "Pescado"] },
  { name: "Ensalada César", price: "9,00€", subtitle: "(alérgenos)", kind: "salado",
    description: "Lechuga romana, pollo a la plancha, picatostes, parmesano y salsa César.",
    allergens: ["Gluten", "Lactosa", "Huevo", "Pescado"] },
];

export function Carta() {
  return (
    <section id="carta" className="scroll-mt-24">
      <SectionTitle>Carta</SectionTitle>
      <SectionTitle size="sm">Cafés</SectionTitle>
      <Carousel items={cafes} />
      <SectionTitle size="sm">Dulces</SectionTitle>
      <Carousel items={dulces} />
      <SectionTitle size="sm">Salados</SectionTitle>
      <Carousel items={salados} />
    </section>
  );
}

const libros: Item[] = [
  {
    name: "¿Dónde está el límite?", price: "3,00€", img: imgImagen5, kind: "libro",
    author: "J. Afram", year: 2021, pages: 184,
    synopsis: "Una reflexión íntima sobre los límites personales, sociales y creativos. A través de viñetas y relatos breves, el autor invita al lector a cuestionar dónde termina lo posible y empieza lo imaginado.",
  },
  {
    name: "CAIRO", price: "12,00€", img: imgImagen1, kind: "libro",
    author: "G. Mortimer", year: 2018, pages: 412,
    synopsis: "Novela de espionaje ambientada en el Cairo de los años 50, donde un periodista británico se ve envuelto en una trama de tráfico de antigüedades y secretos coloniales.",
  },
  {
    name: "El silencio del mar", price: "9,50€", kind: "libro",
    author: "V. Vercors", year: 1942, pages: 96,
    synopsis: "Un oficial alemán es alojado en la casa de un anciano francés y su sobrina durante la ocupación. Pequeña obra maestra sobre la dignidad y la resistencia silenciosa.",
  },
  {
    name: "Cuentos de la Alhambra", price: "14,00€", kind: "libro",
    author: "W. Irving", year: 1832, pages: 350,
    synopsis: "Leyendas, paisajes y personajes que el escritor estadounidense recogió durante su estancia en la Alhambra, una visión romántica de la Granada del siglo XIX.",
  },
  {
    name: "Niebla", price: "11,00€", kind: "libro",
    author: "M. de Unamuno", year: 1914, pages: 256,
    synopsis: "Augusto Pérez vive en una niebla existencial hasta que se enamora. Una nivola que rompe los moldes y desafía la frontera entre autor y personaje.",
  },
  {
    name: "La metamorfosis", price: "8,50€", kind: "libro",
    author: "F. Kafka", year: 1915, pages: 128,
    synopsis: "Gregor Samsa despierta convertido en un monstruoso insecto. Alegoría inolvidable sobre la alienación, la familia y la identidad.",
  },
  {
    name: "El extranjero", price: "10,00€", kind: "libro",
    author: "A. Camus", year: 1942, pages: 168,
    synopsis: "Meursault, indiferente al mundo, comete un crimen bajo el sol de Argel. Novela fundamental del existencialismo francés.",
  },
  {
    name: "Rayuela", price: "15,00€", kind: "libro",
    author: "J. Cortázar", year: 1963, pages: 736,
    synopsis: "París y Buenos Aires son los dos polos de esta novela revolucionaria que invita al lector a recorrer sus capítulos en el orden que prefiera.",
  },
];

export function Libros({ onOpenTienda }: { onOpenTienda?: () => void }) {
  return (
    <section id="libros" className="scroll-mt-24">
      <SectionTitle>Libros</SectionTitle>
      <Carousel items={libros} />
      <div className="flex justify-center my-6">
        <button
          onClick={onOpenTienda}
          className="bg-[#f3bb7b] text-[#8d262a] rounded-xl px-8 py-3 font-bold text-xl hover:bg-[#e7ad94] active:scale-95 transition"
          style={{ fontFamily: "'Gentium Book Plus', serif" }}
        >
          🛒 Abrir tienda
        </button>
      </div>
    </section>
  );
}

type EventInfo = { title: string; time: string; description: string; price?: string; capacity?: string };

const events: Record<number, EventInfo> = {
  1: {
    title: "“Llena pues de palabras”",
    time: "19:00 - 21:30",
    description: "Recital poético colectivo abierto al público. Trae tus poemas favoritos o ven simplemente a escuchar. Un espacio íntimo donde la palabra es protagonista.",
    price: "Entrada libre",
    capacity: "Aforo limitado a 30 personas",
  },
  21: {
    title: "Taller de joyería artesanal",
    time: "17:00 - 20:00",
    description: "Aprende a crear tus propias piezas de joyería con técnicas básicas de alambrismo y montaje. Materiales incluidos. No se requiere experiencia previa.",
    price: "25€ por persona",
    capacity: "Plazas limitadas a 12 asistentes — reserva previa",
  },
};

export function Eventos() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const event = activeDay ? events[activeDay] : null;

  return (
    <section id="eventos" className="scroll-mt-24">
      <SectionTitle>Eventos</SectionTitle>
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-[#e7ad94] rounded-2xl py-3 mb-3 text-center">
          <h3 className="text-2xl text-black" style={{ fontFamily: "'Mirza', serif" }}>Mayo 2026</h3>
        </div>
        <div className="bg-[#f3bb7b] rounded-2xl p-4 grid grid-cols-7 gap-2 sm:gap-3">
          {days.map((d) => {
            const ev = events[d];
            return (
              <button
                key={d}
                onClick={() => ev && setActiveDay(d)}
                disabled={!ev}
                className={`aspect-square rounded-lg p-1 relative text-xs text-left ${
                  ev
                    ? "bg-[#e7ad94] hover:bg-[#d99a7e] hover:scale-105 transition cursor-pointer"
                    : "bg-[#cccccc] cursor-default"
                }`}
              >
                <span className="absolute top-1 left-1.5">{d}</span>
                {ev && (
                  <span className="absolute inset-x-1 bottom-1 leading-tight" style={{ fontFamily: "'Mirza', serif" }}>
                    {ev.title.length > 14 ? ev.title.slice(0, 14) + "…" : ev.title}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <Modal open={!!event} onClose={() => setActiveDay(null)}>
        {event && activeDay && (
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#8d262a] text-white rounded-lg w-14 h-14 flex flex-col items-center justify-center flex-shrink-0">
                <span className="leading-none text-2xl">{activeDay}</span>
                <span className="text-xs uppercase tracking-wide">May</span>
              </div>
              <div>
                <h3 className="text-2xl text-[#8d262a] leading-tight" style={{ fontFamily: "'Mirza', serif" }}>{event.title}</h3>
                <p className="text-[#8d262a]/80">🕒 {event.time}</p>
              </div>
            </div>
            <p className="leading-relaxed mb-3">{event.description}</p>
            {event.price && <p className="mb-1"><b>Precio:</b> {event.price}</p>}
            {event.capacity && <p className="mb-3"><b>Aforo:</b> {event.capacity}</p>}
            <button className="bg-[#8d262a] text-white rounded-md px-4 py-2 hover:bg-[#a83136] transition w-full sm:w-auto">
              Reservar plaza
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}

type Novedad = {
  type: string;
  lines: { full: string; short?: string }[];
  img?: string;
  detail: {
    title: string;
    subtitle?: string;
    date?: string;
    description: string;
    extra?: { label: string; value: string }[];
  };
};

const sectionByType: Record<string, { id: string; label: string }> = {
  Evento: { id: "eventos", label: "Ir al calendario de eventos" },
  Libro: { id: "libros", label: "Ir al apartado de Libros" },
  Menú: { id: "carta", label: "Ir a la Carta" },
};

export function Tienda() {
  const [active, setActive] = useState<Novedad | null>(null);
  const novedades: Novedad[] = [
    {
      type: "Evento",
      lines: [{ full: '"Llena pues de palabras"', short: '"Llena pues..."' }, { full: "1 de Mayo" }, { full: "19:00-21:30", short: "19:00" }],
      detail: {
        title: '"Llena pues de palabras"',
        subtitle: "Recital poético",
        date: "1 de Mayo · 19:00 - 21:30",
        description: "Recital poético colectivo abierto al público. Trae tus poemas favoritos o ven simplemente a escuchar. Un espacio íntimo donde la palabra es protagonista.",
        extra: [{ label: "Entrada", value: "Libre" }, { label: "Aforo", value: "30 personas" }],
      },
    },
    {
      type: "Libro",
      lines: [{ full: "CAIRO" }],
      img: imgImagen1,
      detail: {
        title: "CAIRO",
        subtitle: "G. Mortimer · 2018 · 412 páginas",
        description: "Novela de espionaje ambientada en el Cairo de los años 50, donde un periodista británico se ve envuelto en una trama de tráfico de antigüedades y secretos coloniales.",
        extra: [{ label: "Precio", value: "12,00€" }],
      },
    },
    {
      type: "Menú",
      lines: [{ full: "Café Mola XL" }],
      img: imgImagen2,
      detail: {
        title: "Café Mola XL",
        subtitle: "Especialidad de la casa",
        description: "Nuestra creación estrella: café especial de la casa con un toque secreto y servido en formato grande. Disponible con bebida vegetal o sin lactosa.",
        extra: [{ label: "Precio", value: "4,20€" }, { label: "Alérgenos", value: "Lactosa" }],
      },
    },
    {
      type: "Libro",
      lines: [{ full: "¿Dónde está el límite?", short: "¿Dónde está…?" }, { full: "J. Afram – 3,00€", short: "3,00€" }],
      img: imgImagen5,
      detail: {
        title: "¿Dónde está el límite?",
        subtitle: "J. Afram · 2021 · 184 páginas",
        description: "Una reflexión íntima sobre los límites personales, sociales y creativos. A través de viñetas y relatos breves, el autor invita al lector a cuestionar dónde termina lo posible y empieza lo imaginado.",
        extra: [{ label: "Precio", value: "3,00€" }],
      },
    },
    {
      type: "Menú",
      lines: [{ full: "Tarta 3 leches", short: "Tarta 3 l." }, { full: "5,50€" }],
      img: imgImagen6,
      detail: {
        title: "Tarta 3 leches",
        subtitle: "Repostería casera",
        description: "Bizcocho esponjoso bañado en tres tipos de leche, coronado con merengue. Receta tradicional preparada cada mañana en nuestra cocina.",
        extra: [{ label: "Precio", value: "5,50€" }, { label: "Alérgenos", value: "Gluten, Lactosa, Huevo" }],
      },
    },
  ];
  return (
    <section id="tienda" className="scroll-mt-24">
      <SectionTitle>Novedades</SectionTitle>
      <div className="bg-[#ffdac1] py-4 px-2">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 sm:gap-6 justify-center">
          {novedades.map((n, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setActive(n)}
              className="bg-[#f3bb7b] rounded-2xl sm:rounded-3xl w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex-shrink-0 flex flex-col items-center justify-between text-center text-[#8d262a] p-2 sm:p-3 text-[11px] sm:text-sm md:text-base overflow-hidden hover:bg-[#e7ad94] hover:scale-105 transition cursor-pointer"
            >
              <p className="text-base sm:text-xl md:text-2xl leading-none" style={{ fontFamily: "'Mirza', serif" }}>{n.type}</p>
              {n.img && <img src={n.img} alt="" className="w-10 h-9 sm:w-16 sm:h-14 md:w-20 md:h-16 object-contain" />}
              <div className="leading-tight w-full px-0.5">
                {n.lines.map((l, j) => (
                  <p key={j} className="truncate">
                    <span className="sm:hidden">{l.short ?? l.full}</span>
                    <span className="hidden sm:inline">{l.full}</span>
                  </p>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="p-6">
            <p className="inline-block bg-[#8d262a] text-white rounded-md px-3 py-1 mb-2 text-sm uppercase tracking-wide">{active.type}</p>
            <h3 className="text-3xl text-[#8d262a] leading-tight" style={{ fontFamily: "'Mirza', serif" }}>{active.detail.title}</h3>
            {active.detail.subtitle && <p className="italic text-[#8d262a]/80 mb-1">{active.detail.subtitle}</p>}
            {active.detail.date && <p className="text-[#8d262a]/80 mb-3">🕒 {active.detail.date}</p>}
            {active.img && (
              <img src={active.img} alt="" className="w-full max-h-56 object-contain my-3 bg-[#fbd3a4] rounded-lg p-3" />
            )}
            <p className="leading-relaxed mb-3">{active.detail.description}</p>
            {active.detail.extra && (
              <ul className="space-y-1 mb-4">
                {active.detail.extra.map((e, i) => (
                  <li key={i} className="flex justify-between border-b border-[#e7ad94]/60 py-1">
                    <span className="font-bold">{e.label}</span>
                    <span>{e.value}</span>
                  </li>
                ))}
              </ul>
            )}
            {sectionByType[active.type] && (
              <button
                onClick={() => {
                  const target = sectionByType[active.type];
                  setActive(null);
                  setTimeout(() => {
                    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 50);
                }}
                className="bg-[#8d262a] text-white rounded-md px-4 py-2 hover:bg-[#a83136] transition w-full sm:w-auto"
              >
                {sectionByType[active.type].label} →
              </button>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}

function MapCard() {
  const [open, setOpen] = useState(false);
  const address = "Calle Tejeiro 21, Granada, 18005";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <>
      <div className="bg-[#f3bb7b] rounded-2xl p-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full relative group rounded overflow-hidden"
          aria-label="Ampliar mapa"
        >
          <img src={imgImagen22} alt="Mapa" className="rounded w-full aspect-[4/3] object-cover group-hover:scale-105 transition" />
          <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 bg-[#8d262a] text-white rounded-md px-3 py-1 transition">
              🔍 Ampliar mapa
            </span>
          </span>
        </button>
        <p className="text-center mt-2">Calle Tejeiro 21, Granada</p>
        <p className="text-center italic">(CP: 18005)</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-center bg-[#8d262a] text-white rounded-md py-2 hover:bg-[#a83136] transition"
        >
          📍 Abrir en Google Maps
        </a>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-4">
          <h3 className="text-2xl text-[#8d262a] mb-2" style={{ fontFamily: "'Mirza', serif" }}>
            Nuestra ubicación
          </h3>
          <p className="mb-3">{address}</p>
          <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#fbd3a4]">
            <iframe
              title="Mapa de La Qarmita"
              src={embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center bg-[#8d262a] text-white rounded-md py-2 hover:bg-[#a83136] transition"
          >
            Abrir en Google Maps ↗
          </a>
        </div>
      </Modal>
    </>
  );
}

export function SobreNosotros() {
  return (
    <section id="sobre" className="scroll-mt-24">
      <SectionTitle>Sobre nosotros</SectionTitle>
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img src={imgImage5} alt="Cafetería" className="rounded-lg w-full h-64 object-cover" />
          <div className="text-justify">
            <h3 className="text-3xl text-black mb-2" style={{ fontFamily: "'Mirza', serif" }}>Nuestra Qarmi</h3>
            <p className="leading-relaxed">
              La Qarmita es una cafetería y librería de principios del siglo XX estilo francés / europeo
              (<i>Art Nouveau</i>). Ofrecemos un menú seleccionado de cafés, tés, bebidas, comida casera
              y un lugar cómodo para quedarse.
            </p>
            <p className="leading-relaxed mt-3">
              Los eventos incluyen espectáculos de magia, lectura de poesía, concursos, intercambio de
              idiomas, cineforums, reuniones de couchsurfers, narración de cuentos, conciertos de música
              acústica, etc. Buenos precios y ofertas especiales. Inglés hablado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-justify md:order-1 order-2">
            <h3 className="text-3xl text-black mb-2" style={{ fontFamily: "'Mirza', serif" }}>Nuestro objetivo</h3>
            <p className="leading-relaxed">
              La Qarmita combina el ambiente acogedor de una cafetería con el encanto de una librería
              independiente. Es un lugar donde el café, la lectura y la conversación se unen de forma
              sencilla y natural.
            </p>
            <p className="leading-relaxed mt-3">
              Nuestro objetivo es crear un punto de encuentro para quienes disfrutan de los libros, la
              cultura y los pequeños planes del día a día. Un espacio cercano, con buen ambiente y
              pensado para compartir momentos especiales.
            </p>
          </div>
          <img src={imgImagen17} alt="Interior" className="rounded-lg w-full h-64 object-cover md:order-2 order-1" />
        </div>

        <SectionTitle size="sm">Horarios y ubicación</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <MapCard />

          <div className="flex flex-col items-center justify-center text-center">
            <p className="mb-3">Abrimos todos los días desde por la mañana hasta por la noche</p>
            <img src={imgLogo} alt="Logo" className="w-32 h-32 rounded" />
            <p className="mt-3">Nos encontramos en Granada centro, en la calle Tejeiro</p>
          </div>
          <div className="bg-[#f3bb7b] rounded-2xl p-4 space-y-1">
            {[
              ["Lunes", "9:30 - 21:00"],
              ["Martes", "9:30 - 21:00"],
              ["Miércoles", "9:30 - 23:00"],
              ["Jueves", "9:30 - 21:00"],
              ["Viernes", "9:30 - 21:00"],
              ["Sábado", "9:30 - 22:00"],
              ["Domingo", "10:00 - 21:00"],
            ].map(([d, h]) => (
              <div key={d} className="flex justify-between gap-4">
                <span style={{ fontFamily: "'Mirza', serif" }} className="text-2xl">{d}</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-24 pb-12">
      <SectionTitle>Contacto</SectionTitle>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl text-[#8d262a] text-center mb-3" style={{ fontFamily: "'Mirza', serif" }}>Contacta con nosotros:</h3>
          <div className="space-y-3 text-right">
            <p>📞 +34 653 46 31 81</p>
            <p>✉️ laqarmita@gmail.com</p>
          </div>
          <img src={imgImage8} alt="Contacto" className="rounded-lg w-full h-56 object-cover mt-6" />
        </div>
        <div>
          <h3 className="text-3xl text-[#8d262a] text-center mb-3" style={{ fontFamily: "'Mirza', serif" }}>
            ¿Cómo puedo gestionar mi evento?
          </h3>
          <p className="text-justify leading-relaxed mb-3">
            Gracias por pensar en nuestra Qarmi para llevar a cabo tu evento, en esta página te
            ofreceremos información básica que te facilitará hacer posteriormente la solicitud de
            nuestros espacios y de igual forma para más fácil el poder canalizar la misma.
          </p>
          <p className="text-justify leading-relaxed mb-3">
            Físicamente en la cafetería no se gestionan las solicitudes de los eventos, nuestro staff
            puede facilitar información muy primaria pero esta no tienen conexión alguna con la
            solicitud ya que no son quienes lo gestionan.
          </p>
          <p>A continuación, un resumen de qué debes enviarnos en tu primer correo electrónico:</p>
          <ul className="list-disc ms-6 mt-2 space-y-1">
            <li>Enviar a: <b>laqarmita@gmail.com</b></li>
            <li>Tipo de Evento</li>
            <li>Fecha en que deseas realizarlo (ver fechas disponibles <u>aquí</u>).</li>
            <li>Hora de inicio y hora estimada de culminación.</li>
            <li>Si llevarán la lista de reserva o prefieren que la llevemos nosotros.</li>
            <li>Si el evento será abierto al público o cerrado.</li>
            <li>Qué dispositivos necesitarán o si no los necesitan.</li>
            <li>Si habrá venta de algún libro o artículo durante el evento.</li>
            <li>Cualquier información adicional relevante.</li>
            <li>Preguntas o dudas sobre La Qarmita relacionadas al evento.</li>
            <li>Otros no especificados.</li>
          </ul>
          <p className="mt-3">Para más información, haz clic <u>aquí</u>.</p>
        </div>
      </div>
    </section>
  );
}
