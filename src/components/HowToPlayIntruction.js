import styled from "styled-components";

const StyledSection = styled.section`
  background-color: white;
  border-radius: 8.5%;
  width: 40%;
  padding: 5% 3.5%;
  text-align: center;
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
