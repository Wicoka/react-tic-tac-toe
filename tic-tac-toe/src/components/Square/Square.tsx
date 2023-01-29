import { FC } from 'react';

interface SquareProps {}

const Square: FC<SquareProps> = () => (
  <button className="h-9 w-9 text-2xl border-2 border-solid border-neutral-600">
    X
  </button>
);

export default Square;
