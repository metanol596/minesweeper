import { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as MineIcon } from './mine.svg';

import s from './cell.module.css';

interface CellProps {
  handleCellClick: () => void;
  cellsCount: number;
  minesCount: number;
  randomMines: number[];
  index: number;
}

function Cell({ handleCellClick, randomMines, index }: CellProps): JSX.Element {
  const [isMine, setIsMine] = useState<boolean>(false);

  const handleMineClick = () => {
    if (randomMines.includes(index)) setIsMine(true);
  };

  return (
    <button
      className={s.cell}
      onClick={() => {
        handleCellClick();
        handleMineClick();
      }}>
      {isMine && <MineIcon className={s.mine} width={17} height={17} />}
    </button>
  );
}

export default Cell;
