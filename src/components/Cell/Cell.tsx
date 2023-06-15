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
}

function Cell({
  handleCellClick,
  randomMines,
  index,
  isGameStart,
  setIsGameStart,
  setIsFieldBlock,
}: CellProps): JSX.Element {
  const [isMine, setIsMine] = useState<boolean>(false);

  useEffect(() => {
    if (!isGameStart) {
      setIsMine(false);
    }
  }, [isGameStart]);

  const handleMineClick = () => {
    if (isGameStart && randomMines.includes(index)) {
      setIsMine(true);
      //setIsGameStart(false);
      setIsFieldBlock(true);
    }
  };

  return (
    <button
      className={cn(s.cell, { [s.isMine]: isMine })}
      onClick={() => {
        handleCellClick();
        handleMineClick();
      }}>
      {randomMines.length !== 0 && isMine && <MineIcon className={s.mine} width={19} height={19} />}
    </button>
  );
}

export default Cell;
