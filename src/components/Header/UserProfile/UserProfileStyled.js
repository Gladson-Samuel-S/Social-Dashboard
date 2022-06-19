import styled from "styled-components";

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;

  div {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;

    p:nth-child(2) {
      font-weight: normal;
    }
  }

  img {
    border-radius: 5px;
    height: 40px;
    width: 40px;
  }
`;
