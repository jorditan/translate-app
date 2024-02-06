import Button from "./Button";
import TextArea from "./TextArea";
import ButtonSecondary from "./ButtonSecondary";
import { useCurrentLanguage } from "../store/languageStore";
import { useEffect } from "react";


function Translate() {

     const { language, idioma } = useCurrentLanguage((state) => ({
          language: state.language,
          idioma: state.idioma
     }))

     const { cambiar } = useCurrentLanguage();

     useEffect(() => {
          console.log(language)
          console.log(idioma)
     }, [language, idioma])

     return (
          <>
               <div className="w-full h-[18em] bg-[#232637d7] rounded-3xl  border-solid border-[.5px] border-[#8a8a8bd7] p-5" >
                    <div className="flex items-center gap-2 sm:gap-5 border-[#8a8a8bd7] border-b-[1px] p-1 w-full">
                         <h2 className="text-xs text-[#dad9d9]">Selecciona un lenguaje</h2>
                         <Button texto={'French'} value={'fr'} cambiar={cambiar} />
                         <Button texto={'English'} value={'es'} cambiar={cambiar} />
                         <Button texto={'Português'} value={'pr'} cambiar={cambiar} />
                    </div>


                    <form action="submit" id="mensaje" className="py-4">
                         <TextArea />
                    </form>

                    <div className="contenedorEnvio flex justify-end">
                         <p></p>
                         <ButtonSecondary texto={'Traducir'} imagen={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-language" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fafafa" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                              <path d="M10 14v-4a2 2 0 1 1 4 0v4" />
                              <path d="M14 12h-4" />
                         </svg>} />
                    </div>
               </div>
          </>
     );
}

export default Translate;