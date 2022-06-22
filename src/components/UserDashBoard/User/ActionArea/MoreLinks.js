import { useState } from "react";
import {
  Line,
  Popup,
  PopupItem,
  PopupItemsWrapper,
} from "../../../../styles/GlobalStyledComponents/CustomPopup/Popup";
import Portal from "../../../../styles/GlobalStyledComponents/Portal/Portal";
import { usePopper } from "react-popper";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

const MoreLinks = ({ PopupLinks }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [isMoreLinksActive, setIsMoreLinks] = useState(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "left-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return (
    <PopupItemsWrapper ref={setReferenceElement}>
      {PopupLinks.map((item) => (
        <PopupItem
          key={item.text}
          onMouseOver={() => item.extraLinks != null && setIsMoreLinks(true)}
        >
          {item.text}
          {item.icon !== "" && <AiFillInfoCircle />}
          {item.extraLinks !== null && <BsChevronRight />}
          {item.extraLinks !== null && isMoreLinksActive && (
            <Portal>
              <Popup
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                onMouseLeave={() => setIsMoreLinks(false)}
              >
                <PopupItemsWrapper>
                  {item.extraLinks.text.map((link) => (
                    <PopupItem key={link}>{link}</PopupItem>
                  ))}
                </PopupItemsWrapper>
              </Popup>
            </Portal>
          )}
        </PopupItem>
      ))}
    </PopupItemsWrapper>
  );
};

export default MoreLinks;
