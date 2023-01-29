import { FC } from 'react';
import Square from '../Square/Square';

interface BoardProps {
  actualPlayer: 'X' | 'O';
}

const Board: FC<BoardProps> = ({ actualPlayer }) => (
  <>
    <div className="flex">
      <Square actualPlayer={actualPlayer} />
      <Square actualPlayer={actualPlayer} />
      <Square actualPlayer={actualPlayer} />
    </div>
    <div className="flex">
      <Square actualPlayer={actualPlayer} />
      <Square actualPlayer={actualPlayer} />
      <Square actualPlayer={actualPlayer} />
    </div>
    <div className="flex">
      <Square actualPlayer={actualPlayer} />
      <Square actualPlayer={actualPlayer} />
      <Square actualPlayer={actualPlayer} />
    </div>
  </>
);

export default Board;
