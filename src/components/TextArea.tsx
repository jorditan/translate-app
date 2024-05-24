import { ChangeEvent, useState } from "react";
import { useCurrentLanguage } from "../store/languageStore";
import { shallow } from "zustand/shallow";

function TextArea() {

     const { texto } = useCurrentLanguage((state) => ({
          texto: state.texto
     }), shallow)


     const { recibirTexto } = useCurrentLanguage();

     const [mensaje, setMensaje] = useState<string>(texto)

     const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
          setMensaje(event.target.value);
          recibirTexto(mensaje);
     }
     
     return (
          <>
               <textarea onChange={handleChange} name="mensaje" id="mensaje" placeholder="¡Hola! ¿Cómo estás?" className="w-full h-[13em] sm:h-[8em] bg-transparent border-none text-[#fafafa] text-sm focus:outline-none resize-none">

               </textarea>
          </>
     );
}

export default TextArea;