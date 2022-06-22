import { Link } from "react-router-dom";
import {
  AppBar,
  HeaderWrapper,
  LogoContainer,
  Nav,
  NavAction,
  NavLogo,
} from "./HeaderStyled";
import SearchBar from "./SearchBar/SearchBar";
import { GoGraph } from "react-icons/go";
import { MdComment } from "react-icons/md";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { BoxHover } from "../../styles/GlobalStyledComponents/BoxHover";
import UserProfile from "./UserProfile/UserProfile";
import { useTheme } from "../../styles/theme";
import ExtendedNav from "./ExtendedNav/ExtendedNav";
import SideBar from "../../styles/GlobalStyledComponents/SideBar.js/SideBar";
import MobileNav from "./MobileNav/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const { themeToggler, theme } = useTheme();
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  return (
    <HeaderWrapper>
      <AppBar>
        <Nav>
          <LogoContainer>
            <BoxHover onClick={() => setSideBarOpen(true)}>
              <GiHamburgerMenu />
            </BoxHover>
            <NavLogo>
              <Link to={"/"}>
                <img src='/Assets/Header/Logo.png' alt='Logo' />
              </Link>
              <SearchBar />
            </NavLogo>
          </LogoContainer>

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

      <ExtendedNav />

      {isSideBarOpen && (
        <SideBar setSideBarOpen={setSideBarOpen}>
          <MobileNav />
        </SideBar>
      )}
    </HeaderWrapper>
  );
};

export default Header;
