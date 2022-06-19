import styled from "styled-components";

export const AppBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 80px;
`;

export const Nav = styled.div`
  margin: 0 auto;
  width: 1200px;
  max-width: 90%;

  img {
    height: 30px;
  }
`;
