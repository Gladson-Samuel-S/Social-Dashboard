import styled from "styled-components";
import { Tabs } from "react-tabs";

export const TabsStyled = styled(Tabs)`
  -webkit-tap-highlight-color: transparent;
  margin-top: -20px;

  .wrapper {
    background-color: ${({ theme }) => theme.colors.neutral};
    padding: 32px 32px 0 32px;
  }

  .react-tabs__tab-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .react-tabs__tab {
    position: relative;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.subText};
    transition: color 0.2s ease;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 0 20px 0;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }

  .react-tabs__tab--selected {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .react-tabs__tab--disabled {
    color: GrayText;
    cursor: default;
  }

  .react-tabs__tab:focus {
    outline: none;
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    margin: 10px 0;
    display: block;
  }
`;
