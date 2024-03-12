import Header from "../components/Header";
import HowToPlayInstruction from "../components/HowToPlayIntruction";
import { BackgroundOpacity } from "../styles/BackgroundOpacity";
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

const StyledArticle = styled.article`
  height: 64%;
  display: flex;
  gap: 2.6%;
  justify-content: center;
`;

const HowToPlay = () => {
  return (
    <BackgroundOpacity as="main">
      <Header heading={heading} />
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
    </BackgroundOpacity>
  );
};

export default HowToPlay;
