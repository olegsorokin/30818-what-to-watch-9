import React, { useEffect, useMemo, useState } from 'react';

import { Film } from '../../types/film';
import { FilmCard } from '../film-card/film-card';
import { ShowMore } from '../show-more/show-more';

const SHOW_MORE_STEP = 8;

type Props = {
  films: Film[],
  limit?: number,
}

function FilmList({ films, limit = Infinity }: Props): JSX.Element {
  const [showingCount, setShowingCount] = useState(limit);
  const hasShowMoreButton = useMemo(() => showingCount < films.length, [showingCount, films]);

  const showMore = () => {
    setShowingCount(showingCount + SHOW_MORE_STEP);
  };

  const resetShowingFilms = () => {
    setShowingCount(limit);
  };

  useEffect(() => {
    resetShowingFilms();
  }, [films]);

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
        !hasShowMoreButton &&
          <ShowMore onClick={showMore} />
      }
    </>
  );
}

export { FilmList };
