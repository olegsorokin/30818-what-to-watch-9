import { FilmList } from '../film-list/film-list';

type Props = {
  genre: string
}

const MAX_FILMS = 4;

function SimilarFilms({ genre }: Props): JSX.Element {
  const similarFilms = [].slice(0, MAX_FILMS);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList films={similarFilms} limit={MAX_FILMS} />
    </section>
  );
}

export { SimilarFilms };
