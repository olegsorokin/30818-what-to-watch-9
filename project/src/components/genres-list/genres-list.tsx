import { GenreEnum, genres } from '../../constants/genres';
import { GenresItem } from '../genres-item/genres-item';

type Props = {
  onChange: (genre: GenreEnum) => void;
  active: string;
}

function GenresList({ onChange, active }: Props): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <GenresItem key={genre.name} active={active} genre={genre} onChange={onChange} />
        ))
      }
    </ul>
  );
}

export { GenresList };
