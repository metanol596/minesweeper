import { Timer } from '../../components';

import s from './gameScreen.module.css';

function GameScreen() {
  return (
    <section className={s.game}>
      <Timer />
    </section>
  );
}

export default GameScreen;
