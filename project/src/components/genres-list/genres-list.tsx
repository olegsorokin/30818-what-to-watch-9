import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Genre, genres } from '../../constants/genres';

type Props = {
  onChange: (genre: Genre) => void,
  active: string
}

function GenresList({ onChange, active }: Props): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map(({ name, type, to }) => (
          <li
            key={name}
            className={clsx('catalog__genres-item', { 'catalog__genres-item--active': active === name })}
          >
            <Link
              to={to}
              className="catalog__genres-link"
              onClick={() => onChange(type)}
            >
              {name}
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export { GenresList };
