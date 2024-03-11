import { BackButton } from "./ButtonRound";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-weight: lighter;
  text-align: center;
  font-size: var(--desktop-heading-xl);
  background-image: var(--clr-blue-gradient);
  background-clip: text;
  color: transparent;
  transform-style: preserve-3d;
  margin-bottom: 5.7%;

  &::before {
    content: "${(props) => props.shadow}";
    position: absolute;
    text-shadow: var(--desktop-h1-stroke-minus) var(--desktop-h1-stroke-minus) 0
        var(--clr-gray),
      0 var(--desktop-h1-stroke-minus) 0 var(--clr-gray),
      var(--desktop-h1-stroke) var(--desktop-h1-stroke-minus) 0 var(--clr-gray),
      var(--desktop-h1-stroke) 0 0 var(--clr-gray),
      var(--desktop-h1-stroke) var(--desktop-h1-stroke) 0 var(--clr-gray),
      0 var(--desktop-h1-stroke) 0 var(--clr-gray),
      var(--desktop-h1-stroke-minus) var(--desktop-h1-stroke) 0 var(--clr-gray),
      var(--desktop-h1-stroke-minus) 0 0 var(--clr-gray);
    transform: translateZ(-1px);
  }
`;

const Header = (props) => {
  return (
    <>
      <StyledH1 shadow={props.heading} as="h1">
        {props.heading}
        <BackButton />
      </StyledH1>
    </>
  );
};

export default Header;
