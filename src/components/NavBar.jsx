import { navigations } from "../navigations.jsx";
import "./navbar.css";
import { RiCloseLine, RiMenu2Fill } from "react-icons/ri";
const NavBar = () => {
  return (
    <header>
      <a href="#" className="logo-container">
        Portfolio
      </a>
      <RiCloseLine size={30} id="menu-icon-close" style={{ display: "none" }} />
      <RiMenu2Fill size={30} id="menu-icon-open" />
      <nav>
        {navigations.map((a, i) => (
          <a key={i} href={a.url} className={i === 0 ? "active" : ""}>
            {a.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
