import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Card from "..";

describe("Card tests", () => {
  describe("Rendering", () => {
    it("should render a button with question mark symbol", () => {
      render(<Card value="A" />);
      expect(screen.getByRole("button", { name: /\?/i })).toBeInTheDocument();
    });
  });
});
