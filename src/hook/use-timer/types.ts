export type TimerState = "running" | "paused" | "stopped";
export type TimerAction = {
  type: "START" | "PAUSE" | "RESUME" | "STOP" | "TICK";
};

export type UseTimerProps = {
  initialValue?: number;
  status?: TimerState;
};

export interface TimerReducerState {
  seconds: number;
  status: TimerState;
}
