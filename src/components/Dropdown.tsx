import Button from "./Button";
import { useCurrentLanguage } from "../store/languageStore";
import { MdExpandLess } from "react-icons/md";



function DropdownComponent() {
     const {cambiar} = useCurrentLanguage();
     return (
          <div className="dropdown dropdown-hover md:block lg:hidden">
               <div tabIndex={0} className="flex rounded-md bg-transparent hover:bg-[#7a7a7aa1] p-2 text-[#fafafa] transition-all hover:shadow peer-checked:text-[#7a7a7aa1] peer-checked:bg-[#7a7a7aa1] justify-center items-center border-0 text-xs gap-1" >Selecciona un idioma <MdExpandLess className="text-lg"/></div>

               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <Button styles="" texto={'Francés'} value={'fr'} cambiar={cambiar} />
                    <Button styles="" texto={'Inglés'} value={'en'} cambiar={cambiar} />
                    <Button styles="" texto={'Alemán'} value={'de'} cambiar={cambiar} />
                    <Button styles="" texto={'Catalán'} value={'ca'} cambiar={cambiar} />
               </ul>
          </div>

     );
}

export default DropdownComponent;