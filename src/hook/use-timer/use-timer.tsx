import { useEffect, useState } from "react";
import { UseTimerProps } from "./types";
import { formatDigitalTime } from "../../util/formatter";

function useTimer({ initialValue = 0 }: UseTimerProps) {
  const [seconds, setSeconds] = useState(initialValue);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let interval: number;
    if (!paused) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [paused]);

  const pauseFunction = () => setPaused(true);
  const resumeFunction = () => setPaused(false);

  return {
    seconds,
    formatted: formatDigitalTime(seconds),
    pause: pauseFunction,
    resume: resumeFunction,
  };
}

export default useTimer;
