import styled from "styled-components";

export const SideDrawer = styled.aside`
  background-color: ${({ theme }) => theme.colors.neutral};
  width: ${({ w }) => w};
  max-width: 100%;
  display: flex;
  overflow: auto;
  z-index: 110;
  position: fixed;
  top: 0;
  bottom: 0;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 109;
  background-color: rgba(0, 0, 0, 0.2);
`;
