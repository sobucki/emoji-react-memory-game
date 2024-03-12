import { renderHook } from "@testing-library/react";
import useGame from "..";

describe("use-game", () => {
  it("should return a shuffled and duplicated cards", () => {
    const { result } = renderHook(() => useGame({ optionCards: ["a", "b"] }));

    expect(result.current.cards.length).toEqual(4);
    expect(result.current.cards.filter((i) => i === "a").length).toEqual(2);
    expect(result.current.cards.filter((i) => i === "b").length).toEqual(2);
  });
});
