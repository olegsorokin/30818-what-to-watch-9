import { SyntheticEvent } from 'react';
import clsx from 'clsx';

import { Genre } from '../../types/genre';

type Props = {
  genre: Genre;
  onChange: (genre: Genre) => void;
  active: string;
}

function GenresItem({ genre, onChange, active }: Props): JSX.Element {
  const handleAnchorClick = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    onChange(genre);
  };

  return (
    <li
      className={clsx('catalog__genres-item', { 'catalog__genres-item--active': active === genre })}
    >
      <a
        href="/#"
        className="catalog__genres-link"
        onClick={handleAnchorClick}
      >
        {genre}
      </a>
    </li>
  );
}

export { GenresItem };
