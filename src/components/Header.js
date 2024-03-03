import ButtonRound from "./ButtonRound";

const Header = (props) => {
  return (
    <>
      <ButtonRound />
      <h1>{props.heading}</h1>
    </>
  );
};

export default Header;
