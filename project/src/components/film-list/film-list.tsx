import React, { useState } from 'react';
import { Film } from '../../types/film';
import { FilmCard } from '../film-card/film-card';

type Props = {
  films: Film[]
}

function FilmList({ films }: Props): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState(NaN);

  function hoverHandler(filmId: number): void {
    setActiveFilmId(filmId);
  }

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            isActive={film.id === activeFilmId}
            onHover={hoverHandler}
          />
        ))
      }
    </div>
  );
}

export { FilmList };
