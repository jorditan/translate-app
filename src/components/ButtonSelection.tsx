function ButtonSelection() {
     return (
          <>
               <button className="bg-transparent text-[#dad9d9] hover:text-[#fafafa] hover:bg-[#7a7a7aa1] text-xs transition duration-75 rounded-lg p-2">
                    <select name="" id="" className="bg-transparent border-none gap-5">
                         <option value="volvo" className="bg-[#303030]">Español</option>
                         <option value="saab" className="bg-[#303030]">Saab</option>
                         <option value="opel" className="bg-[#303030]">Opel</option>
                         <option value="audi" className="bg-[#303030]">Audi</option>
                    </select>
               </button>
          </>
     );
}

export default ButtonSelection;