import styled from "styled-components";
import Tippy from "@tippyjs/react";

export const ToolTip = styled(Tippy)`
  background-color: ${({ theme }) => theme.colors.tooltip};
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
`;
