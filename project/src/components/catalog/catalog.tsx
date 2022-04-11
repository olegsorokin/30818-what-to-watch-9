import { useState } from 'react';

import { GenresList } from '../genres-list/genres-list';
import { FilmList } from '../film-list/film-list';
import { Film } from '../../types/film';
import { Genre } from '../../types/genre';
import { useAppSelector } from '../../hooks';
import { ALL_GENRES } from '../../constants/genre';

function filterFilmsByGenre(films: Film[], genre: Genre) {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
}

type Props = {
  films: Film[];
};

function Catalog({ films }: Props) {
  const { genres } = useAppSelector(({ FILMS }) => FILMS);
  const [activeGenre, setActiveGenre] = useState<Genre>(genres[0]);

  const handleGenreChange = (genreName: Genre): void => {
    setActiveGenre(genreName);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList active={activeGenre} onChange={handleGenreChange} />

      <FilmList films={filterFilmsByGenre(films, activeGenre)} />
    </section>
  );
}

export { Catalog };
