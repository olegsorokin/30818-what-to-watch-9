import { FilmList } from '../film-list/film-list';
import { films } from '../../mocks/films';

type Props = {
  genre: string
}

const MAX_FILMS = 4;

function SimilarFilms({ genre }: Props): JSX.Element {
  const similarFilms = films.filter((film) => film.genre === genre).slice(0, MAX_FILMS);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList films={similarFilms} />
    </section>
  );
}

export { SimilarFilms };
