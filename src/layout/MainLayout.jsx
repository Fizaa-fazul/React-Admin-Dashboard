import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { useState } from "react";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* Sidebar (NO wrapper needed) */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* Overlay (CORRECT VERSION) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="min-w-0 flex-1 flex flex-col">

        <Navbar setIsOpen={setIsOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default MainLayout;