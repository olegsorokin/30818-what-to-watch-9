import React, { useMemo, useState } from 'react';

import { Film } from '../../types/film';
import { FilmCard } from '../film-card/film-card';

const SHOW_MORE_STEP = 8;

type Props = {
  films: Film[],
  limit?: number,
  hasShowMore?: boolean
}

function FilmList({ films, limit = Infinity, hasShowMore = false }: Props): JSX.Element {
  const [showingCount, setShowingCount] = useState(limit);
  const hasShowMoreButton = useMemo(() => showingCount < films.length, [showingCount, films.length]);

  const showMore = () => {
    setShowingCount(showingCount + SHOW_MORE_STEP);
  };

  return (
    <>
      <div className="catalog__films-list">
        {
          films
            .slice(0, showingCount)
            .map((film) => (
              <FilmCard
                key={film.id}
                film={film}
              />
            ))
        }
      </div>

      {
        hasShowMore && hasShowMoreButton &&
          <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={showMore}>Show more</button>
          </div>
      }
    </>
  );
}

export { FilmList };
