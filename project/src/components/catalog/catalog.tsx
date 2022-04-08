import { useState } from 'react';

import { GenresList } from '../genres-list/genres-list';
import { FilmList } from '../film-list/film-list';
import { GenreEnum } from '../../constants/genres';
import { Film } from '../../types/film';

function filmsByGenre(films: Film[], genre: GenreEnum) {
  if (genre === GenreEnum.ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
}

type Props = {
  films: Film[],
};

function Catalog({ films }: Props) {
  const [activeGenre, setActiveGenre] = useState<GenreEnum>(GenreEnum.ALL_GENRES);

  const onGenreChange = (genreName: GenreEnum): void => {
    setActiveGenre(genreName);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList active={activeGenre} onChange={onGenreChange} />

      <FilmList films={filmsByGenre(films, activeGenre)} />
    </section>
  );
}

export { Catalog };
