import styled from "styled-components";

const StyledSVG = styled.svg`
  /* position: absolute; */
  /* top: 23.5%;
  left: 28.5%; */
  /* height: calc(39 / 1024 * var(--desktop-height-scaled)); */
  /* width: calc(41 / 1024 * var(--desktop-height-scaled)); */
`;

const ArrowPlay = () => {
  return (
    <StyledSVG
      width="67"
      height="64"
      viewBox="0 0 67 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_110_30)">
        <path
          d="M3.38098 33.3968L3.09824 31.5516C0.657153 15.62 -0.563392 7.65422 4.02606 3.32072C8.6155 -1.01278 16.3102 0.839911 31.6996 4.54529L33.7353 5.03544C54.7417 10.0933 65.245 12.6222 66.786 20.0537C68.327 27.4853 59.7268 34.1336 42.5264 47.4302L40.7734 48.7853C26.7921 59.5934 19.8014 64.9974 13.6226 62.4546C7.44369 59.9117 6.08945 51.0734 3.38098 33.3968Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_110_30"
          x="0.924561"
          y="0.811523"
          width="66.0377"
          height="62.2642"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.188235 0 0 0 0 0.254902 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_110_30"
          />
        </filter>
      </defs>
    </StyledSVG>
  );
};

export default ArrowPlay;
