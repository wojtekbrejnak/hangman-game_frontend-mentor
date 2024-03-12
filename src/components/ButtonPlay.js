import ArrowPlay from "./ArrowPlay";
import styled from "styled-components";

const StyledButton = styled.a`
  box-sizing: border-box;

  width: 200px;
  height: 200px;
  position: absolute;
  top: 45%;

  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9d2df5;
  border-radius: 999px;
  display: grid;
  place-items: center;
`;

const ButtonPlay = () => {
  return (
    <StyledButton as="a" href="#">
      <ArrowPlay />
    </StyledButton>
  );
};

export default ButtonPlay;
