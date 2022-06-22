import { useState } from "react";
import { ActionArea } from "../UserStyled";
import { OutlinedButton } from "../../../../styles/GlobalStyledComponents/Buttons/SecondaryButton";
import { PrimaryButton } from "../../../../styles/GlobalStyledComponents/Buttons/PrimaryButton";
import { TiTick } from "react-icons/ti";
import {
  ParentElement,
  Popup,
  PopupTitle,
} from "../../../../styles/GlobalStyledComponents/CustomPopup/Popup";
import Portal from "../../../../styles/GlobalStyledComponents/Portal/Portal";
import { usePopper } from "react-popper";
import { PopupLinks } from "../../../../Data/Dashboard-data/UserData";
import MoreLinks from "./MoreLinks";

const ActionAreaComponent = ({ CardData }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  const [follow, setFollow] = useState("Follow");
  const [isMoreBtnActive, setIsMoreBtn] = useState(false);

  return (
    <ActionArea>
      {follow === "Follow" ? (
        <OutlinedButton
          bg={({ theme }) => theme.colors.grey}
          clr={({ theme }) => theme.colors.text}
          onClick={() =>
            follow === "Follow" ? setFollow("Following") : setFollow("Follow")
          }
        >
          {follow}
        </OutlinedButton>
      ) : (
        <OutlinedButton
          bg={({ theme }) => theme.colors.lightBlue}
          clr={({ theme }) => theme.colors.white}
          onClick={() =>
            follow === "Follow" ? setFollow("Following") : setFollow("Follow")
          }
        >
          <TiTick />
          {follow}
        </OutlinedButton>
      )}

      <PrimaryButton>{CardData.hireMe}</PrimaryButton>

      <ParentElement>
        <OutlinedButton
          ref={setReferenceElement}
          bg={({ theme }) => theme.colors.grey}
          clr={({ theme }) => theme.colors.text}
          onClick={() => setIsMoreBtn(!isMoreBtnActive)}
        >
          {CardData.more}
        </OutlinedButton>
      </ParentElement>

      {isMoreBtnActive && (
        <Portal>
          <Popup
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <PopupTitle>Payments</PopupTitle>
            <MoreLinks PopupLinks={PopupLinks} />
          </Popup>
        </Portal>
      )}
    </ActionArea>
  );
};

export default ActionAreaComponent;
