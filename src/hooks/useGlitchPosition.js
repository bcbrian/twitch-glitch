const { useRef } = require("react");

export function useGlitchPosition(position) {
  const { current: justifyContent } = useRef(
    ((position) => {
      switch (position) {
        case "middle":
        case "center":
          return "center";
        case "rignt":
          return "flex-end";
        case "left":
          return "flex-start";
        default:
          return position;
      }
    })(position)
  );

  return justifyContent;
}
