import { useState } from 'react';
import cn from 'classnames';

import Cell from '../Cell/Cell';

import s from './gameField.module.css';

interface GameFieldProps {
  cellsCount: number;
  minesCount: number;
  handleCellClick: (index: number) => void;
  randomMines: number[];
  isGameStart: boolean;
  setIsGameStart: (f: boolean) => void;
  setIsFieldBlock: (f: boolean) => void;
  isFieldBlock: boolean;
  fieldSize: { cols: number; rows: number };
}

function GameField({
  cellsCount,
  handleCellClick,
  minesCount,
  randomMines,
  isGameStart,
  setIsGameStart,
  isFieldBlock,
  setIsFieldBlock,
  fieldSize,
}: GameFieldProps): JSX.Element {
  return (
    <div
      className={cn(s.field, {
        [s.first]: cellsCount === 8 * 8,
        [s.second]: cellsCount === 16 * 16,
        [s.third]: cellsCount === 32 * 16,
        [s.fieldBlock]: isFieldBlock,
      })}>
      {Array.from({ length: cellsCount }, (_, i) => (
        <Cell
          key={i}
          handleCellClick={handleCellClick}
          cellsCount={cellsCount}
          minesCount={minesCount}
          randomMines={randomMines}
          index={i}
          isGameStart={isGameStart}
          setIsGameStart={setIsGameStart}
          setIsFieldBlock={setIsFieldBlock}
          isFieldBlock={isFieldBlock}
          fieldSize={fieldSize}
        />
      ))}
    </div>
  );
}

export default GameField;
