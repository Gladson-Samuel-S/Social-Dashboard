import styled from "styled-components";

export const ParentElement = styled.div`
  position: relative;
`;

export const Popup = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.neutral};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  padding: 20px 15px;
  border-radius: 5px;
  z-index: 99;
`;

export const PopupTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  padding-left: 5px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.subText};
`;

export const PopupItemsWrapper = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

export const PopupItem = styled.a`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  gap: 30px;
  border-radius: 5px;

  svg {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.subText};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.hover.popup};
  }
`;
