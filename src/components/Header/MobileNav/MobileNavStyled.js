import styled from "styled-components";
import { PopupItem } from "../../../styles/GlobalStyledComponents/CustomPopup/Popup";

export const Wrapper = styled.div`
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.neutral};

  .LinkWrapper {
    margin-top: 20px;
  }
`;

export const StyledLinks = styled(PopupItem)`
  user-select: none;
  font-size: 14px;
  font-weight: 500;
  gap: 50px;
`;

export const MoreStyledLinks = styled(PopupItem)`
  user-select: none;
  font-size: 14px;
  font-weight: 500;
  justify-content: start;
  gap: 10px;
`;
