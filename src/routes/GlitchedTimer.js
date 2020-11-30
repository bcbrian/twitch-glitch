/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useLocation, useParams } from "react-router-dom";

import Glitched from "../components/Glitched";
import Timer from "../components/Timer";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function GlitchedTimer() {
  const query = useQuery();
  let {
    timeLengthMil,
    background,
    textColor,
    textShadowColor1,
    textShadowColor2
  } = useParams();

  return (
    <div
      css={css`
        font-family: sans-serif;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: #${background};
        color: #${textColor};

        & h1 {
          font-size: 100px;
        }
      `}
    >
      <Glitched
        background={background}
        textShadowColor1={textShadowColor1}
        textShadowColor2={textShadowColor2}
        glitchCount={5}
      >
        <h1>
          <Timer
            timerLengthMil={timeLengthMil || query.get("time") || undefined}
          />
        </h1>
      </Glitched>
    </div>
  );
}
