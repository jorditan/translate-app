import { ReactElement } from "react";

interface Props {
    texto: string;
    imagen: ReactElement
}


function ButtonSecondary({ texto, imagen }: Props) {
    return (
        <>
            <button className="text-[#fafafa] bg-transparent border border-[#a6a6a6a1] flex text-xs transition duration-75 rounded-lg hover:bg-[#a6a6a6a1] p-2 justify-center items-center gap-1">
                {imagen}
                {texto}
            </button>
        </>
    );
}

export default ButtonSecondary;