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
    expect(result.current.formatted).toBe("00:10");
    unmount();
  });

  it("should increment the timer by 1 every second", () => {
    const { result, unmount } = renderHook(() => useTimer({}));

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.seconds).toBe(1);
    expect(result.current.formatted).toBe("00:01");

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.seconds).toBe(3);
    expect(result.current.formatted).toBe("00:03");
    unmount();
  });

  it("should clean up the interval when the component is unmounted", () => {
    const { result, unmount } = renderHook(() => useTimer({}));
    unmount();
    vi.advanceTimersByTime(1000);

    expect(result.current.seconds).toBe(0);
    expect(result.current.formatted).toBe("00:00");
  });

  it("should can pause the timer", () => {
    const { result, unmount } = renderHook(() => useTimer({}));

    expect(result.current.pause).toEqual(expect.any(Function));

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.seconds).toBe(1);
    expect(result.current.formatted).toBe("00:01");

    act(() => {
      result.current.pause();
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.seconds).toBe(1);
    expect(result.current.formatted).toBe("00:01");
    unmount();
  });

  it("should can pause and resume the timer", () => {
    const { result, unmount } = renderHook(() => useTimer({}));

    expect(result.current.pause).toEqual(expect.any(Function));

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.seconds).toBe(1);
    expect(result.current.formatted).toBe("00:01");

    act(() => {
      result.current.pause();
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.seconds).toBe(1);
    expect(result.current.formatted).toBe("00:01");

    act(() => {
      result.current.resume();
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.seconds).toBe(3);
    expect(result.current.formatted).toBe("00:03");

    unmount();
  });
});
