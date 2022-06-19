import { Link } from "react-router-dom";
import { AppBar, Nav, NavAction, NavLogo } from "./HeaderStyled";
import SearchBar from "./SearchBar/SearchBar";
import { GoGraph } from "react-icons/go";
import { MdComment } from "react-icons/md";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { BoxHover } from "../../styles/GlobalStyledComponents/BoxHover";
import UserProfile from "./UserProfile/UserProfile";
import { useTheme } from "../../styles/theme";

const Header = () => {
  const { themeToggler, theme } = useTheme();

  return (
    <AppBar>
      <Nav>
        <NavLogo>
          <Link to={"/"}>
            <img src='/Assets/Header/Logo.png' alt='Logo' />
          </Link>
          <SearchBar />
        </NavLogo>

        <NavAction>
          <BoxHover>
            <span>
              <GoGraph />
            </span>
          </BoxHover>

          <BoxHover>
            <span>
              <MdComment />
            </span>
          </BoxHover>

          <BoxHover onClick={() => themeToggler()}>
            {theme === "light" ? (
              <span>
                <BsSunFill />
              </span>
            ) : (
              <span>
                <BsFillMoonStarsFill />
              </span>
            )}
          </BoxHover>

          <BoxHover>
            <UserProfile />
          </BoxHover>
        </NavAction>
      </Nav>
    </AppBar>
  );
};

export default Header;
