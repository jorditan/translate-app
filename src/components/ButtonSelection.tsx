
function ButtonSelection() {
     return (
          <>
               <button className="bg-transparent text-[#dad9d9] hover:text-[#fafafa] hover:bg-[#7a7a7aa1] text-xs transition duration-75 rounded-lg p-2">
                    <select name="" id="" className="bg-transparent border-none gap-5">
                         <option value="volvo" className="bg-[#303030] text-[#fafafa]">Chino</option>
                         <option value="saab" className="bg-[#303030] text-[#fafafa]">Japonés</option>
                         <option value="opel" className="bg-[#303030] text-[#fafafa]">Portugués</option>
                         <option value="rs" className="bg-[#303030] text-[#fafafa]">Ruso</option>
                    </select>
               </button>
          </>
     );
}

export default ButtonSelection;