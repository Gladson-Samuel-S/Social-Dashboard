import styled from "styled-components";

export const ToolTip = styled.div`
  .tooltip {
    position: relative;
  }

  .tooltip::before,
  .tooltip::after {
    position: absolute;
    top: -0.25rem;
    left: 50%;
    transform: translateX(-50%) translateY(-100%) scale 1;
    transition: 150ms transform;
    transform-origin: bottom center;
  }

  .tooltip::before {
    content: attr(dat-tooltip);
    background-color: ${({ theme }) => theme.colors.neutral};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    width: max-content;
    max-width: 100%;
  }

  .tooltip:hover::before {
    scale: 1;
  }
`;
