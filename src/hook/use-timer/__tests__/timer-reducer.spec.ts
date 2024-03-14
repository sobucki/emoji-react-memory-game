import timerReducer from "../timer-reducer";
import { TimerAction, TimerReducerState } from "../types";

describe("timerReducer", () => {
  const initialState: TimerReducerState = { seconds: 0, status: "stopped" };

  it("should handle START action", () => {
    const action: TimerAction = { type: "START" };
    const expectedState = { seconds: 0, status: "running" };
    expect(timerReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle PAUSE action", () => {
    const runningState: TimerReducerState = { seconds: 10, status: "running" };
    const action: TimerAction = { type: "PAUSE" };
    const expectedState = { seconds: 10, status: "paused" };
    expect(timerReducer(runningState, action)).toEqual(expectedState);
  });

  it("should handle RESUME action", () => {
    const pausedState: TimerReducerState = { seconds: 10, status: "paused" };
    const action: TimerAction = { type: "RESUME" };
    const expectedState = { seconds: 10, status: "running" };
    expect(timerReducer(pausedState, action)).toEqual(expectedState);
  });

  it("should handle STOP action", () => {
    const runningState: TimerReducerState = { seconds: 10, status: "running" };
    const action: TimerAction = { type: "STOP" };
    const expectedState = { seconds: 0, status: "stopped" };
    expect(timerReducer(runningState, action)).toEqual(expectedState);
  });

  it("should handle TICK action when running", () => {
    const runningState: TimerReducerState = { seconds: 10, status: "running" };
    const action: TimerAction = { type: "TICK" };
    const expectedState = { seconds: 11, status: "running" };
    expect(timerReducer(runningState, action)).toEqual(expectedState);
  });

  it("should not handle TICK action when not running", () => {
    const pausedState: TimerReducerState = { seconds: 10, status: "paused" };
    const action: TimerAction = { type: "TICK" };
    expect(timerReducer(pausedState, action)).toEqual(pausedState);
  });

  it("should not handle when action is unknown", () => {
    const initialState: TimerReducerState = { seconds: 0, status: "stopped" };
    const action = { type: "UNKNOWN" };
    expect(timerReducer(initialState, action as TimerAction)).toEqual(
      initialState
    );
  });
});
