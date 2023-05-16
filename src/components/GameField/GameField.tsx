import { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as MineIcon } from './mine.svg';

import s from './gameField.module.css';

interface GameFieldProps {
  cellsCount: number;
  minesCount?: number;
  handleCellClick?: () => void;
  isCellClick?: boolean;
  randomMines?: number[];
}

function GameField({
  cellsCount,
}: //minesCount,
//handleCellClick,
//isCellClick,
//randomMines,
GameFieldProps): JSX.Element {
  return (
    <div
      className={cn(s.field, {
        [s.first]: cellsCount === 8 * 8,
        [s.second]: cellsCount === 16 * 16,
        [s.third]: cellsCount === 32 * 16,
      })}>
      {Array.from({ length: cellsCount }, (_, i) => (
        <button key={i} className={s.cell} />
      ))}
    </div>
  );
}

export default GameField;
