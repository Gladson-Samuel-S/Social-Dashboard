import styled from "styled-components";

// Header of Projects Section
export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    color: ${({ theme }) => theme.colors.subText};
  }
`;

export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;

  select {
    border: none;
    border-radius: 6px;
    padding: calc(0.55rem + 1px) calc(1.25rem + 1px);
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: none;
    }
  }
`;

// Main Section
export const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 32px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .image-wrapper {
    padding: 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Status = styled.div`
  background-color: ${({ bg }) => bg};
  color: ${({ clr }) => clr};
  font-size: 12px;
  font-weight: 500;
  padding: 10px;
  border-radius: 5px;
`;

export const CardBody = styled.div`
  margin: 20px 0;
  font-weight: 500;
  line-height: 1.7;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.subText};
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Details = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const Box = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: 2px dotted ${({ theme }) => theme.colors.grey};
`;
