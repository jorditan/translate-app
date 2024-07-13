import { RiTranslate } from "react-icons/ri";

function Header() {
     return (
          <header className="md:h-[20vh] sm:h-[10vh] text-xl py-6 px-5 bg-transparent flex justify-center items-center w-[100vw]">
               <RiTranslate className="text-[#fafafa] size-7 sm:size-12 mr-3" />
               <h1 className="text-[#fafafa] font-bold text-3xl sm:text-5xl lg:text-6xl">Translate.io</h1>
          </header>
     );
}

export default Header;