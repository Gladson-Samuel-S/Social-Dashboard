import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
`;

export const PaginationStatus = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

export const PaginationLinksWrapper = styled.ul`
  display: flex;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 10px;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  span {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.neutral};
  }

  .active {
    padding: 5px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.neutral};
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.neutral};
    }
  }
`;
