import { FC, useState } from 'react';
import Square from '../Square/Square';

interface BoardProps {
  actualPlayer: 'X' | 'O';
}

const Board: FC<BoardProps> = ({ actualPlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleSquareClick = (index: number) => {
    const nextSquares = squares.slice();
    nextSquares[index] = 'X';
    setSquares(nextSquares);
  };

  return (
    <>
      <div className="flex">
        <Square
          actualPlayer={actualPlayer}
          value={squares[0]}
          onSquareClick={() => handleSquareClick(0)}
        />
        <Square
          actualPlayer={actualPlayer}
          value={squares[1]}
          onSquareClick={() => handleSquareClick(1)}
        />
        <Square
          actualPlayer={actualPlayer}
          value={squares[2]}
          onSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="flex">
        <Square
          actualPlayer={actualPlayer}
          value={squares[3]}
          onSquareClick={() => handleSquareClick(3)}
        />
        <Square
          actualPlayer={actualPlayer}
          value={squares[4]}
          onSquareClick={() => handleSquareClick(4)}
        />
        <Square
          actualPlayer={actualPlayer}
          value={squares[5]}
          onSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="flex">
        <Square
          actualPlayer={actualPlayer}
          value={squares[6]}
          onSquareClick={() => handleSquareClick(6)}
        />
        <Square
          actualPlayer={actualPlayer}
          value={squares[7]}
          onSquareClick={() => handleSquareClick(7)}
        />
        <Square
          actualPlayer={actualPlayer}
          value={squares[8]}
          onSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </>
  );
};

export default Board;
