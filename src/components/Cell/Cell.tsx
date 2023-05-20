import { useEffect, useState } from 'react';

import { ReactComponent as MineIcon } from './mine.svg';

import s from './cell.module.css';

interface CellProps {
  handleCellClick: () => void;
  cellsCount: number;
  minesCount: number;
  randomMines: number[];
  index: number;
  isGameStart: boolean;
}

function Cell({ handleCellClick, randomMines, index, isGameStart }: CellProps): JSX.Element {
  const [isMine, setIsMine] = useState<boolean>(false);
  console.log(isGameStart);
  console.log(isMine, index, randomMines[index]);
  const handleMineClick = () => {
    if (isGameStart && randomMines.includes(index)) {
      setIsMine(true);
    }
  };

  useEffect(() => {
    if (!isGameStart) {
      setIsMine(false);
    }
  }, [isGameStart]);

  return (
    <button
      className={s.cell}
      onClick={() => {
        handleCellClick();
        handleMineClick();
      }}>
      {randomMines.length !== 0 && isMine && <MineIcon className={s.mine} width={17} height={17} />}
    </button>
  );
}

export default Cell;
