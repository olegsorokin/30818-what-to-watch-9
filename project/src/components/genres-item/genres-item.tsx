import { SyntheticEvent } from 'react';
import clsx from 'clsx';

import { GenreEnum } from '../../constants/genres';
import { TGenre } from '../../types/genre';

type Props = {
  genre: TGenre;
  onChange: (genre: GenreEnum) => void;
  active: string;
}

function GenresItem({ genre, onChange, active }: Props): JSX.Element {
  const handleClick = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    onChange(genre.type);
  };

  return (
    <li
      className={clsx('catalog__genres-item', { 'catalog__genres-item--active': active === genre.type })}
    >
      <a
        href="/#"
        className="catalog__genres-link"
        onClick={handleClick}
      >
        {genre.name}
      </a>
    </li>
  );
}

export { GenresItem };
