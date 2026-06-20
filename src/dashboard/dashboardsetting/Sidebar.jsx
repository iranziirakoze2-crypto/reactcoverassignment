import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Tags,
  X,
} from "lucide-react";
import "../../styles/sidebar.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { label: "Dashboard Home", to: "/dashboard", icon: Home, end: true },
    { label: "Orders", to: "/dashboard/orders", icon: ShoppingCart },
    { label: "My Product", to: "/dashboard/products", icon: Package },
    { label: "Category Pages", to: "/dashboard/categories", icon: Tags },
  ];

  return (
    <aside className={`sidebar-wrapper ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-header">
        <NavLink
          to="/dashboard"
          className="sidebar-logo"
          onClick={() => setIsOpen(false)}
        >
          <span className="logo-mark">
            <LayoutDashboard size={20} />
          </span>
          <span className="logo-brand-text">TailAdmin</span>
        </NavLink>
        <button
          className="sidebar-close-toggle"
          type="button"
          aria-label="Close sidebar"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      <nav className="sidebar-menu-scroller" aria-label="Dashboard navigation">
        <p className="menu-group-title">ADMIN MENU</p>
        <ul className="menu-list-items">
          {menuItems.map(({ label, to, icon: Icon, end }) => (
            <li key={label}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `menu-link ${isActive ? "active-link-state" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon className="menu-icon" size={20} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="sidebar-promo">
          <span className="promo-eyebrow">Store overview</span>
          <strong>$68.4K</strong>
          <p>Revenue tracked across products, orders, and category pages.</p>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
