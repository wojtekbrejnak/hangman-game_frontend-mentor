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
  }
`;

const HowToPlay = () => {
  return (
    <main>
      <StyledHeading shadow={heading}>
        <Header heading={heading} />
      </StyledHeading>
      <article>
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
      </article>
    </main>
  );
};

export default HowToPlay;
