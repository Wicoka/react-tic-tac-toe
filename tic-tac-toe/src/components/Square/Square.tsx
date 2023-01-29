import { FC } from 'react';

interface SquareProps {
  actualPlayer: 'X' | 'O';
}

const Square: FC<SquareProps> = (props) => {
  const handleSquareClick = () => {
    console.log('Square clicked!');
  };
  return (
    <button
      className="h-9 w-9 text-2xl border-2 border-solid border-neutral-600"
      onClick={handleSquareClick}
    >
      X
    </button>
  );
};
export default Square;
