/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useRef } from "react";
import Glitch from "./Glitch";

export default function Glitched({
  children,
  component: Component = "div",
  glitchCount = 1,
  background = "fff",
  textShadowColor1 = "fff",
  textShadowColor2 = "fff",
  ...props
}) {
  const { current: glitchCountArray } = useRef([
    ...new Array(glitchCount)
  ]);
  return (
    <Component
      css={css`
        position: relative;
      `}
    >
      {glitchCountArray.map((a, i) => (
        <Glitch
          key={i}
          background={background}
          textShadowColor={textShadowColor1}
          component={Component}
        >
          {children}
        </Glitch>
      ))}
      <Component
        css={css`
          position: relative;
          opacity: 0;
        `}
      >
        {children}
      </Component>
      {glitchCountArray.map((a, i) => (
        <Glitch
          key={i}
          background={background}
          textShadowColor={textShadowColor2}
          component={Component}
        >
          {children}
        </Glitch>
      ))}
    </Component>
  );
}
