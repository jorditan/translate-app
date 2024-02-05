interface Props {
    texto: string;
}

function ButtonSecondary({texto} : Props) {
    return (
        <>
            <button className="text-[#fafafa] bg-[#7a7a7aa1] text-xs transition duration-75 rounded-lg hover:bg-[#a6a6a6a1] p-2">
                {texto}
            </button>
        </>
    );
}

export default ButtonSecondary;