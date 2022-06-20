import styled from "styled-components";
import { ListGroup } from "../../Footer/FooterStyled";

// Header
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
  flex-direction: column;
  gap: 10px;
`;

export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Breadcrumbs = styled(ListGroup)`
  font-size: 12px;
  font-weight: 500;
  gap: 10px;
  color: ${({ theme }) => theme.colors.subText};
  counter-reset: my-awesome-counter;

  li {
    counter-increment: my-awesome-counter;
    cursor: pointer;

    &::before {
      content: "●";
      margin-right: 5px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.subText};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

// Main
export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.neutral};
  margin-top: 30px;
  padding: 32px 32px 0px 32px;
`;

export const Card = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const Avatar = styled.div`
  .AvatarWrapper {
    width: max-content;
    position: relative;
  }

  img {
    border-radius: 5px;
    height: 160px;
    width: 160px;
  }

  @media (max-width: 768px) {
    img {
      height: 100px;
      width: 100px;
    }
  }
`;

export const Dot = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: 4px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;

  position: absolute;
  bottom: 0;
  left: 100%;
  transform: translate(-50%, -50%);
`;

export const UserDetails = styled.div`
  h2 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  .data {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    a {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.subText};
      transition: color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    svg {
      margin-right: 5px;
    }
  }

  @media (max-width: 768px) {
    .data {
      a {
        font-size: 12px;
      }
    }
  }
`;

export const BoxContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  h2 {
    font-size: 20px;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.subText};
  }

  .wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    .up {
      color: ${({ theme }) => theme.colors.lightBlue};
    }
    .down {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const ActionArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProfileCompletion = styled.div`
  .progress {
    width: 350px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    p {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.subText};
    }

    h5 {
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    .progress {
      width: 250px;
    }
  }
`;
