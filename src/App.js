/** @jsx jsx */

import { jsx } from "@emotion/react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import GlitchedTimer from "./routes/GlitchedTimer";
import GlitchedWord from "./routes/GlitchedWord";
import GlitchedWordCount from "./routes/GlitchedWordCount";
import GlitchedWords from "./routes/GlitchedWords";
import Instructions from "./routes/Instructions";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/v1/timer/:timeLengthMil/:background/:textColor/:textShadowColor1/:textShadowColor2">
          <GlitchedTimer />
        </Route>
        <Route path="/v1/timer">
          <GlitchedTimer />
        </Route>
        <Route path="/v1/words/:displayWords/:position/:background/:textColor/:textShadowColor1/:textShadowColor2">
          <GlitchedWords />
        </Route>
        <Route path="/v1/word-count/:count/:position/:displayWord/:background/:textColor/:textShadowColor1/:textShadowColor2">
          <GlitchedWordCount />
        </Route>
        <Route path="/v1/word/:displayWord/:position/:background/:textColor/:textShadowColor1/:textShadowColor2">
          <GlitchedWord />
        </Route>
        <Route path="/v1/word">
          <GlitchedWord />
        </Route>
        <Route path="/v1/">
          <Instructions />
        </Route>
        <Route path="/">
          <Instructions />
        </Route>
      </Switch>
    </Router>
  );
}
