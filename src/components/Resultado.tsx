function Resultado() {
     return (
          <>
               <>
                    <div className="w-full h-[18em] bg-[#232637d7] rounded-3xl  border-solid border-[.5px] border-[#8a8a8bd7] p-5" >
                         <div className="flex items-center gap-2 sm:gap-5 border-[#8a8a8bd7] border-b-[1px] p-1 w-full">
                              <h2 className="text-xs text-[#dad9d9] p-2">Traducir al:</h2>
                         </div>

                         <div className="contenedorResultado h-[10.5em]">
                              <p></p>
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