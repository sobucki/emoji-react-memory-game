import { render, screen } from "@testing-library/react";
import ConfettiEmoji from "..";

describe("confetti-emoji", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it("should render particles when initialized", async () => {
    vi.mock("@tsparticles/react", () => {
      return {
        __esModule: true,
        default: ({ id }) => <div data-testid={id}></div>,
        initParticlesEngine: () => Promise.resolve(),
      };
    });
    render(<ConfettiEmoji emojis={["🎉", "🎊"]} />);

    const particlesElement = await screen.findByTestId("tsparticles");
    expect(particlesElement).toBeInTheDocument();
  });
});
