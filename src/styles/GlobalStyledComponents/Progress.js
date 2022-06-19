import styled from "styled-components";

export const Progress = styled.div`
  height: 4px;
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  border-radius: 5px;

  .progressBar {
    height: 4px;
    width: ${({ w }) => w};
    background-color: ${({ bg }) => bg};
  }
`;
