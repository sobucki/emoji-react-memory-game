import { useEffect, useState } from "react";
import { UseTimerProps } from "./types";
import { formatDigitalTime } from "../../util/formatter";

function useTimer({ initialValue = 0 }: UseTimerProps) {
  const [seconds, setSeconds] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { seconds, formatted: formatDigitalTime(seconds) };
}

export default useTimer;
