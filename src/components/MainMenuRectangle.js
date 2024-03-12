import styled from "styled-components";

const StyledRectangle = styled.div`
  height: calc(500 / 1024 * var(--desktop-height-scaled));
  width: calc(592 / 1024 * var(--desktop-height-scaled));
  position: absolute;
  top: 30%;

  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: inset 0px -8px 0px 4px #140e66, inset 0px 6px 0px 8px #2463ff;
  border-radius: calc(72 / 1024 * var(--desktop-height-scaled));
`;

const MainMenuRectangle = () => {
  return <StyledRectangle />;
};

export default MainMenuRectangle;
