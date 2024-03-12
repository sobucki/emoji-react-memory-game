import { useEffect, useState } from "react";
import { UseTimerProps } from "./types";

function useTimer({ initialValue = 0 }: UseTimerProps) {
  const [seconds, setSeconds] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { seconds };
}

export default useTimer;
