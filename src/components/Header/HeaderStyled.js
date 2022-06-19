import styled from "styled-components";

export const AppBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  margin: 0 auto;
  width: 1250px;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    height: 30px;
  }

  @media (max-width: 768px) {
    img {
      height: 25px;
    }
  }
`;

export const NavAction = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.white};

  svg {
    font-size: 20px;
  }
`;
