import { Link } from 'react-router-dom';
import { Timer } from '../../components';

import s from './gameScreen.module.css';

function GameScreen() {
  return (
    <section className={s.game}>
      <Link to={'/'} className={s.toSettingsButton}>
        To settings
      </Link>
      <Timer />
    </section>
  );
}

export default GameScreen;
