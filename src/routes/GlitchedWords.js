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
    displayWords,
    position,
    background,
    textColor,
    textShadowColor1,
    textShadowColor2
  } = useParams();
  displayWords = displayWords.split("|");
  displayWords = displayWords.map((displayWord) =>
    displayWord
      ? replaceAll(displayWord, "-", " ")
      : displayWord
  );

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
        overflow: hidden;

        & h1 {
          font-size: ${rand(50, 100)}px;
          white-space: nowrap;
        }
      `}
    >
      {displayWords.map((displayWord, i) => (
        <div
          key={i}
          css={css`
            /* position: absolute; */
            /* top: ${rand(0, 100)}%;
            left: ${rand(0, 100)}%; */
            padding: 0 24px;
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
      ))}
    </div>
  );
}
