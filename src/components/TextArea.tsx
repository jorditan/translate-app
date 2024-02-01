import { ChangeEvent, useState } from "react";

function TextArea() {

     const initialText = "Hello, how are you?"
     const [caracteres, setCaracteres] = useState(initialText.length);

     const agregarCaraceteres = (e: ChangeEvent<HTMLTextAreaElement>): void => {
          const inputValue = e.target.value.length;
          setCaracteres(inputValue)
     }


     return (
          <>
               <textarea onChange={agregarCaraceteres} name="" id="" placeholder="" className="w-full h-[8em] bg-transparent border-none text-[#fafafa] text-sm focus:outline-none resize-none">
                    {initialText}
               </textarea>

               <p className="text-[#9693938a] text-xs">{caracteres}/500</p>
          </>
     );
}

export default TextArea;