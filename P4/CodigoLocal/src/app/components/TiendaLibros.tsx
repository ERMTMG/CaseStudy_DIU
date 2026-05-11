import { useState, useMemo } from "react";
import { Modal } from "./Modal";
import imgImagen1 from "../../imports/PaginaPrincipal/b9c0041f25f0549838ec76126ee0067c1975e103.png";
import imgImagen5 from "../../imports/PaginaPrincipal/435fc42a5066b48fd2d021d7cdb675a174ae43f9.png";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  stock: number;
  year?: number;
  pages?: number;
  synopsis: string;
  img?: string;
};

const catalog: Book[] = [
  { id: 1, title: "Páginas en blanco", author: "P. Moreno", price: 10, stock: 5, year: 2020, pages: 220, img: imgImagen1, synopsis: "Una novela íntima sobre la búsqueda de la propia voz a través de la escritura, en la que el protagonista descubre que los silencios pesan más que las palabras." },
  { id: 2, title: "¿Dónde está el límite?", author: "J. Afram", price: 3, stock: 8, year: 2021, pages: 184, img: imgImagen5, synopsis: "Una reflexión íntima sobre los límites personales, sociales y creativos a través de viñetas y relatos breves." },
  { id: 3, title: "CAIRO", author: "G. Mortimer", price: 12, stock: 3, year: 2018, pages: 412, img: imgImagen1, synopsis: "Novela de espionaje ambientada en el Cairo de los años 50, donde un periodista británico se ve envuelto en una trama de tráfico de antigüedades y secretos coloniales." },
  { id: 4, title: "El silencio del mar", author: "V. Vercors", price: 9.5, stock: 2, year: 1942, pages: 96, synopsis: "Un oficial alemán es alojado en la casa de un anciano francés y su sobrina durante la ocupación. Pequeña obra maestra sobre la dignidad y la resistencia silenciosa." },
  { id: 5, title: "Cuentos de la Alhambra", author: "W. Irving", price: 14, stock: 4, year: 1832, pages: 350, synopsis: "Leyendas, paisajes y personajes que el escritor estadounidense recogió durante su estancia en la Alhambra, una visión romántica de la Granada del siglo XIX." },
  { id: 6, title: "Niebla", author: "M. de Unamuno", price: 11, stock: 6, year: 1914, pages: 256, synopsis: "Augusto Pérez vive en una niebla existencial hasta que se enamora. Una nivola que rompe los moldes y desafía la frontera entre autor y personaje." },
  { id: 7, title: "La metamorfosis", author: "F. Kafka", price: 8.5, stock: 10, year: 1915, pages: 128, synopsis: "Gregor Samsa despierta convertido en un monstruoso insecto. Alegoría inolvidable sobre la alienación, la familia y la identidad." },
  { id: 8, title: "El extranjero", author: "A. Camus", price: 10, stock: 7, year: 1942, pages: 168, synopsis: "Meursault, indiferente al mundo, comete un crimen bajo el sol de Argel. Novela fundamental del existencialismo francés." },
  { id: 9, title: "Rayuela", author: "J. Cortázar", price: 15, stock: 1, year: 1963, pages: 736, synopsis: "París y Buenos Aires son los dos polos de esta novela revolucionaria que invita al lector a recorrer sus capítulos en el orden que prefiera." },
  { id: 10, title: "Ficciones", author: "J.L. Borges", price: 12.5, stock: 5, year: 1944, pages: 192, synopsis: "Colección de relatos que exploran laberintos, espejos, bibliotecas infinitas y otros prodigios borgianos." },
  { id: 11, title: "Pedro Páramo", author: "J. Rulfo", price: 9, stock: 3, year: 1955, pages: 132, synopsis: "Juan Preciado viaja a Comala buscando a su padre y descubre un pueblo poblado por murmullos. Obra cumbre de la literatura mexicana." },
  { id: 12, title: "Cien años de soledad", author: "G. García Márquez", price: 16, stock: 0, year: 1967, pages: 471, synopsis: "La saga de los Buendía en Macondo: realismo mágico, soledad, amor y memoria a lo largo de varias generaciones." },
];

type CartLine = { book: Book; qty: number };

