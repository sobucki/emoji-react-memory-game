import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import useTimer from "..";

describe("useTimer hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("should start with the initial value", () => {
    const initialValue = 10;
    const { result, unmount } = renderHook(() => useTimer({ initialValue }));

    expect(result.current.seconds).toBe(initialValue);
    unmount();
  });

  it("should increment the timer by 1 every second", () => {
    const { result, unmount } = renderHook(() => useTimer({}));

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.seconds).toBe(1);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.seconds).toBe(3);
    unmount();
  });

  it("should clean up the interval when the component is unmounted", () => {
    const { result, unmount } = renderHook(() => useTimer({}));
    unmount();
    vi.advanceTimersByTime(1000);

    expect(result.current.seconds).toBe(0);
  });
});