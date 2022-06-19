import { Link } from "react-router-dom";
import { AppBar, Nav } from "./HeaderStyled";

const Header = () => {
  return (
    <AppBar>
      <Nav>
        <Link to={"/"}>
          <img src='/Assets/Header/Logo.png' alt='Logo' />
        </Link>
        <input type={"text"} placeholder={"Search..."} />
      </Nav>
    </AppBar>
  );
};

export default Header;
