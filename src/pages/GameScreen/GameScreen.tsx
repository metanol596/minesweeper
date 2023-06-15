import { useState } from 'react';
import { Link } from 'react-router-dom';

import { GameField, Timer } from '../../components';

import s from './gameScreen.module.css';

interface GameScreenProps {
  minesCount: number;
  cellsCount: number;
}

const FLAG_COUNT = 0;

function GameScreen({ minesCount, cellsCount }: GameScreenProps): JSX.Element {
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [randomMines, setRandomMines] = useState<number[]>([]);

  const handleCellClick = () => {
    if (!isGameStart) {
      let randomMines = Array.from({ length: cellsCount }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, minesCount);

      setRandomMines(randomMines);
    }

    setIsGameStart(true);
  };

  const handleRestartClick = () => {
    setIsGameStart(false);
    setRandomMines([]);
  };

  return (
    <section className={s.game}>
      <div className={s.gap}>
        <Link to={'/'} className={s.toSettingsButton}>
          To settings
        </Link>
        <button className={s.restartButton} onClick={handleRestartClick}>
          Restart
        </button>
      </div>
      <Timer isGameStart={isGameStart} />
      <div className={s.count}>{minesCount - FLAG_COUNT}</div>
      <GameField
        cellsCount={cellsCount}
        minesCount={minesCount}
        handleCellClick={handleCellClick}
        randomMines={randomMines}
        isGameStart={isGameStart}
        setIsGameStart={setIsGameStart}
      />
    </section>
  );
}

export default GameScreen;
