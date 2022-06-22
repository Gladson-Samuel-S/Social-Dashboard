import styled from "styled-components";

const TestWrapper = styled.div`
  margin-top: 30px;
  height: 400px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};

  background-image: url("/Assets/Temp/Factory.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Temp = () => {
  return (
    <TestWrapper>
      <h3>In Development ...</h3>
    </TestWrapper>
  );
};

export default Temp;
