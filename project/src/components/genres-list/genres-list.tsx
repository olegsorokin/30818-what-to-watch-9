import { GenresItem } from '../genres-item/genres-item';
import { useAppSelector } from '../../hooks';
import { Genre } from '../../types/genre';

type Props = {
  onChange: (genre: Genre) => void;
  active: string;
}

function GenresList({ onChange, active }: Props): JSX.Element {
  const { genres } = useAppSelector(({ FILMS }) => FILMS);

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
