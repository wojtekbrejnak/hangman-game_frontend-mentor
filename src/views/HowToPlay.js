import Header from "../components/Header";
import HowToPlayInstruction from "../components/HowToPlayIntruction";
import "./styles.css";
import styled from "styled-components";
import {
  number01,
  topic01,
  paragraph01,
  number02,
  topic02,
  paragraph02,
  number03,
  topic03,
  paragraph03,
  heading,
} from "../data/text";

const StyledHeading = styled.h1`
  h1::before {
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
const StyledArticle = styled.article`
  height: 64%;
  display: flex;
  gap: 2.6%;
  justify-content: center;
`;

const HowToPlay = () => {
  return (
    <main>
      <StyledHeading shadow={heading}>
        <Header heading={heading} />
      </StyledHeading>
      <StyledArticle as="article">
        <HowToPlayInstruction
          number={number01}
          topic={topic01}
          paragraph={paragraph01}
        />
        <HowToPlayInstruction
          number={number02}
          topic={topic02}
          paragraph={paragraph02}
        />
        <HowToPlayInstruction
          number={number03}
          topic={topic03}
          paragraph={paragraph03}
        />
      </StyledArticle>
    </main>
  );
};

export default HowToPlay;
