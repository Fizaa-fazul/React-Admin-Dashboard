import { FaTachometerAlt, FaUsers, FaChartBar, FaCog} from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen, activeMenu, setActiveMenu }) {

  const menu = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "Analytics", icon: <FaChartBar /> },
    { name: "Settings", icon: <FaCog /> }
  ];

  return (
    <div className={`
      fixed md:static z-50 h-full w-64 bg-gray-900 text-white
      flex flex-col p-4 transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    `}>

      {/* Top */}
      <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold text-blue-500">
            Dashboard
          </div>
        

        {/* optional close on mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menu.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveMenu(item.name)}
              className={`p-2 rounded flex items-center gap-3 cursor-pointer transition
                ${item.name === activeMenu
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
                }`}
            >
              {item.icon}
               <span className="md:block">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
}

export default Sidebar;