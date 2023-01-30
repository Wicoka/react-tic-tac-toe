import { FC } from 'react';

interface SquareProps {
  value: string;
  onSquareClick: any;
}

const Square: FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className="h-9 w-9 text-2xl border-2 border-solid border-neutral-600"
      onClick={() => onSquareClick()}
    >
      {value}
    </button>
  );
};
export default Square;
