import { BackButton } from "./ButtonRound";

const Header = (props) => {
  return (
    <>
      <BackButton />
      <h1>{props.heading}</h1>
    </>
  );
};

export default Header;
