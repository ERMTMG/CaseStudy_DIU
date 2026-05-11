import svgPaths from "./svg-hv18mkgfct";
import imgImagen18 from "./a0356d54d02afa55bb5d34c882041f952847b89f.png";
import imgTitulo from "./060986007a79320b6d99f9c9c27c29bc65654433.png";
import imgHome24DpE3E3E3Fill0Wght400Grad0Opsz241 from "./13b1cfaac88758deded7c12f2045ce0727a774d4.png";

function ElementosPie() {
  return (
    <div className="absolute contents font-['Mirza:Regular',sans-serif] inset-[90.04%_-13.82%_-0.2%_-12.5%] leading-[0] not-italic text-[32px] text-black text-center" data-name="ElementosPie">
      <div className="absolute flex flex-col inset-[90.23%_9.24%_-0.2%_7.43%] justify-center">
        <p className="decoration-solid leading-[normal] underline">Política de Privacidad</p>
      </div>
      <a className="absolute flex flex-col inset-[90.23%_29.17%_-0.2%_-12.5%] justify-center" href="https://lafincaroaster.com/aviso-legal" target="_blank">
        <p className="cursor-pointer decoration-solid leading-[normal] underline">Aviso legal</p>
      </a>
      <div className="absolute flex flex-col inset-[90.04%_-13.82%_0_30.49%] justify-center">
        <p className="decoration-solid leading-[normal] underline">Términos y condiciones</p>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn />
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#f3bb7b] col-1 h-[159px] relative rounded-[16px] row-1 self-start shrink-0 w-[285px]" data-name="item 1">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Btn1() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn1 />
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-[#f3bb7b] col-2 h-[159px] relative rounded-[16px] row-1 self-start shrink-0 w-[285px]" data-name="item 2">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Btn2() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn2 />
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-[#f3bb7b] col-3 h-[159px] relative rounded-[16px] row-1 self-start shrink-0 w-[285px]" data-name="item 3">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Btn3() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn3 />
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-[#f3bb7b] col-4 h-[159px] relative rounded-[16px] row-1 self-start shrink-0 w-[285px]" data-name="item 4">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Btn4() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn4 />
    </div>
  );
}

function Item4() {
  return (
    <div className="bg-[#f3bb7b] col-1 h-[159px] relative rounded-[16px] row-2 self-start shrink-0 w-[285px]" data-name="item 5">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Btn5() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn5 />
    </div>
  );
}

function Item5() {
  return (
    <div className="bg-[#f3bb7b] col-2 h-[159px] relative rounded-[16px] row-2 self-start shrink-0 w-[285px]" data-name="item 6">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Btn6() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn6 />
    </div>
  );
}

function Item6() {
  return (
    <div className="bg-[#f3bb7b] col-3 h-[159px] relative rounded-[16px] row-2 self-start shrink-0 w-[285px]" data-name="item 7">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Btn7() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn7 />
    </div>
  );
}

function Item7() {
  return (
    <div className="bg-[#f3bb7b] col-4 h-[159px] relative rounded-[16px] row-2 self-start shrink-0 w-[285px]" data-name="item 8">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Btn8() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn8 />
    </div>
  );
}

function Item8() {
  return (
    <div className="bg-[#f3bb7b] col-1 h-[159px] relative rounded-[16px] row-3 self-start shrink-0 w-[285px]" data-name="item 9">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function Btn9() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn9 />
    </div>
  );
}

function Item9() {
  return (
    <div className="bg-[#f3bb7b] col-2 h-[159px] relative rounded-[16px] row-3 self-start shrink-0 w-[285px]" data-name="item 10">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Btn10() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn10 />
    </div>
  );
}

function Item10() {
  return (
    <div className="bg-[#f3bb7b] col-3 h-[159px] relative rounded-[16px] row-3 self-start shrink-0 w-[285px]" data-name="item 11">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function Btn11() {
  return (
    <div className="h-[35px] relative shrink-0 w-[139px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[34.966px] left-0 rounded-[8px] top-0 w-[139px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[34.966px] justify-center leading-[0] left-[69.5px] not-italic text-[16px] text-center text-white top-[17.48px] w-[139px]">
        <p className="leading-[16px]">Añadir al carrito</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[127.49px] top-[16.55px] w-[138.717px]">
      <div className="flex flex-col font-['Mirza:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Gentium_Book_Basic:Bold',sans-serif] text-[16px]">
          <span className="leading-[normal]">Páginas</span>
          <span className="leading-[normal]">{` en blanco`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">P. Moreno</p>
      </div>
      <div className="flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">10,00€</p>
      </div>
      <Btn11 />
    </div>
  );
}

function Item11() {
  return (
    <div className="bg-[#f3bb7b] col-4 h-[159px] relative rounded-[16px] row-3 self-start shrink-0 w-[285px]" data-name="item 12">
      <div className="absolute h-[124.375px] left-[17.19px] top-[17.31px] w-[96.959px]" data-name="imagen 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-[-28.32%] max-w-none top-[0.01%] w-[128.26%]" src={imgImagen18} />
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function Catalogo() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid-cols-[repeat(4,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] inline-grid left-[120px] overflow-clip top-[242px]" data-name="catalogo">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[69px] left-[calc(33.33%+47px)] top-[833px] w-[386px]">
      <div className="absolute h-[69px] left-0 rounded-[16px] top-0 w-[386px]" data-name="título">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgTitulo} />
        <div className="absolute bg-[#f3bb7b] inset-0 rounded-[16px]" />
        <div className="absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] inset-[29.41%_0_0_0] justify-center leading-[0] not-italic text-[32px] text-black text-center">
          <p className="leading-[normal]">​</p>
        </div>
      </div>
      <div className="absolute left-[245.3px] size-[56px] top-[6.5px]" data-name="shopping-cart_17269035 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-0.31%] max-w-none size-full top-[-0.43%]" src={imgTitulo} />
        </div>
      </div>
    </div>
  );
}

function Busqueda() {
  return (
    <div className="absolute contents left-[102px] top-0" data-name="Busqueda">
      <div className="absolute h-[63px] left-[102px] top-0 w-[996px]" data-name="barra de búsqueda">
        <div className="absolute bg-[#ffdac1] inset-0 rounded-[10px]" />
      </div>
      <div className="absolute bg-[#c5bcbc] h-[33px] left-[119px] rounded-[5px] top-[16px] w-[962px]" data-name="Busqueda">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute flex flex-col font-['Gentium_Book_Basic:Regular',sans-serif] inset-[25.4%_9.69%_22.22%_11.44%] justify-center leading-[0] not-italic text-[16px] text-black">
        <p className="leading-[normal]">Busca por título o autor...</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[23.31px] size-[27.27px] top-[0.8px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2697 27.2697">
        <g clipPath="url(#clip0_6_174)" id="Frame">
          <path d={svgPaths.p38c0f100} fill="var(--fill-0, #FFDAC1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6_174">
            <rect fill="white" height="27.2697" width="27.2697" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Btn12() {
  return (
    <div className="absolute h-[34px] left-[1116px] top-[15px] w-[81px]" data-name="btn">
      <div className="absolute bg-[#8d262a] h-[33.198px] left-[23.31px] rounded-[9.485px] top-[0.8px] w-[34.384px]" />
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[19.15px] top-[17.52px]">
      <div className="absolute h-[27.991px] left-[19.15px] overflow-clip top-[17.52px] w-[38.148px]" data-name="keyboard_arrow_left" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[35.696px] left-[23.93px] overflow-clip top-0 w-[34.144px]" data-name="Frame">
      <div className="absolute left-[0.68px] size-[32.779px] top-0" data-name="home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHome24DpE3E3E3Fill0Wght400Grad0Opsz241} />
      </div>
    </div>
  );
}

function Btn13() {
  return (
    <div className="absolute h-[35px] left-[-2px] top-[16px] w-[82px]" data-name="btn">
      <div className="absolute bg-[#8d262a] left-[23.15px] rounded-[12.416px] size-[35.696px] top-0" />
      <Frame1 />
    </div>
  );
}

function BarraPrincipal() {
  return (
    <div className="absolute h-[63px] left-[122px] top-[129px] w-[1197px]" data-name="barra principal">
      <Busqueda />
      <Btn12 />
      <Group />
      <Btn13 />
    </div>
  );
}

export default function TiendaDeLibros() {
  return (
    <div className="bg-[#ffdac1] relative size-full" data-name="tienda de libros">
      <div className="absolute h-[102px] left-0 top-[922px] w-[1438px]" data-name="pie de página">
        <div className="absolute bg-[#e7ad94] inset-0" />
      </div>
      <ElementosPie />
      <Catalogo />
      <Frame14 />
      <BarraPrincipal />
      <div className="absolute h-[63px] left-0 top-[20px] w-[1440px]" data-name="título">
        <div className="absolute bg-[#8d262a] inset-0" />
        <div className="absolute flex flex-col font-['Mirza:Regular',sans-serif] inset-[29.41%_0_0_0] justify-center leading-[0] not-italic text-[48px] text-center text-white">
          <p className="leading-[normal]">Tienda de Libros</p>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gentium_Book_Basic:Bold',sans-serif] h-[69px] justify-center leading-[0] left-[calc(33.33%+240px)] not-italic text-[32px] text-black text-center top-[867.5px] w-[386px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Ver carrito      `}</p>
      </div>
    </div>
  );
}