export function TiendaLibros({ onHome }: { onHome: () => void }) {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [paid, setPaid] = useState(false);
  const [detail, setDetail] = useState<Book | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return catalog;
    return catalog.filter(
      (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
  }, [query]);

  const qtyInCart = (id: number) => cart.find((l) => l.book.id === id)?.qty ?? 0;

  const showToast = (msg: string) => {
    setToast(msg);
    window.clearTimeout((showToast as any)._t);
    (showToast as any)._t = window.setTimeout(() => setToast(null), 2200);
  };

  const addToCart = (book: Book) => {
    const current = qtyInCart(book.id);
    if (current >= book.stock) {
      showToast(`Sin stock: solo quedan ${book.stock} unidades de "${book.title}"`);
      return;
    }
    setCart((c) => {
      const existing = c.find((l) => l.book.id === book.id);
      if (existing) return c.map((l) => (l.book.id === book.id ? { ...l, qty: l.qty + 1 } : l));
      return [...c, { book, qty: 1 }];
    });
    showToast(`Añadido al carrito: "${book.title}"`);
  };

  const changeQty = (id: number, delta: number) => {
    setCart((c) =>
      c
        .map((l) => {
          if (l.book.id !== id) return l;
          const next = l.qty + delta;
          if (delta > 0 && next > l.book.stock) {
            showToast(`Sin stock: máximo ${l.book.stock} unidades`);
            return l;
          }
          return { ...l, qty: next };
        })
        .filter((l) => l.qty > 0)
    );
  };

  const removeLine = (id: number) => setCart((c) => c.filter((l) => l.book.id !== id));

  const total = cart.reduce((sum, l) => sum + l.book.price * l.qty, 0);
  const totalUnits = cart.reduce((sum, l) => sum + l.qty, 0);

  const pay = () => {
    setPaid(true);
    setCart([]);
    setTimeout(() => {
      setPaid(false);
      setCartOpen(false);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#ffdac1] text-black" style={{ fontFamily: "'Gentium Book Plus', serif" }}>
      <header className="bg-[#8d262a] text-white text-center py-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: "'Mirza', serif" }}>
          Tienda de Libros
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
        <button
          onClick={onHome}
          aria-label="Volver al inicio"
          className="bg-[#8d262a] text-white rounded-lg w-11 h-11 flex-shrink-0 flex items-center justify-center hover:bg-[#a83136] transition"
        >
          🏠
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca por título o autor..."
          className="flex-1 rounded-full bg-[#e7ad94]/60 px-4 py-2 outline-none focus:ring-2 focus:ring-[#8d262a] placeholder:text-[#8d262a]/60"
        />
        <button
          aria-label="Filtrar"
          className="bg-[#8d262a] text-white rounded-lg w-11 h-11 flex-shrink-0 flex items-center justify-center hover:bg-[#a83136] transition"
        >
          <img src="/Filtro.png" alt="Filtro" className="w-5 h-5" />
        </button>
      </div>

      <main className="max-w-6xl mx-auto px-4 pb-8">
        {filtered.length === 0 ? (
          <p className="text-center text-[#8d262a] py-12">No se han encontrado libros para "{query}".</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((book) => {
              const inCart = qtyInCart(book.id);
              const atLimit = inCart >= book.stock;
              const outOfStock = book.stock === 0;
              return (
                <article key={book.id} className="bg-[#f3bb7b] rounded-2xl p-3 flex gap-3 hover:bg-[#e7ad94] transition cursor-pointer" onClick={() => setDetail(book)}>
                  <div className="w-16 sm:w-20 flex-shrink-0 bg-[#ffdac1] rounded flex items-center justify-center overflow-hidden">
                    {book.img ? (
                      <img src={book.img} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-[#8d262a]/40 text-3xl">📕</span>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="text-[#8d262a]">
                      <p className="font-bold leading-tight truncate">{book.title}</p>
                      <p className="text-sm">{book.author}</p>
                      <p className="text-sm">{book.price.toFixed(2)}€</p>
                      <p className="text-[10px] sm:text-xs">
                        {outOfStock ? <span className="text-red-700">Sin stock</span> : <>Stock: {book.stock}{inCart > 0 && ` · En carrito: ${inCart}`}</>}
                      </p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); addToCart(book); }}
                      disabled={atLimit || outOfStock}
                      className="bg-[#8d262a] text-white rounded-md px-2 py-1 text-xs sm:text-sm mt-2 hover:bg-[#a83136] active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {outOfStock ? "Sin stock" : atLimit ? "Límite alcanzado" : "Añadir al carrito"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="flex justify-center my-8">
          <button
            onClick={() => setCartOpen(true)}
            className="bg-[#f3bb7b] text-[#8d262a] rounded-xl px-6 sm:px-10 py-3 sm:py-4 font-bold text-xl hover:bg-[#e7ad94] active:scale-95 transition shadow flex items-center gap-3"
            style={{ fontFamily: "'Gentium Book Plus', serif" }}
          >
            Ver carrito 🛒
            {totalUnits > 0 && (
              <span className="bg-[#8d262a] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">
                {totalUnits}
              </span>
            )}
          </button>
        </div>
      </main>

      <footer className="bg-[#e7ad94] py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-around gap-4 text-center">
          <a href="#" className="underline text-xl sm:text-2xl" style={{ fontFamily: "'Mirza', serif" }}>Aviso legal</a>
          <a href="#" className="underline text-xl sm:text-2xl" style={{ fontFamily: "'Mirza', serif" }}>Política de Privacidad</a>
          <a href="#" className="underline text-xl sm:text-2xl" style={{ fontFamily: "'Mirza', serif" }}>Términos y condiciones</a>
        </div>
      </footer>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] bg-[#8d262a] text-white px-5 py-3 rounded-lg shadow-lg max-w-[90vw] text-center">
          {toast}
        </div>
      )}

      {/* Detalle del libro */}
      <Modal open={!!detail} onClose={() => setDetail(null)}>
        {detail && (() => {
          const inCart = qtyInCart(detail.id);
          const atLimit = inCart >= detail.stock;
          const outOfStock = detail.stock === 0;
          return (
            <div className="p-6">
              <div className="flex gap-4 mb-4">
                <div className="w-28 h-40 sm:w-36 sm:h-48 flex-shrink-0 bg-[#fbd3a4] rounded-lg flex items-center justify-center overflow-hidden">
                  {detail.img ? (
                    <img src={detail.img} alt="" className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-5xl">📕</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl text-[#8d262a] leading-tight" style={{ fontFamily: "'Mirza', serif" }}>
                    {detail.title}
                  </h3>
                  <p className="italic text-[#8d262a]/80 mt-1">
                    {detail.author}
                    {detail.year ? ` · ${detail.year}` : ""}
                    {detail.pages ? ` · ${detail.pages} pág.` : ""}
                  </p>
                  <p className="bg-[#8d262a] text-white inline-block rounded-md px-3 py-1 mt-2">{detail.price.toFixed(2)}€</p>
                  <p className="mt-2 text-sm">
                    {outOfStock ? (
                      <span className="text-red-700 font-bold">Sin stock</span>
                    ) : (
                      <>Disponibles: <b>{detail.stock}</b>{inCart > 0 && <> · En carrito: <b>{inCart}</b></>}</>
                    )}
                  </p>
                </div>
              </div>
              <h4 className="text-xl text-[#8d262a] mb-1" style={{ fontFamily: "'Mirza', serif" }}>Sinopsis</h4>
              <p className="text-justify leading-relaxed mb-4">{detail.synopsis}</p>
              <button
                onClick={() => addToCart(detail)}
                disabled={atLimit || outOfStock}
                className="w-full bg-[#8d262a] text-white rounded-lg py-3 hover:bg-[#a83136] active:scale-[0.98] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {outOfStock ? "Sin stock" : atLimit ? `Límite alcanzado (${detail.stock} en stock)` : "Añadir al carrito"}
              </button>
            </div>
          );
        })()}
      </Modal>

      <Modal open={cartOpen} onClose={() => setCartOpen(false)}>
        <div className="p-6">
          <h2 className="text-3xl text-[#8d262a] mb-4" style={{ fontFamily: "'Mirza', serif" }}>
            🛒 Tu carrito
          </h2>

          {paid ? (
            <div className="text-center py-8">
              <p className="text-5xl mb-3">✅</p>
              <p className="text-xl text-[#8d262a]" style={{ fontFamily: "'Mirza', serif" }}>
                ¡Pago realizado con éxito!
              </p>
              <p className="text-[#8d262a]/80 mt-2">Recibirás un correo de confirmación.</p>
            </div>
          ) : cart.length === 0 ? (
            <p className="text-center text-[#8d262a]/70 py-6">El carrito está vacío.</p>
          ) : (
            <>
              <ul className="divide-y divide-[#e7ad94]/60 mb-4">
                {cart.map((l) => (
                  <li key={l.book.id} className="py-3 flex items-center gap-3">
                    <div className="w-12 h-14 bg-[#fbd3a4] rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                      {l.book.img ? (
                        <img src={l.book.img} alt="" className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-xl">📕</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[#8d262a] truncate">{l.book.title}</p>
                      <p className="text-sm">{l.book.price.toFixed(2)}€ × {l.qty} = <b>{(l.book.price * l.qty).toFixed(2)}€</b></p>
                      <p className="text-[10px] text-[#8d262a]/70">máx. {l.book.stock} en stock</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => changeQty(l.book.id, -1)}
                        aria-label="Disminuir"
                        className="bg-[#8d262a] text-white rounded w-7 h-7 hover:bg-[#a83136]"
                      >−</button>
                      <span className="w-6 text-center">{l.qty}</span>
                      <button
                        onClick={() => changeQty(l.book.id, +1)}
                        disabled={l.qty >= l.book.stock}
                        aria-label="Aumentar"
                        className="bg-[#8d262a] text-white rounded w-7 h-7 hover:bg-[#a83136] disabled:opacity-40 disabled:cursor-not-allowed"
                      >+</button>
                      <button
                        onClick={() => removeLine(l.book.id)}
                        aria-label="Eliminar"
                        className="ml-2 text-[#8d262a] hover:text-red-700"
                      >🗑️</button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center bg-[#f3bb7b] rounded-lg px-4 py-3 mb-4">
                <span className="text-[#8d262a] font-bold text-lg">Total</span>
                <span className="text-[#8d262a] font-bold text-xl">{total.toFixed(2)}€</span>
              </div>

              <button
                onClick={pay}
                className="w-full bg-[#8d262a] text-white rounded-lg py-3 hover:bg-[#a83136] active:scale-[0.98] transition text-lg"
              >
                Pagar {total.toFixed(2)}€
              </button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
