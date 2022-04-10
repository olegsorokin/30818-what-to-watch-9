import React from 'react';

type Props = {
  onClick: () => void;
}

function ShowMore({ onClick }: Props): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
}

export { ShowMore };
