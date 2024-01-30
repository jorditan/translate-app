

interface Props {
     texto: string;
     value: string;
}

function Button({texto, value}: Props) {

     return (
          <>
               <button value={value} className={`bg-transparent text-[#dad9d9] hover:text-[#fafafa] hover:bg-[#7a7a7aa1] text-xs transition duration-75 rounded-lg p-2`}>
                    {texto}
               </button>
          </>
     );
}

export default Button;