const HowToPlayInstruction = (props) => {
  return (
    <section>
      <h2>{props.number}</h2>
      <h3>{props.topic}</h3>
      <p>{props.paragraph}</p>
    </section>
  );
};

export default HowToPlayInstruction;
