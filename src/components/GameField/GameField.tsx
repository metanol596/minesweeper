import cn from 'classnames';

import { ReactComponent as MineIcon } from './mine.svg';

import s from './gameField.module.css';

interface GameFieldProps {
  cellsCount: number;
  handleCellClick: () => void;
}

function GameField({ cellsCount, handleCellClick }: GameFieldProps): JSX.Element {
  return (
    <div
      className={cn(s.field, {
        [s.first]: cellsCount === 8 * 8,
        [s.second]: cellsCount === 16 * 16,
        [s.third]: cellsCount === 32 * 16,
      })}>
      {Array.from({ length: cellsCount }, (_, i) => (
        <div key={i} className={s.cell} onClick={handleCellClick}></div>
      ))}
      <MineIcon width={18} height={18} />
    </div>
  );
}

export default GameField;
