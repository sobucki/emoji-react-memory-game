import { TimerAction, TimerReducerState } from "./types";

function timerReducer(
  state: TimerReducerState,
  action: TimerAction
): TimerReducerState {
  switch (action.type) {
    case "START":
      return { seconds: 0, status: "running" };
    case "PAUSE":
      return { ...state, status: "paused" };
    case "RESUME":
      return { ...state, status: "running" };
    case "STOP":
      return { ...state, status: "stopped", seconds: 0 };
    case "TICK":
      return state.status === "running"
        ? { ...state, seconds: state.seconds + 1 }
        : state;
    default:
      return state;
  }
}

export default timerReducer;
