import styled from "styled-components";

export const BackgroundOpacity = styled.main`
  &::before {
    position: absolute;
    inset: 0;
    content: "";
    height: 100%;
    width: 100%;
    background-image: var(--clr-background-gradient);
    opacity: 75%;
    z-index: -1;
  }
`;
