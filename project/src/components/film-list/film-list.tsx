import React from 'react';

import { Film } from '../../types/film';
import { FilmCard } from '../film-card/film-card';

type Props = {
  films: Film[],
  limit?: number
}

function FilmList({ films, limit }: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        films
          .slice(0, limit)
          .map((film) => (
            <FilmCard
              key={film.id}
              film={film}
            />
          ))
      }
    </div>
  );
}

export { FilmList };
