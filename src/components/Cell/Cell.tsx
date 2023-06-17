import { useEffect, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as MineIcon } from './mine.svg';

import s from './cell.module.css';

interface CellProps {
  handleCellClick: () => void;
  cellsCount: number;
  minesCount: number;
  randomMines: number[];
  index: number;
  isGameStart: boolean;
  setIsGameStart: (f: boolean) => void;
  setIsFieldBlock: (f: boolean) => void;
  isFieldBlock: boolean;
}

function Cell({
  handleCellClick,
  randomMines,
  index,
  isGameStart,
  setIsGameStart,
  setIsFieldBlock,
  isFieldBlock,
}: CellProps): JSX.Element {
  const [isMine, setIsMine] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  console.log(isDisabled);
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

  const handleMineClick = () => {
    if (randomMines.includes(index)) {
      setIsMine(true);
      setIsGameStart(false);
      setIsFieldBlock(true);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <button
      className={cn(s.cell, { [s.isMine]: isMine, [s.disabled]: isDisabled })}
      onClick={() => {
        handleCellClick();
        handleMineClick();
      }}
      disabled={isDisabled}>
      {isMine && <MineIcon className={s.mine} width={19} height={19} />}
    </button>
  );
}

export default Cell;
