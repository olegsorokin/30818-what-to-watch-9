import { Film } from '../../types/film';
import { FilmList } from '../film-list/film-list';

type Props = {
  films: Film[];
}

const MAX_FILMS = 4;

function SimilarFilms({ films }: Props): JSX.Element {
  const similarFilms = films.slice(0, MAX_FILMS);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList films={similarFilms} />
    </section>
  );
}

export { SimilarFilms };
