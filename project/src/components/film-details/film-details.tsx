import { Fragment } from 'react';

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
    <Fragment>
      {`${star}, `}<br />
    </Fragment>
  );
}

function FilmDetails({ film }: Props): JSX.Element {
  const {
    genre,
    released,
    director,
    starring,
    runTime,
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
                  <Fragment key={star}>{star}</Fragment> :
                  <StarWithBr key={star} star={star} />
              ))
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formatDuration(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export { FilmDetails };
