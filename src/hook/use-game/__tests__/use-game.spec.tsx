import { act, renderHook } from "@testing-library/react";
import useGame from "..";

const pauseMock = vi.fn();

vi.mock("../../use-timer", () => ({
  __esModule: true,
  default: vi.fn(() => ({
    seconds: 0,
    formatted: "00:00:00",
    pause: pauseMock,
  })),
}));

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
    beforeEach(() => {
      // tell vitest we use mocked time
      vi.useFakeTimers();
    });

    afterEach(() => {
      // restoring date after each test run
      vi.useRealTimers();
    });
    it("should call callback with false when card not match", async () => {
      const { result } = renderHook(() => useGame({ optionCards: ["a", "b"] }));

      const callback1 = vitest.fn();
      const callback2 = vitest.fn();

      act(() => {
        result.current.onRevealCard("a", callback1);
      });

      act(() => {
        result.current.onRevealCard("b", callback2);
      });

      await vi.runAllTimersAsync();
      // await act(async () => {
      // result.current.onRevealCard("a", callback1);
      // });

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

  describe("counter moves", () => {
    it("should moves stars with zero", () => {
      const { result } = renderHook(() => useGame({ optionCards: ["a", "b"] }));

      expect(result.current.moves).toEqual(0);
    });

    it("should incremente when reveal a matched pair of cards", () => {
      const { result } = renderHook(() => useGame({ optionCards: ["a", "b"] }));

      act(() => {
        result.current.onRevealCard("a", vitest.fn());
      });

      act(() => {
        result.current.onRevealCard("a", vitest.fn());
      });

      vi.runAllTimers();

      expect(result.current.moves).toEqual(1);
    });

    it("should incremente when reveal a different pair of cards", () => {
      const { result } = renderHook(() => useGame({ optionCards: ["a", "b"] }));

      act(() => {
        result.current.onRevealCard("a", vitest.fn());
      });

      act(() => {
        result.current.onRevealCard("b", vitest.fn());
      });

      vi.runAllTimers();

      expect(result.current.moves).toEqual(1);
    });
  });

  describe("Rules", () => {
    describe("Win game", () => {
      it("should set win false when not match all cards of table", () => {
        const { result } = renderHook(() =>
          useGame({ optionCards: ["a", "b"] })
        );

        expect(result.current.win).toEqual(false);

        act(() => {
          result.current.onRevealCard("a", vitest.fn());
        });

        act(() => {
          result.current.onRevealCard("b", vitest.fn());
        });

        vi.runAllTimers();

        expect(result.current.win).toEqual(false);
      });

      it("should set win true when match all cards of table", () => {
        const { result } = renderHook(() =>
          useGame({ optionCards: ["a", "b"] })
        );

        expect(result.current.win).toEqual(false);

        act(() => {
          result.current.onRevealCard("a", vitest.fn());
        });

        act(() => {
          result.current.onRevealCard("a", vitest.fn());
        });

        vi.runAllTimers();

        expect(result.current.win).toEqual(false);

        act(() => {
          result.current.onRevealCard("b", vitest.fn());
        });

        act(() => {
          result.current.onRevealCard("b", vitest.fn());
        });

        vi.runAllTimers();

        expect(result.current.win).toEqual(true);
      });

      it("should pause timer when win the game", () => {
        const { result } = renderHook(() => useGame({ optionCards: ["a"] }));

        expect(result.current.win).toEqual(false);

        act(() => {
          result.current.onRevealCard("a", vitest.fn());
        });

        act(() => {
          result.current.onRevealCard("a", vitest.fn());
        });

        vi.runAllTimers();

        expect(pauseMock).toBeCalled();
      });
    });
  });
});
