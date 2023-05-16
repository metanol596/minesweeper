import { useState } from 'react';
import cn from 'classnames';

import Cell from '../Cell/Cell';

import s from './gameField.module.css';

interface GameFieldProps {
  cellsCount: number;
  minesCount: number;
  handleCellClick: () => void;
  randomMines: number[];
}

function GameField({
  cellsCount,
  handleCellClick,
  minesCount,
  randomMines,
}: GameFieldProps): JSX.Element {
  return (
    <div
      className={cn(s.field, {
        [s.first]: cellsCount === 8 * 8,
        [s.second]: cellsCount === 16 * 16,
        [s.third]: cellsCount === 32 * 16,
      })}>
      {Array.from({ length: cellsCount }, (_, i) => (
        <Cell
          key={i}
          handleCellClick={handleCellClick}
          cellsCount={cellsCount}
          minesCount={minesCount}
          randomMines={randomMines}
          index={i}
        />
      ))}
    </div>
  );
}

export default GameField;
