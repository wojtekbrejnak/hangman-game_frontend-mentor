import styled from "styled-components";

const StyledButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 64px;
  gap: 8px;

  width: 260px;
  height: 62px;
  position: absolute;
  top: 71%;

  background: #2463ff;
  box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #3c74ff;
  border-radius: 40px;
`;

const ButtonHowToPlay = () => {
  return (
    <StyledButton as="a" href="#">
      How to Play
    </StyledButton>
  );
};

export default ButtonHowToPlay;
