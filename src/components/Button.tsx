interface Props {
     texto: string;
     value: string;
     cambiar: (value: string, idioma: string) => void 
}

function Button({ texto, value, cambiar }: Props) {
     return (
          <>
               <button onClick={() => cambiar(value, texto) }>
                    <label className="cursor-pointer">
                         <input type="radio" className="peer sr-only" value={value} name="lenguaje" />
                         <div className="rounded-md bg-transparent hover:bg-[#7a7a7aa1] p-2 text-[#fafafa] transition-all hover:shadow peer-checked:text-[#7a7a7aa1] peer-checked:bg-[#7a7a7aa1] justify-center items-center">
                              <div className="flex flex-col gap-1">
                                   <div className="flex items-center justify-between">
                                        <p className="text-sm text-[#fafafa]">{texto}</p>
                                   </div>
                              </div>
                         </div>
                    </label>
               </button>
          </>
     );
}

export default Button;