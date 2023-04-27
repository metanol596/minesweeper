import cn from 'classnames';

import s from './gameField.module.css';

interface GameFieldProps {
  cellsCount: number;
}

function GameField({ cellsCount }: GameFieldProps): JSX.Element {
  return (
    <div
      className={cn(s.field, {
        [s.first]: cellsCount === 8 * 8,
        [s.second]: cellsCount === 16 * 16,
        [s.third]: cellsCount === 32 * 16,
      })}>
      {Array.from({ length: cellsCount }, (_, i) => (
        <div key={i} className={s.cell}></div>
      ))}
    </div>
  );
}

export default GameField;
