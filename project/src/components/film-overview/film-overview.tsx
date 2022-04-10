import React from 'react';

import { Film } from '../../types/film';
import { getRatingLevel } from '../../utils/common';

const MAX_STARS = 3;

type Props = {
  film: Film
}

function FilmOverview({ film }: Props): JSX.Element {
  const {
    description,
    director,
    starring,
    scoresCount,
    rating,
  } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.slice(0, MAX_STARS).join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export { FilmOverview };
