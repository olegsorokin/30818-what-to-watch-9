import React from 'react';

import { Film } from '../../types/film';
import { formatDuration, isLastItem } from '../../utils/common';

type Props = {
  film: Film
}

type StarWithBrProps = {
  star: string
}

function StarWithBr({ star }: StarWithBrProps): JSX.Element {
  return (
    <React.Fragment>
      {`${star}, `}<br />
    </React.Fragment>
  );
}

function FilmDetails({ film }: Props): JSX.Element {
  const {
    genre,
    year,
    director,
    starring,
    duration,
  } = film;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              starring.map((star, index) => (
                isLastItem(starring.length, index) ?
                  <React.Fragment key={star}>{star}</React.Fragment> :
                  <StarWithBr key={star} star={star} />
              ))
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formatDuration(duration)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
}

export { FilmDetails };
