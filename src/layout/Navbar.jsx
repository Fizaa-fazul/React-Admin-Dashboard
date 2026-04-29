import { FaBell } from "react-icons/fa";

function Navbar({setIsOpen}){
    return(
        <div className="flex justify-between bg-white items-center p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center gap-3">
                <button
        className="md:hidden text-xl p-2  rounded hover:bg-gray-100 transition"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      <input className="border rounded-lg px-3 py-2 outline-none text-sm
          focus:ring-2 focus:ring-blue-200 w-32 sm:w-48 md:w-64"
          placeholder="Search..."/>

            </div>

             
            
            <div className="flex items-center gap-4">
                <div className="p-2 rounded-full hover:bg-gray-100 transition">
                    <FaBell className="textsm font-medium text-gray-700"/>
                </div>
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          F
        </div>
                
                <h2 className="hidden md:block text-sm font-medium text-gray-700 ">Admin</h2>
            </div>

        </div>
    )
}
export default Navbar;