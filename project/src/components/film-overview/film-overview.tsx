import React from 'react';

import { Film } from '../../types/film';

type Props = {
  film: Film
}

function FilmOverview({ film }: Props): JSX.Element {
  const {
    description,
    director,
    starring,
    rating: { score, level, count },
  } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{level}</span>
          <span className="film-rating__count">{count} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {
          description.map((item) => (
            <p key={item}>{item}</p>
          ))
        }

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.slice(0, 3).join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export { FilmOverview };
