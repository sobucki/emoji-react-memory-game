import { act, renderHook } from "@testing-library/react";
import useGame from "..";

describe("use-game", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  describe("cards", () => {
    it("should return a shuffled and duplicated cards", () => {
      const { result } = renderHook(() => useGame({ optionCards: ["a", "b"] }));

      expect(result.current.cards.length).toEqual(4);
      expect(result.current.cards.filter((i) => i === "a").length).toEqual(2);
      expect(result.current.cards.filter((i) => i === "b").length).toEqual(2);
    });
  });

  describe("onReveal", () => {
    it("should call callback with false when card not match", () => {
      const { result } = renderHook(() => useGame({ optionCards: ["a", "b"] }));

      const callback1 = vitest.fn();
      const callback2 = vitest.fn();

      act(() => {
        result.current.onRevealCard("a", callback1);
      });

      act(() => {
        result.current.onRevealCard("b", callback2);
      });

      vi.runAllTimers();

      expect(callback1).toBeCalledWith(false);
      expect(callback2).toBeCalledWith(false);
    });

    it("should call callback with true when card match", () => {
      const { result } = renderHook(() => useGame({ optionCards: ["a", "b"] }));

      const callback1 = vitest.fn();
      const callback2 = vitest.fn();

      act(() => {
        result.current.onRevealCard("a", callback1);
      });

      act(() => {
        result.current.onRevealCard("a", callback2);
      });

      vi.runAllTimers();

      expect(callback1).toBeCalledWith(true);
      expect(callback2).toBeCalledWith(true);
    });
  });
});
