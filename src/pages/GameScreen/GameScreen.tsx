import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GameField, Timer } from '../../components';

import s from './gameScreen.module.css';

import { Level } from '../../App';

interface GameScreenProps {
  currentLevel: Level;
}

const FLAG_COUNT = 0;

function GameScreen({ currentLevel }: GameScreenProps): JSX.Element {
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [randomMines, setRandomMines] = useState<number[]>([]);
  const [isFieldBlock, setIsFieldBlock] = useState<boolean>(false);

  const cellsCount = currentLevel.fieldSize.cols * currentLevel.fieldSize.rows;

  const handleCellClick = (index: number) => {
    if (!isGameStart) {
      let randomMines = Array.from(
        { length: currentLevel.fieldSize.cols * currentLevel.fieldSize.rows },
        (_, i) => i,
      )
        .filter((item) => item !== index)
        .sort(() => Math.random() - 0.5)
        .slice(0, currentLevel.mines);

      setRandomMines(randomMines);
    }

    setIsGameStart(true);
  };

  const handleRestartClick = () => {
    setIsGameStart(false);
    setRandomMines([]);
    setIsFieldBlock(false);
  };

  console.log(randomMines);

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
      <Timer isGameStart={isGameStart} randomMines={randomMines} />
      <div className={s.count}>{currentLevel.mines - FLAG_COUNT}</div>
      <GameField
        cellsCount={cellsCount}
        minesCount={currentLevel.mines}
        handleCellClick={handleCellClick}
        randomMines={randomMines}
        isGameStart={isGameStart}
        setIsGameStart={setIsGameStart}
        isFieldBlock={isFieldBlock}
        setIsFieldBlock={setIsFieldBlock}
        fieldSize={currentLevel.fieldSize}
      />
    </section>
  );
}

export default GameScreen;
