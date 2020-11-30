/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

// https://0kzn7.csb.app/words/Code-Sagas/center/0a0a1200/663399/ff69b4/00ffff

const textDark = "0a0a12";
const textLight = "eaeaf2";
const rebeccapurple = "663399";
const hotpink = "ff69b4";
const aqua = "00ffff";

export default function Documentation({
  title,
  exampleLink,
  apiLink,
  apiParams = []
}) {
  return (
    <div>
      <h3
        css={css`
          font-size: 24px;
          margin: 48px 0 12px;
        `}
      >
        {title}
      </h3>
      <div>
        <h4
          css={css`
            font-size: 20px;
            margin: 12px 0;
          `}
        >
          Example
        </h4>
        <p>
          <Link
            to={exampleLink}
            css={css`
              color: #${hotpink};
              &:visited {
                color: #${hotpink};
              }
            `}
          >
            {exampleLink}
          </Link>
        </p>
        <h4
          css={css`
            font-size: 20px;
            margin: 12px 0;
          `}
        >
          Explanation
        </h4>
        <p>
          {apiLink.split("/").map((piece) => {
            if (!piece) {
              return null;
            }
            return (
              <Fragment>
                <span
                  css={css`
                    margin: 0 8px;
                    color: #${hotpink};
                  `}
                >
                  {"/"}
                </span>
                <span
                  css={css`
                    color: #${piece.includes(":") ? aqua : "fff"};
                  `}
                >
                  {piece}
                </span>
              </Fragment>
            );
          })}
        </p>
        <ul
          css={css`
            margin: 0 0 0 24px;
          `}
        >
          {apiParams.map(({ param, description }) => (
            <li
              css={css`
                margin: 12px 0;
                color: #${hotpink};
              `}
            >
              <span
                css={css`
                  margin: 12px 0;
                  color: #fff;
                `}
              >
                <span
                  css={css`
                    color: #${aqua};
                  `}
                >
                  {param}
                </span>
                {": "}
                <span
                  css={css`
                    margin: 0 0 0 12px;
                  `}
                >
                  {description}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
