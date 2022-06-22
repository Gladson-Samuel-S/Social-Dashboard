import React, { useState } from "react";
import { NavLinks } from "../../../Data/Header-data/HeaderData";
import { MoreStyledLinks, StyledLinks, Wrapper } from "./MobileNavStyled";
import { BsChevronRight, BsChevronDown, BsDot } from "react-icons/bs";

const MobileNav = () => {
  const [showMore, setShowMore] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);

  function handleClick(index) {
    setCurrentMenu(index);
    setShowMore(!showMore);
  }

  return (
    <Wrapper>
      <div className='LinkWrapper'>
        {NavLinks.map((link, index) => (
          <div key={link.title}>
            <StyledLinks onClick={() => handleClick(index)}>
              {link.title}

              {currentMenu === index && showMore ? (
                <BsChevronDown />
              ) : (
                <BsChevronRight />
              )}
            </StyledLinks>

            {currentMenu === index &&
              showMore &&
              link.moreLinks.map((link, index) => (
                <MoreStyledLinks key={index}>
                  <BsDot />
                  {link}
                </MoreStyledLinks>
              ))}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default MobileNav;
