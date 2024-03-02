import Header from "../components/Header";
import HowToPlayInstruction from "../components/HowToPlayIntruction";
import "./styles.css";
import styled from "styled-components";

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
    transform: translateZ(-1px);var(--clr-gray)
`;

const number01 = "01";
const topic01 = "CHOOSE A CATEGORY";
const paragraph01 =
  "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.";
const number02 = "02";
const topic02 = "GUESS LETTERS";
const paragraph02 =
  "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.";
const number03 = "03";
const topic03 = "WIN OR LOSE";
const paragraph03 =
  "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.";
const heading = "How to Play";

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
