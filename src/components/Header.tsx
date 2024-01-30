import { RiTranslate } from "react-icons/ri";

function Header() {
     return (
          <header className="text-xl py-6 px-5 fixed bg-transparent flex justify-center items-center w-full">
               <RiTranslate className="text-[#fafafa] size-7 sm:size-12 mr-3" />
               <h1 className="text-[#fafafa] font-bold text-3xl sm:text-5xl lg:text-7xl">Translate.io</h1>
          </header>
     );
}

export default Header;