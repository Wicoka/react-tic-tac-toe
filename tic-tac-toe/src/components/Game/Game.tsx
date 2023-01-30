import { FC, useState } from 'react';
import Board from '../Board/Board';

interface GameProps {}

const Game: FC<GameProps> = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: string[]) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };
  return (
    <div>
      <div>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={(nextSquares: string[]) => handlePlay(nextSquares)}
        />
      </div>
      <div>
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
};

export default Game;
