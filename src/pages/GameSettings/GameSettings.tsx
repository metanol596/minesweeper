import { Link } from 'react-router-dom';

import s from './gameSettings.module.css';
import { Level } from '../../App';

interface GameSettingsProps {
  currentLevel: Level;
  setCurrentLevel: (item: Level) => void;
  levels: Level[];
}

function GameSettings({ setCurrentLevel, levels, currentLevel }: GameSettingsProps): JSX.Element {
  const handleLevelClick = (level: Level) => {
    setCurrentLevel(level);
  };

  return (
    <section className={s.settings}>
      <h1 className={s.heading}>Уровень сложности:</h1>
      <ul className={s.list}>
        {levels.map((item) => (
          <li key={item.level} className={s.item} onClick={() => handleLevelClick(item)}>
            {item.level}
          </li>
        ))}
      </ul>
      <div className={s.currLevel}>
        <div className={s.settingItemText}>
          Поле: <span className={s.settingText}>{currentLevel.field}</span>
        </div>
        <div className={s.settingItemText}>
          Количество мин: <span className={s.settingText}>{currentLevel.mines}</span>
        </div>
      </div>
      <Link to={'/game'} className={s.button}>
        Играть
      </Link>
    </section>
  );
}

export default GameSettings;
