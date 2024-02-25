const HowToPlayInstruction = (props) => {
  return (
    <article>
      <h3>{props.number}</h3>
      <h4>{props.topic}</h4>
      <p>{props.paragraph}</p>
    </article>
  );
};

export default HowToPlayInstruction;
