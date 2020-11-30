/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useLocation, useParams } from "react-router-dom";

import { rand, replaceAll } from "../utils";
import Glitched from "../components/Glitched";
import { useGlitchPosition } from "../hooks/useGlitchPosition";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function GlitchedWord() {
  const query = useQuery();
  let {
    displayWord,
    position,
    background,
    textColor,
    textShadowColor1,
    textShadowColor2
  } = useParams();

  displayWord = displayWord
    ? replaceAll(displayWord, "-", " ")
    : displayWord;

  const justifyContent = useGlitchPosition(position);

  return (
    <div
      css={css`
        font-family: sans-serif;
        height: 100%;
        width: 100%;
        background: #${background};
        color: #${textColor};
        position: relative;

        & h1 {
          font-size: ${rand(50, 100)}px;
          white-space: nowrap;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          top: ${rand(0, 100)}%;
          left: ${rand(0, 100)}%;

          display: flex;
          justify-content: ${justifyContent};
          align-items: center;
        `}
      >
        <Glitched
          background={background}
          textShadowColor1={textShadowColor1}
          textShadowColor2={textShadowColor2}
          glitchCount={5}
        >
          <h1>{displayWord}</h1>
        </Glitched>
      </div>
    </div>
  );
}
