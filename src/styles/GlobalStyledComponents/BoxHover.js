import styled from "styled-components";

export const BoxHover = styled.div`
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.almostTransparent};
  }
`;
