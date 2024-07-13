import { useState } from "react";
import { useCurrentLanguage } from "../store/languageStore";
import AlertKeep from "./AlertKeep";


function Resultado() {
     const [copiado, setCopiado] = useState(false);
     const obtenerRespuesta = useCurrentLanguage(state => state.obtenerRespuesta);

     const respuesta = obtenerRespuesta();
     const { idioma } = useCurrentLanguage();

     const copiarAlPortapapeles = (respuesta: string) => {
          navigator.clipboard.writeText(respuesta);
          setCopiado(true)
          setTimeout(() => {
               setCopiado(false)
          }, 3000);
     }

     return (
          <>
               <>
                    <div className="bottom-0 left-0 right-0 w-full sm:h-[18em] h-[22em] bg-[#232637d7] rounded-3xl  border-solid border-[.5px] border-[#8a8a8bd7] p-5" >
                         <div className="flex items-center gap-2 sm:gap-5 border-[#8a8a8bd7] border-b-[1px] p-1 w-full">
                              <h2 className="text-xs text-[#dad9d9] py-2">Traducir al {idioma}</h2>
                         </div>

                         <div className="contenedorResultado h-[13em] sm:h-[10.5em]">
                              <p className="py-2.5 text-[#fafafa]">{respuesta}</p>
                         </div>

                         <div className="contenedorBotones flex justify-end">
                              <div onClick={() => copiarAlPortapapeles(respuesta)} className={respuesta == "" ? "text-[#fafafa] cursor-not-allowed	opacity-50 bg-[#cbcbcba1] border border-[#a6a6a6a1] flex text-xs rounded-lg p-2 justify-center items-center gap-1" : "text-[#fafafa] bg-transparent border border-[#a6a6a6a1] flex text-xs transition duration-75 rounded-lg hover:bg-[#a6a6a6a1] p-2 justify-center items-center gap-1"}>
                                   <svg xmlns="https//www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fafafa" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                   </svg>
                              </div>
                         </div>

                         <AlertKeep className={copiado ? "mostrar" : ""} />
                    </div>
               </>
          </>
     );
}

export default Resultado;