import {
  Popup,
  PopupItem,
  PopupItemsWrapper,
} from "../../../styles/GlobalStyledComponents/CustomPopup/Popup";
import { BsDot } from "react-icons/bs";

const ExtendedNavLinks = ({ moreLinks, handleMouseLeave }) => {
  return (
    <Popup
      moreLinks={moreLinks}
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: "10px" }}
    >
      <PopupItemsWrapper>
        {moreLinks.map((link, index) => (
          <PopupItem
            key={index}
            style={{
              justifyContent: "start",
              gap: "5px",
            }}
          >
            <BsDot />
            {link}
          </PopupItem>
        ))}
      </PopupItemsWrapper>
    </Popup>
  );
};

export default ExtendedNavLinks;
