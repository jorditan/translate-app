import Button from "./Button";
import { useCurrentLanguage } from "../store/languageStore";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { useState } from "react";



function DropdownComponent() {
     const {cambiar} = useCurrentLanguage();
     const { idioma } = useCurrentLanguage();

     const [estaAbierto, setEstaAbierto] = useState(false);

     const handleAbierto = () => {
          setEstaAbierto(!estaAbierto)
     }

     return (
          <div className="dropdown dropdown-hover flex sm:hidden">
               <div onClick={() => handleAbierto()} tabIndex={0} className="flex rounded-md bg-transparent hover:bg-[#7a7a7aa1] p-2 text-[#fafafa] transition-all hover:shadow peer-checked:text-[#7a7a7aa1] peer-checked:bg-[#7a7a7aa1] justify-center items-center border-0 text-xs gap-1" >{idioma == "" ? "Lenguaje" : idioma} 
                    {
                         estaAbierto == false ? <MdExpandLess/> : <MdExpandMore/> 
                    }
          </div>

               <ul tabIndex={0} className="dropdown-content top-[35px] menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow max-w-[10em]">
                    <Button styles="" texto={'Francés'} value={'fr'} cambiar={cambiar} />
                    <Button styles="" texto={'Inglés'} value={'en'} cambiar={cambiar} />
                    <Button styles="" texto={'Alemán'} value={'de'} cambiar={cambiar} />
                    <Button styles="" texto={'Catalán'} value={'ca'} cambiar={cambiar} />
               </ul>
          </div>

     );
}

export default DropdownComponent;