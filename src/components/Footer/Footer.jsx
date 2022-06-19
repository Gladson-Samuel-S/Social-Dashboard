import { Link } from "react-router-dom";
import { FooterContainer, DateGroup, ListGroup } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterContainer>
      <DateGroup>
        <p>{new Date().getFullYear()} &copy;</p>
        <Link to={"https://keenthemes.com/"} target='_blank'>
          keenthemes
        </Link>
      </DateGroup>

      <ListGroup>
        <li>
          <Link to={"https://keenthemes.com/"} target='_blank'>
            About
          </Link>
        </li>
        <li>
          <Link to={"https://keenthemes.com/"} target='_blank'>
            Support
          </Link>
        </li>
        <li>
          <Link to={"https://keenthemes.com/"} target='_blank'>
            Purchase
          </Link>
        </li>
      </ListGroup>
    </FooterContainer>
  );
};

export default Footer;
