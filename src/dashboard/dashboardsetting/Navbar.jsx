import { Bell, ChevronDown, Menu, Moon, Search } from "lucide-react";
import "../../styles/dashnavbar.css";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="dashboard-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button
            className="hamburger-btn"
            type="button"
            onClick={onMenuClick}
            aria-label="Open sidebar"
          >
            <Menu size={21} />
          </button>

          <div className="search-wrapper">
            <span className="search-icon">
              <Search size={21} />
            </span>
            <input
              type="text"
              placeholder="Search or type command..."
              className="search-input"
            />
            <div className="shortcut-badge">
              <span className="shortcut-text">Ctrl K</span>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <button className="icon-btn" type="button" aria-label="Toggle dark mode">
            <Moon size={21} />
          </button>

          <button className="icon-btn" type="button" aria-label="Notifications">
            <Bell size={21} />
            <span className="badge-dot"></span>
          </button>

          <div className="profile-dropdown">
            <div className="user-name">Musharof</div>
            <div className="avatar-wrapper" aria-hidden="true">
              M
            </div>
            <ChevronDown className="chevron-icon" size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
