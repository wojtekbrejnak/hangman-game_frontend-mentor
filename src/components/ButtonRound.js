import Arrow from "./Arrow";
import styled from "styled-components";

const StyledButton = styled.a`
  width: 0.7em;
  height: 0.7em;
  border-radius: 50%;
  position: absolute;
  top: 0.22em;
  background-image: var(--clr-pink-gradient);
  left: 0;
  box-shadow: inset 0 -0.05em 0.007em hsla(273, 75%, 49%, 0.4);
  z-index: 1;
  transition: opacity, box-shadow 300ms;
  display: grid;

  &::before {
    content: "";
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover::before {
    cursor: pointer;
    opacity: 15%;
  }

  &:hover {
    box-shadow: inset 0 -0.05em 0.007em 0.055em hsla(273, 88%, 49%, 0.4);
  }
`;

const ButtonRound = () => {
  return (
    <StyledButton>
      <a href="#" className="back-button">
        <Arrow />
      </a>
    </StyledButton>
  );
};

export default ButtonRound;
