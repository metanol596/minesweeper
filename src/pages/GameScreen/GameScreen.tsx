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
  //const [isCellClick, setIsCellClick] = useState<boolean>(false);

  //let randomMines = Array.from({ length: cellsCount }, (_, i) => i)
  //  .sort(() => Math.random() - 0.5)
  //  .slice(0, minesCount);

  const handleCellClick = () => {
    setIsGameStart(true);
    //setIsCellClick(true);
  };

  const handleRestartClick = () => {
    setIsGameStart(false);
  };

  return (
    <section className={s.game}>
      <Link to={'/'} className={s.toSettingsButton}>
        To settings
      </Link>
      <button onClick={handleRestartClick}>Restart</button>
      <Timer isGameStart={isGameStart} />
      Счётчик: {minesCount - FLAG_COUNT}
      <GameField
        cellsCount={cellsCount}
        minesCount={minesCount}
        handleCellClick={handleCellClick}
        //isCellClick={isCellClick}
        //randomMines={randomMines}
      />
    </section>
  );
}

export default GameScreen;
