import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './gameSettings.module.css';

interface GameSettingsProps {
  setMinesCount: (item: number) => void;
}

interface Level {
  level: string;
  cells: string;
  mine: number;
}

const GAME_LEVELS: Level[] = [
  { level: 'Простой', cells: '8x8', mine: 10 },
  { level: 'Средний', cells: '16x16', mine: 40 },
  { level: 'Сложный', cells: '32x16', mine: 100 },
];

function GameSettings({ setMinesCount }: GameSettingsProps) {
  const [currentLevel, setCurrentLevel] = useState<Level>(GAME_LEVELS[0]);

  useEffect(() => {
    setMinesCount(currentLevel.mine);
  }, [currentLevel.mine, setMinesCount]);

  const handleLevelClick = (level: Level) => {
    setCurrentLevel(level);
  };

  return (
    <section className={s.settings}>
      <h1 className={s.heading}>Уровень сложности:</h1>
      <ul className={s.list}>
        {GAME_LEVELS.map((item) => (
          <li key={item.level} className={s.item} onClick={() => handleLevelClick(item)}>
            {item.level}
          </li>
        ))}
      </ul>
      <div className={s.currLevel}>
        <div className={s.settingItemText}>
          Поле: <span className={s.settingText}>{currentLevel.cells}</span>
        </div>
        <div className={s.settingItemText}>
          Количество мин: <span className={s.settingText}>{currentLevel.mine}</span>
        </div>
      </div>
      <Link to={'/game'} className={s.button}>
        Играть
      </Link>
    </section>
  );
}

export default GameSettings;
