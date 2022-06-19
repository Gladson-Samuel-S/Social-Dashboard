import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: calc(0.55rem + 1px) calc(1.25rem + 1px);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover:not([disabled]) {
    color: ${({ theme }) => theme.colors.hover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
