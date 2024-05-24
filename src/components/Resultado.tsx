import { useCurrentLanguage } from "../store/languageStore";
import { useState, useEffect } from "react";

function Resultado() {

     const obtenerIdioma = useCurrentLanguage(state => state.obtenerIdioma);
     const obtenerLenguaje =  useCurrentLanguage(state => state.obtenerLenguaje);
     const obtenerTexto = useCurrentLanguage(state => state.obtenerTexto);
     
     const [respuesta, setRespuesta] = useState(null);

     const idiomaSeleccionado = obtenerIdioma();
     const lenguajeSeleccionado = obtenerLenguaje();
     const textoEscrito = obtenerTexto();

     const url = `https://api.mymemory.translated.net/get?q=${textoEscrito}!&langpair=es|${lenguajeSeleccionado}`;

     const { cambiar } = useCurrentLanguage();

     useEffect(() =>  {
          fetch(url)
          .then((response) => response.json())
          .then((data) => setRespuesta((data.responseData.translatedText)))

          .catch(error => {
               console.log(error)
          })
     }, [respuesta, url, lenguajeSeleccionado])

     return (
          <>
               <>
                    <div className="w-full sm:h-[18em] h-[22em] bg-[#232637d7] rounded-3xl  border-solid border-[.5px] border-[#8a8a8bd7] p-5" >
                         <div className="flex items-center gap-2 sm:gap-5 border-[#8a8a8bd7] border-b-[1px] p-1 w-full">
                              <h2 className="text-xs text-[#dad9d9] py-2">Traducir al {idiomaSeleccionado}</h2>
                         </div>

                         <div className="contenedorResultado h-[13em] sm:h-[10.5em]">
                              <p className="py-2.5 text-[#fafafa]">{respuesta ? respuesta : "Cargando..."}</p>
                         </div>

                         <div className="contenedorBotones flex justify-end">
                              <div className="text-[#fafafa] bg-transparent border border-[#a6a6a6a1] flex text-xs transition duration-75 rounded-lg hover:bg-[#a6a6a6a1] p-2 justify-center items-center gap-1">
                                   <svg xmlns="https//www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fafafa" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                   </svg>
                              </div>
                         </div>
                    </div>
               </>
          </>
     );
}

export default Resultado;