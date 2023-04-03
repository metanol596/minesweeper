import { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './gameSettings.module.css';

const GAME_LEVELS = [
  { level: 'Простой', cells: '8x8', time: '10min' },
  { level: 'Средний', cells: '16x16', time: '40min' },
  { level: 'Сложный', cells: '32x16', time: '100min' },
];

function GameSettings() {
  const [currentLevel, setCurrentLevel] = useState<string>();

  return (
    <section className={s.settings}>
      <h1 className={s.heading}>Уровень сложности:</h1>
      <ul className={s.list}>
        {GAME_LEVELS.map((item) => (
          <li key={item.level} className={s.item}>
            {item.level}
          </li>
        ))}
      </ul>
      <Link to={'/game'} className={s.button}>
        Играть
      </Link>
    </section>
  );
}

export default GameSettings;
