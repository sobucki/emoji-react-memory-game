import Card from "./section/card";
import { Header, Table } from "./styles";
import useGame from "../../hook/use-game";
import Menu from "./section/menu/start-game";
import { FormType } from "./section/menu/start-game/types";
import { useEffect, useState } from "react";
import ConfettiEmoji from "../confetti-emoji";
import FinishGameMenu from "./section/menu/finish-game";
import type { Engine } from "tsparticles-engine";
import type { Engine as EngineNew } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadSquareShape } from "tsparticles-shape-square";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import { initParticlesEngine } from "@tsparticles/react";

function Game() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine as unknown as EngineNew);
      await loadCircleShape(engine as unknown as Engine);
      await loadSquareShape(engine as unknown as Engine);
      await loadConfettiPreset(engine as unknown as Engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const { cards, onRevealCard, moves, time, startGame, win, seconds, restart } =
    useGame();
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const onStartMenu = ({ category, level, optionsCards }: FormType) => {
    setIsOpenMenu(false);
    startGame({ category, level, optionsCards });
  };

  const restartGame = () => {
    restart();
    setIsOpenMenu(true);
  };

  return (
    <>
      <Header>
        <div>time: {time}</div>
        <div>moves: {moves}</div>
      </Header>
      <Table>
        {cards.map((emoji, index) => (
          <Card key={emoji + index} value={emoji} onClick={onRevealCard} />
        ))}
      </Table>
      <Menu isOpen={isOpenMenu} onSubmit={onStartMenu} />
      {win && (
        <>
          <FinishGameMenu
            isOpen
            moves={moves}
            seconds={seconds}
            onStart={restartGame}
          />
          <ConfettiEmoji emojis={cards} initialized={init} />
        </>
      )}
    </>
  );
}

export default Game;
