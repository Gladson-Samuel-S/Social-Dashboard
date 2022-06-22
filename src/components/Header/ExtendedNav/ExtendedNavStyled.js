import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.neutral};

  .is-sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    padding: 20px 0;
    background-color: ${({ theme }) => theme.colors.neutral};
  }
`;

export const Nav = styled.nav`
  margin: 0 auto;
  width: 1250px;
  max-width: 90%;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  user-select: none;

  p {
    margin-top: 10px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.subText};
    font-weight: 500;
  }

  h3 {
    transition: color 0.2s ease;
  }

  h3 {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
