import React from 'react';

type Props = {
  onClick: () => void,
  hidden?: boolean
}

function ShowMore({ hidden = true, onClick }: Props): JSX.Element {
  return (
    <div className="catalog__more" hidden={hidden}>
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
}

export { ShowMore };
