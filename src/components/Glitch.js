/** @jsx jsx */

import { css, jsx, keyframes } from "@emotion/react";
import { useRef } from "react";

import { rand } from "../utils";

export default function Glitch({
  children,
  component: Component = "div",
  background,
  textShadowColor
}) {
  const { current: glitchAnim } = useRef(keyframes`
    0% {
      clip-path: inset(${rand(0, 100)}% 0 ${rand(
    0,
    100
  )}% 0);
    }
    20% {
      clip-path: inset(${rand(0, 100)}% 0 ${rand(
    0,
    100
  )}% 0);
    }
    40% {
      clip-path: inset(${rand(0, 100)}% 0 ${rand(
    0,
    100
  )}% 0);
    }
    60% {
      clip-path: inset(${rand(0, 100)}% 0 ${rand(
    0,
    100
  )}% 0);
    }
    80% {
      clip-path: inset(${rand(0, 100)}% 0 ${rand(
    0,
    100
  )}% 0);
    }
    100% {
      clip-path: inset(${rand(0, 100)}% 0 ${rand(
    0,
    100
  )}% 0);
    }
  `);

  const { current: left } = useRef(rand(0, 10));
  const { current: top } = useRef(rand(0, 10));
  const { current: textShadow } = useRef(rand(0, 10));
  const { current: time1 } = useRef(rand(0, 1));
  const { current: time2 } = useRef(
    time1 > 0 ? rand(0, 3) : rand(5, 9)
  );
  const { current: time } = useRef(`${time1}.${time2}`);

  return (
    <Component
      className="gliched"
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #${background};

        left: ${`${rand(0, 1) ? "-" : ""}${left}px`};
        top: ${`${rand(0, 1) ? "" : "-"}${top}px`};
        text-shadow: ${`${
          rand(0, 10) > 5 ? "-" : ""
        }${textShadow}px`} 0 #${textShadowColor};
        /* transform: scale(${time}); */
        /* opacity: 0.2; */
        animation: ${glitchAnim} ${time}s infinite linear alternate-reverse;
      `}
    >
      {children}
    </Component>
  );
}
