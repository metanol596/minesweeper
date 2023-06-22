import { useEffect, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as MineIcon } from './mine.svg';

import s from './cell.module.css';

interface CellProps {
  handleCellClick: (index: number) => void;
  cellsCount: number;
  minesCount: number;
  randomMines: number[];
  index: number;
  isGameStart: boolean;
  setIsGameStart: (f: boolean) => void;
  setIsFieldBlock: (f: boolean) => void;
  isFieldBlock: boolean;
  fieldSize: { cols: number; rows: number };
}

function Cell({
  handleCellClick,
  randomMines,
  index,
  isGameStart,
  setIsGameStart,
  setIsFieldBlock,
  isFieldBlock,
  fieldSize,
}: CellProps): JSX.Element {
  const [isMine, setIsMine] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [nearbyMinesCount, setNearbyMinesCount] = useState<number>(0);
  //const [isNearbyMine, setIsNearbyMine] = useState<boolean>(false);
  //const [visitedCells, setVisitedCells] = useState<number[]>([]);

  const colsCount = fieldSize.cols;

  useEffect(() => {
    if (!isGameStart) {
      setIsMine(false);
    }
  }, [randomMines]);

  useEffect(() => {
    if (!isFieldBlock && !isGameStart && randomMines.length === 0) {
      setIsDisabled(false);
    }
  }, [isFieldBlock, isGameStart, randomMines.length]);

  const calculateNearbyMinesCount = () => {
    let count = 0;

    const nearbyCells = [
      index - colsCount - 1,
      index - colsCount,
      index - colsCount + 1,
      index - 1,
      index + 1,
      index + colsCount + 1,
      index + colsCount,
      index + colsCount - 1,
    ];
    console.log(nearbyCells);

    nearbyCells.forEach((cellIndex) => {
      console.log(cellIndex);
      if (randomMines.includes(cellIndex)) {
        count = count + 1;
        console.log(count);
      }
    });

    return count;
  };

  //const openNearbyCells = (cellIndex: number, visitedCells: number[]) => {
  //  if (visitedCells.includes(cellIndex)) {
  //    return;
  //  }

  //  const updatedVisitedCells = [...visitedCells, cellIndex];

  //  setVisitedCells(updatedVisitedCells);

  //  nearbyCells.forEach((cell) => {
  //    if (!randomMines.includes(cell) && !updatedVisitedCells.includes(cell)) {
  //      openNearbyCells(cell, updatedVisitedCells);
  //    }
  //  });

  //  setIsDisabled(true);
  //};

  const handleMineClick = () => {
    if (randomMines.includes(index)) {
      setIsMine(true);
      setIsGameStart(false);
      setIsFieldBlock(true);
    } else {
      const count = calculateNearbyMinesCount();

      setNearbyMinesCount(count);
      //setIsNearbyMine(true);
      setIsDisabled(true);

      //if (count === 0 && isNearbyMine) {
      //  openNearbyCells(index, visitedCells);
      //}
    }
  };

  const handleOver = (index: number) => {
    console.log(index);
  };

  return (
    <button
      className={cn(s.cell, {
        [s.isMine]: isMine,
        [s.disabled]: isDisabled,
      })}
      onClick={() => {
        handleCellClick(index);
        handleMineClick();
      }}
      onMouseEnter={() => handleOver(index)}
      disabled={isDisabled}>
      {isMine && <MineIcon className={s.mine} width={19} height={19} />}
      <span>{nearbyMinesCount}</span>
    </button>
  );
}

export default Cell;
