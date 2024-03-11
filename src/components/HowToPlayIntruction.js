import styled from "styled-components";

const StyledSection = styled.section`
  background-color: white;
  border-radius: 8.5%;
  width: 40%;
  padding: 5% 3.5%;
  text-align: center;

  h2,
  h3,
  p {
    font-weight: lighter;
  }

  h2 {
    font-size: var(--desktop-heading-l);
    color: var(--clr-blue);
    margin-bottom: 14.7%;
  }

  h3 {
    font-size: var(--desktop-heading-m);
    color: var(--clr-dark-navy);
    letter-spacing: 0.05em;
    margin-bottom: 15%;
  }

  p {
    font-size: var(--desktop-body);
    color: var(--clr-purple);
    letter-spacing: 0.05em;
    padding-inline: 0.2em;
    line-height: 1.2em;
  }
`;

const HowToPlayInstruction = (props) => {
  return (
    <StyledSection as="section">
      <h2>{props.number}</h2>
      <h3>{props.topic}</h3>
      <p>{props.paragraph}</p>
    </StyledSection>
  );
};

export default HowToPlayInstruction;
