import React, { useState } from 'react';
import { Films } from '../../types/film';
import { FilmCard } from '../film-card/film-card';

type Props = {
  films: Films
}

function FilmList({ films }: Props): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState(NaN);

  function hoverHandler(filmId: number): void {
    /* eslint-disable no-console */
    console.log(activeFilmId);
    /* eslint-disable no-console */
    console.log(filmId);
    setActiveFilmId(filmId);
  }

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmCard key={film.id} film={film} onHover={hoverHandler} />
        ))
      }
    </div>
  );
}

export { FilmList };
