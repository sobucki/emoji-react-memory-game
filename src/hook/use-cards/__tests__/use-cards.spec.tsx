import { renderHook } from "@testing-library/react";
import useCards from "../use-cards";

describe("use-cards", () => {
  it("should return a list of cards when informed level and category", () => {
    const { result } = renderHook(() => useCards());

    result.current.shuffleCards({ level: "easy", category: "animals" });

    expect(result.current.shuffledCards).toHaveLength(10);
  });
});
