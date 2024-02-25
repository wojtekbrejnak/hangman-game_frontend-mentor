const HowToPlayInstruction = (props) => {
  return (
    <section>
      <h3>{props.number}</h3>
      <h4>{props.topic}</h4>
      <p>{props.paragraph}</p>
    </section>
  );
};

export default HowToPlayInstruction;
