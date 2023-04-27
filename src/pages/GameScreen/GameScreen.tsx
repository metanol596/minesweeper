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

  const handleCellClick = () => {
    setIsGameStart(true);
  };

  return (
    <section className={s.game}>
      <Link to={'/'} className={s.toSettingsButton}>
        To settings
      </Link>
      <Timer isGameStart={isGameStart} />
      Счётчик: {minesCount - FLAG_COUNT}
      <GameField cellsCount={cellsCount} handleCellClick={handleCellClick} />
    </section>
  );
}

export default GameScreen;
