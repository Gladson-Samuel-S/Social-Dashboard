import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  aside {
    display: none;
  }

  @media (max-width: 960px) {
    main {
      display: none;
    }
    aside {
      display: block;
    }
  }
`;

export const AppBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.white};

  svg {
    display: none;
    font-size: 18px;
  }

  @media (max-width: 950px) {
    svg {
      display: block;
    }
  }
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
    gap: 10px;

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

  @media (max-width: 768px) {
    gap: 5px;
  }
`;
