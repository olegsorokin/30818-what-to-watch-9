import { FilmList } from '../film-list/film-list';
import { films } from '../../mocks/films';


function SimilarFilms(): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList films={films.slice(0, 4)} />
    </section>
  );
}

export { SimilarFilms };
