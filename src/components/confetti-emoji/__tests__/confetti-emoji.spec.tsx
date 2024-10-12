/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, screen } from "@testing-library/react";
import ConfettiEmoji from "..";

describe("confetti-emoji", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it("should render particles when display", async () => {
    vi.mock("@tsparticles/react", () => {
      return {
        __esModule: true,
        //@ts-expect-error
        default: ({ id }) => <div data-testid={id}></div>,
        initParticlesEngine: () => Promise.resolve(),
      };
    });
    render(<ConfettiEmoji emojis={["🎉", "🎊"]} display />);

    const particlesElement = await screen.findByTestId("tsparticles");
    expect(particlesElement).toBeInTheDocument();
  });
  it("should not render particles when not display yet", async () => {
    vi.mock("@tsparticles/react", () => {
      return {
        __esModule: true,
        //@ts-expect-error
        default: ({ id }) => <div data-testid={id}></div>,
        initParticlesEngine: () => Promise.resolve(),
      };
    });
    render(<ConfettiEmoji emojis={["🎉", "🎊"]} display={false} />);

    const particlesElement = screen.queryByTestId("tsparticles");
    expect(particlesElement).not.toBeInTheDocument();
  });
});
