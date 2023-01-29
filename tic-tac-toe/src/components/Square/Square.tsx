import { FC } from 'react';

interface SquareProps {
  actualPlayer: 'X' | 'O';
  value: 'X' | 'O' | null;
  onSquareClick: any;
}

const Square: FC<SquareProps> = ({ actualPlayer, value, onSquareClick }) => {
  return (
    <button
      className="h-9 w-9 text-2xl border-2 border-solid border-neutral-600"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
export default Square;
