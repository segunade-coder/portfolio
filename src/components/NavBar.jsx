import { navigations } from "../navigations.jsx";
import "./navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
const NavBar = () => {
  return (
    <header>
      <a href="#" className="logo-container">
        Portfolio
      </a>
      <RiMenu2Fill size={30} id="menu-icon" />
      <nav>
        {navigations.map((a, i) => (
          <a key={i} to={a.url} className={i === 0 ? "active" : ""}>
            {a.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
