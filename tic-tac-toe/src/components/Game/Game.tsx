import { FC } from 'react';
import Board from '../Board/Board';

interface GameProps {}

const Game: FC<GameProps> = () => {
  const actualPlayer = 'X';
  return (
    <div>
      Game Component
      <Board actualPlayer={actualPlayer} />
    </div>
  );
};

export default Game;
