import { useState, useEffect } from "react";
import { Wrapper, Nav, LinkContainer } from "./ExtendedNavStyled";
import { NavLinks } from "../../../Data/Header-data/HeaderData";
import ExtendedNavLinks from "./ExtendedNavLinks";

const ExtendedNav = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  const [isActive, setIsActive] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setCurrentMenu(index);
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setCurrentMenu(null);
    setIsActive(false);
  };

  return (
    <Wrapper>
      <div className={sticky}>
        <Nav>
          <LinkContainer>
            {NavLinks.map((link, index) => (
              <div
                key={link.title}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <h3>{link.title}</h3>
                <p>{link.description}</p>

                {isActive && currentMenu === index && (
                  <ExtendedNavLinks
                    key={link.title}
                    moreLinks={link.moreLinks}
                    handleMouseLeave={handleMouseLeave}
                  ></ExtendedNavLinks>
                )}
              </div>
            ))}
          </LinkContainer>
        </Nav>
      </div>
    </Wrapper>
  );
};

export default ExtendedNav;
