import { useEffect, useReducer } from "react";
import { TimerReducerState, UseTimerProps } from "./types";
import { formatDigitalTime } from "../../util/formatter";
import timerReducer from "./timer-reducer";

function useTimer({ initialValue = 0, status = "stopped" }: UseTimerProps) {
  const initialState: TimerReducerState = {
    seconds: initialValue,
    status,
  };

  const [state, dispatch] = useReducer(timerReducer, initialState);

  useEffect(() => {
    let interval: number;
    if (state.status === "running") {
      interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.status]);

  const start = () => dispatch({ type: "START" });
  const pause = () => dispatch({ type: "PAUSE" });
  const resume = () => dispatch({ type: "RESUME" });
  const stop = () => dispatch({ type: "STOP" });

  return {
    seconds: state.seconds,
    formatted: formatDigitalTime(state.seconds),
    start,
    pause,
    resume,
    stop,
    status: state.status,
  };
}

export default useTimer;
