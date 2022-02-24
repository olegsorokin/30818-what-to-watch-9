import { Films } from '../../types/film';
import { FilmCard } from '../film-card/film-card';

type Props = {
  films: Films
}

function FilmList({ films }: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
}

export { FilmList };
