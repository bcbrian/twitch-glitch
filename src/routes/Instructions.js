/** @jsx jsx */

import { css, jsx } from "@emotion/react";

import Glitched from "../components/Glitched";
import Documentation from "../components/Documentation";

// https://0kzn7.csb.app/words/Code-Sagas/center/0a0a1200/663399/ff69b4/00ffff

const textDark = "0a0a12";
const textLight = "eaeaf2";
const rebeccapurple = "663399";
const hotpink = "ff69b4";
const aqua = "00ffff";

const COMMON_PARAMS = [
  {
    param: "background",
    description:
      "This value is for the background and accepts hex values with or with out an alpha, #663399 or #66339922"
  },
  {
    param: "textColor",
    description:
      "This value is for the main text color and accepts hex values with or with out an alpha"
  },
  {
    param: "textShadowColor1",
    description:
      "This value is for the text shadow and accepts hex values with or with out an alpha"
  },
  {
    param: "textShadowColor2",
    description:
      "This value is for the text shadow and accepts hex values with or with out an alpha"
  }
];

export default function Instructions() {
  return (
    <div
      css={css`
        font-family: sans-serif;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 100%;
        background: #${textDark};
        color: #${textLight};
        overflow: auto;

        & h1 {
          font-size: 100px;
          text-decoration: underline;
          color: #${rebeccapurple};
        }
      `}
    >
      <Glitched
        background={textDark}
        textShadowColor1={hotpink}
        textShadowColor2={aqua}
        glitchCount={5}
      >
        <h1>Instructions</h1>
      </Glitched>

      <h3>
        Welcome to the coolest twitch glitch app for
        streamers.
      </h3>
      <p>
        This tool allows you to create a countdown timer or
        word that{" "}
        <Glitched
          component={"span"}
          background={textDark}
          textShadowColor1={hotpink}
          textShadowColor2={aqua}
          glitchCount={5}
        >
          <span>glitches.</span>
        </Glitched>
      </p>
      <div
        css={css`
          margin: 24px;
          width: calc(100% - 48px);
          display: flex;
          flex-flow: column;
          align-items: flex-start;
        `}
      >
        <h3
          css={css`
            font-size: 24px;
            margin: 48px 0 12px;
          `}
        >
          General
        </h3>
        <div>
          This app uses the urls to drive what you see.
          Below are examples and details of how it all
          works.
        </div>
        <Documentation
          title="Timer (count down)"
          exampleLink={`/v1/timer/300000/${textDark}/${rebeccapurple}/${hotpink}/${aqua}`}
          apiLink="/v1/timer/:timeLengthMil/:background/:textColor/:textShadowColor1/:textShadowColor2"
          apiParams={[
            {
              param: "timeLengthMil",
              description:
                "This value is for this field and accepts this type of value"
            },
            ...COMMON_PARAMS
          ]}
        />
        <Documentation
          title="Word"
          exampleLink={`/v1/word/code-sagas/center/${textDark}/${rebeccapurple}/${hotpink}/${aqua}`}
          apiLink="/v1/word/:displayWord/:position/:background/:textColor/:textShadowColor1/:textShadowColor2"
          apiParams={[
            {
              param: "displayWord",
              description:
                "This value is for the displayed word and accepts this a word or words seperated by hyphens"
            },
            {
              param: "position",
              description:
                "This value is for horizontal position and accepts left, center, right, and flexbox values"
            },
            ...COMMON_PARAMS
          ]}
        />
        <Documentation
          title="Word x Number of Times"
          exampleLink={`/v1/word-count/Code-Sagas/5/right/${textDark}/${rebeccapurple}/${hotpink}/${aqua}`}
          apiLink="/v1/word-count/:displayWord/:count/:position/:background/:textColor/:textShadowColor1/:textShadowColor2"
          apiParams={[
            {
              param: "displayWord",
              description:
                "This value is for the displayed word and accepts this a word or words seperated by hyphens"
            },
            {
              param: "count",
              description:
                "This value is for the number of times the word is repeated and accepts a positive integer"
            },
            {
              param: "position",
              description:
                "This value is for horizontal position and accepts left, center, right, and flexbox values"
            },
            ...COMMON_PARAMS
          ]}
        />
        <Documentation
          title="Words"
          exampleLink={`/v1/words/Code-Sagas|React|Firebase/right/${textDark}/${rebeccapurple}/${hotpink}/${aqua}`}
          apiLink="/v1/words/:displayWords/:position/:background/:textColor/:textShadowColor1/:textShadowColor2"
          apiParams={[
            {
              param: "displayWords",
              description:
                "This value is for the words you want to display and accepts word list separeated by pipes(|) and the word list can accepts words sepatated by hyphens, 'one|word-two|three'"
            },
            {
              param: "position",
              description:
                "This value is for horizontal position and accepts left, center, right, and flexbox values"
            },
            ...COMMON_PARAMS
          ]}
        />
      </div>
    </div>
  );
}
