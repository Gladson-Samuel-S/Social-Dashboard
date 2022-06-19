import styled from "styled-components";

export const SearchContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.almostTransparent};
  display: flex;
  align-items: center;
  padding: 5px 0px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;

  input {
    width: 300px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: None;
    outline: None;
    padding: 10px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  span {
    padding-left: 20px;
  }

  @media (max-width: 900px) {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.almostTransparent};
    }

    input {
      display: none;
    }

    span {
      padding: 20px;
    }
  }
`;
