import { Link } from 'react-router-dom';
import { Timer } from '../../components';

import s from './gameScreen.module.css';

interface GameScreenProps {
  minesCount: number;
}

const FLAG_COUNT = 0;

function GameScreen({ minesCount }: GameScreenProps) {
  console.log(minesCount);
  return (
    <section className={s.game}>
      <Link to={'/'} className={s.toSettingsButton}>
        To settings
      </Link>
      <Timer />
      Счётчик: {minesCount - FLAG_COUNT}
    </section>
  );
}

export default GameScreen;
