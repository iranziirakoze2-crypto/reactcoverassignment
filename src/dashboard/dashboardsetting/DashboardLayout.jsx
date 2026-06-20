import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../styles/dashboard.css";

const DashbaordLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin-shell">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <button
          className="sidebar-backdrop"
          aria-label="Close sidebar"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="admin-main">
        <Navbar onMenuClick={() => setIsOpen(true)} />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashbaordLayout;
