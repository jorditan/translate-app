import { useState } from "react";

function TextArea() {

     const [caracteres, setCaracteres] = useState(0);

     const agregarCaraceteres = (e) => {
          const inputValue = e.target.value.length;
          setCaracteres(inputValue)
     }

     if(caracteres >= 500) {
          
     }

     return (
          <>
               <textarea onChange={agregarCaraceteres} name="" id="" placeholder="" className="w-full h-[8em] bg-transparent border-none text-[#fafafa] text-sm focus:outline-none resize-none">
                    Hello, How are you?
               </textarea>

               <p className="text-[#9693938a] text-xs">{caracteres}/500</p>
          </>
     );
}

export default TextArea;