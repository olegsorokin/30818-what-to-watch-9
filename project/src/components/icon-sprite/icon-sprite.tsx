import { SymbolAdd, SymbolFullScreen, SymbolInList, SymbolPause } from '../icon';

function IconSprite(): JSX.Element {
  return (
    <div className="visually-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <SymbolAdd />
        <SymbolFullScreen />
        <SymbolInList />
        <SymbolPause />
      </svg>
    </div>
  );
}

export { IconSprite };
