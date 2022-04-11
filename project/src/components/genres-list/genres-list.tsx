import { GenresItem } from '../genres-item/genres-item';
import { useAppSelector } from '../../hooks';
import { Genre } from '../../types/genre';
import { genres as genresSelector } from '../../store/selectors';

type Props = {
  onChange: (genre: Genre) => void;
  active: string;
}

function GenresList({ onChange, active }: Props): JSX.Element {
  const genres = useAppSelector(genresSelector);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <GenresItem key={genre} active={active} genre={genre} onChange={onChange} />
        ))
      }
    </ul>
  );
}

export { GenresList };
