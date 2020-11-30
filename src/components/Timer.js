import { useEffect, useRef, useState } from "react";

export default function Timer({
  // Timer length in mil default  is 5min
  timerLengthMil = 5 * 60 * 1000
}) {
  const { current: timerLength } = useRef(
    parseInt(timerLengthMil, 10)
  );
  const { current: startTime } = useRef(Date.now());
  const { current: stopTimer } = useRef(
    startTime + timerLength
  );
  const [time, setTime] = useState(startTime);
  const [timerStopped, setTimerStopepd] = useState(true);
  useEffect(() => {
    if (stopTimer < Date.now()) {
      return setTimerStopepd(true);
    } else {
      setTimerStopepd(false);
    }
    const handle = setTimeout(() => {
      setTime(stopTimer - Date.now());
    }, 100);
    return () => {
      clearTimeout(handle);
    };
  }, [time, stopTimer]);
  const minutes = Math.floor(time / 1000 / 60);
  const milMinutes = minutes * 1000 * 60;
  const seconds = Math.floor((time - milMinutes) / 1000);
  const milSeconds = seconds * 1000;
  const tenths = Math.floor(
    (time - milMinutes - milSeconds) / 100
  );
  return timerStopped
    ? "00:00:00"
    : `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}:${tenths}0`;
}
