import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo';
import { AppRoute } from '../../constants/routs';
import { IconSprite } from '../icon-sprite/icon-sprite';
import { Film } from '../../types/film';
import { formatDuration, isLastItem } from '../../utils/common';
import { SimilarFilms } from '../similar-films/similar-films';

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
    poster: { background, src, width, height },
    title,
    genre,
    year,
    director,
    starring,
    duration,
  } = film;

  return (
    <>
      <IconSprite />

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={background} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={src}
                alt={`${title} poster`}
                width={width}
                height={height}
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to={AppRoute.Film} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={AppRoute.FilmDetails} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={AppRoute.FilmReviews} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

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
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarFilms />

        <footer className="page-footer">
          <Logo isLight />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export { FilmDetails };
