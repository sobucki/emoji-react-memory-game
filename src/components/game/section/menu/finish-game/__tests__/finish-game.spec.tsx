import { fireEvent, render, screen } from "@testing-library/react";
import FinishGameMenu from "..";
import { MenuProps } from "../types";

describe("finish-menu", () => {
  const defaultProps: MenuProps = {
    isOpen: true,
    moves: 0,
    seconds: 0,
    onStart: vi.fn(),
  };
  const renderMenu = (props: MenuProps = defaultProps) => {
    render(<FinishGameMenu {...props} />);
  };
  it("should render correctly", () => {
    renderMenu({ ...defaultProps, isOpen: true });
    expect(
      screen.getByRole("heading", {
        name: /congratulations/i,
      })
    ).toBeInTheDocument();
  });

  it("should not render menu when isOpen is false", () => {
    renderMenu({ ...defaultProps, isOpen: false });
    expect(
      screen.queryByRole("heading", {
        name: /congratulations/i,
      })
    ).not.toBeInTheDocument();
  });

  it("should render time and moves correctly", () => {
    renderMenu({ ...defaultProps, moves: 10, seconds: 60 });
    expect(
      screen.getByText(/you finished in 60 seconds with 10 moves/i)
    ).toBeInTheDocument();
  });

  it("should call onStart function when press on play again button", () => {
    renderMenu();
    fireEvent.click(
      screen.getByRole("button", {
        name: /play again/i,
      })
    );
    expect(defaultProps.onStart).toBeCalled();
  });
});
