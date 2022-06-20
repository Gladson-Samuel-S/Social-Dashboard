import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  @media (max-width: 900px) {
    flex-direction: row-reverse;
  }
`;

export const DateGroup = styled.div`
  display: flex;
  gap: 8px;

  p {
    color: ${({ theme }) => theme.colors.subText};
  }
`;

export const ListGroup = styled.ul`
  display: flex;
  gap: 16px;
`;
