import { FilmList } from '../film-list/film-list';
import { films } from '../../mocks/films';

type Props = {
  genre: string
}

const MAX_FILMS = 4;

function SimilarFilms({ genre }: Props): JSX.Element {
  const similarFilms = films.filter((film) => film.genre === genre);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList films={similarFilms} limit={MAX_FILMS} />
    </section>
  );
}

export { SimilarFilms };
