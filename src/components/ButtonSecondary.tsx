import { ReactElement, useEffect, useState } from "react";
import { useCurrentLanguage } from "../store/languageStore";


interface Props {
    texto: string;
    imagen: ReactElement;
    onClick: () => void,
}


function ButtonSecondary({ texto, imagen, onClick }: Props) {
        const obtenerTexto = useCurrentLanguage(state => state.obtenerTexto);
        const textoEscrito = obtenerTexto();

    return (

        // textoEscrito == "" ? "mostrar" : ""
        <>
            <button disabled={textoEscrito == "" ? true : false} onClick={onClick} className={textoEscrito == "" ? "text-[#fafafa] cursor-not-allowed	opacity-50 bg-[#cbcbcba1] border border-[#a6a6a6a1] flex text-xs rounded-lg p-2 justify-center items-center gap-1" : "text-[#fafafa] bg-transparent border border-[#a6a6a6a1] flex text-xs transition duration-75 rounded-lg hover:bg-[#a6a6a6a1] p-2 justify-center items-center gap-1"}>
                {imagen}
                {texto}
            </button>
        </>
    );
}

export default ButtonSecondary;