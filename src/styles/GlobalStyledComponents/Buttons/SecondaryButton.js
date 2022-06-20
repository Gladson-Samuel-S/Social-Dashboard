import styled from "styled-components";

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: calc(0.55rem + 1px) calc(1.25rem + 1px);
  background-color: ${({ bg }) => bg};
  color: ${({ clr }) => clr};
  font-size: 12px;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const OutlinedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: calc(0.55rem + 1px) calc(1.25rem + 1px);
  background-color: ${({ bg }) => bg};
  color: ${({ clr }) => clr};
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover:not([disabled]) {
    background-color: ${({ hover }) => hover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
