import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { ConfettiEmojiProps } from "./types";

import type { Engine } from "tsparticles-engine";
import type { Engine as EngineNew } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadSquareShape } from "tsparticles-shape-square";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import { initParticlesEngine } from "@tsparticles/react";

const ConfettiEmoji = ({ emojis, display }: ConfettiEmojiProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine as unknown as EngineNew);
      await loadCircleShape(engine as unknown as Engine);
      await loadSquareShape(engine as unknown as Engine);
      await loadConfettiPreset(engine as unknown as Engine);
    }).then(() => {
      setIsInitialized(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      emitters: {
        position: {
          x: 50,
          y: 50,
        },
        rate: {
          quantity: 10,
          delay: 0.15,
        },
      },
      particles: {
        color: {
          value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
        },
        move: {
          decay: 0.05,
          direction: "top",
          enable: true,
          gravity: {
            enable: true,
          },
          outModes: {
            top: "none",
            default: "destroy",
          },
          speed: {
            min: 50,
            max: 100,
          },
        },
        number: {
          value: 200,
        },
        opacity: {
          value: 1,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "random",
          animation: {
            enable: true,
            speed: 30,
          },
        },
        tilt: {
          direction: "random",
          enable: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 30,
          },
        },
        size: {
          value: 5,
          animation: {
            enable: true,
            startValue: "min",
            count: 1,
            speed: 16,
            sync: true,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 25,
          },
          enlighten: {
            enable: true,
            value: 25,
          },
          enable: true,
          speed: {
            min: 5,
            max: 15,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            min: -7,
            max: 7,
          },
        },

        shape: {
          type: ["circle", "square", "star", "emoji"],
          options: {
            emoji: {
              particles: {
                size: {
                  value: 18,
                },
              },
              value: emojis || ["💩", "🤡", "🍀", "🍙", "🦄", "⭐️"],
            },
          },
        },
      },

      detectRetina: true,
    }),
    [emojis]
  );

  if (isInitialized && display) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ConfettiEmoji;
