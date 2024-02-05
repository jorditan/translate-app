import Button from "./Button";
import ButtonSelection from "./ButtonSelection";
import TextArea from "./TextArea";
import ButtonSecondary from "./ButtonSecondary";

function Translate() {
     return (
          <>
               <div className="w-full h-[18em] bg-[#232637d7] rounded-3xl  border-solid border-[.5px] border-[#8a8a8bd7] p-5" >
                    <div className="flex items-center gap-2 sm:gap-5 border-[#8a8a8bd7] border-b-[1px] p-1 w-full">
                         <h2 className="text-xs text-[#dad9d9]">Selecciona un lenguaje</h2>
                         <Button texto={'Frances'} value={'Fr'} />
                         <Button texto={'Inglés'} value={'Es'}/>
                         <ButtonSelection />
                    </div>

                    <form action="submit" id="mensaje" className="py-4">
                         <TextArea />
                    </form>

                    <div className="contenedorEnvio flex justify-end">
                         <ButtonSecondary texto={'Traducir'} />
                    </div>
               </div>
          </>
     );
}

export default Translate;