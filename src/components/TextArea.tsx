import { ChangeEvent, useState } from "react";

function TextArea() {

     const [caracteres, setCaracteres] = useState<any>(0);
     const [value, setValue] = useState("");

     const agregarCaraceteres = (e: ChangeEvent<HTMLTextAreaElement>): void => {
          const inputValue = e.target.value.length;
          setCaracteres(inputValue)
     }

     if (caracteres >= 500) {
          setCaracteres('Max');
     }

     return (
          <>
               <textarea onChange={agregarCaraceteres} name="mensaje" id="mensaje" placeholder="Hello, how are you?" className="w-full h-[8em] bg-transparent border-none text-[#fafafa] text-sm focus:outline-none resize-none">
                    
               </textarea>

               <p className="text-[#9693938a] text-xs">{caracteres}/500</p>
          </>
     );
}

export default TextArea;