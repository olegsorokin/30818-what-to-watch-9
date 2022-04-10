import React, { useCallback, useEffect, useState } from 'react';

import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film';
import { ShowMore } from '../show-more/show-more';

const SHOW_MORE_STEP = 8;

type Props = {
  films: Film[];
}

function FilmList({ films }: Props): JSX.Element {
  const [showingCount, setShowingCount] = useState(SHOW_MORE_STEP);
  const hasShowMoreButton = showingCount < films.length;

  const showMore = useCallback(
    () => setShowingCount((prevCount) => prevCount + SHOW_MORE_STEP),
    [],
  );

  useEffect(() => {
    setShowingCount(SHOW_MORE_STEP);
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
        hasShowMoreButton &&
          <ShowMore onClick={showMore} />
      }
    </>
  );
}

export { FilmList };
