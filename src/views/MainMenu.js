import ButtonHowToPlay from "../components/ButtonHowToPlay";
import ButtonPlay from "../components/ButtonPlay";
import Logo from "../components/Logo";
import MainMenuRectangle from "../components/MainMenuRectangle";
import styled from "styled-components";

const StyledMain = styled.main`
  position: relative;
  display: grid;
  justify-items: center;
`;

const MainMenu = () => {
  return (
    <StyledMain>
      <Logo />
      <MainMenuRectangle />
      <ButtonPlay />
      <ButtonHowToPlay />
    </StyledMain>
  );
};

export default MainMenu;
