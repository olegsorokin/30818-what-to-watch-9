import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../../components/logo/logo';
import { AppRoute } from '../../constants/routs';
import { Film as TFilm } from '../../types/film';
import { SimilarFilms } from '../../components/similar-films/similar-films';
import { IconAdd, IconPlayS } from '../../components/icon';
import { Tab, Tabs } from '../../components/tabs';
import { FilmDetails } from '../../components/film-details/film-details';
import { FilmReviews } from '../../components/film-reviews/film-reviews';
import { FilmOverview } from '../../components/film-overview/film-overview';
import { Review } from '../../types/review';

enum FilmTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

type Props = {
  film: TFilm,
  reviews: Review[]
}

function Film({ film, reviews }: Props): JSX.Element {
  const {
    title,
    genre,
    year,
    poster: { background, src, width, height },
  } = film;

  const [active, setActive] = useState<string>(FilmTab.Overview);

  return (
    <>
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
                <span className="film-card__genre">{genre}</span> <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <IconPlayS />
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <IconAdd />
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
              <Tabs>
                <Tab title={FilmTab.Overview} isActive={active === FilmTab.Overview} onChange={setActive} />
                <Tab title={FilmTab.Details} isActive={active === FilmTab.Details} onChange={setActive} />
                <Tab title={FilmTab.Reviews} isActive={active === FilmTab.Reviews} onChange={setActive} />
              </Tabs>

              {active === FilmTab.Overview && <FilmOverview film={film} />}
              {active === FilmTab.Details && <FilmDetails film={film} />}
              {active === FilmTab.Reviews && <FilmReviews reviews={reviews} />}
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

export { Film };
