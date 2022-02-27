import { Logo } from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/routs';
import { Film as FilmType } from '../../types/film';
import { IconSprite } from '../../components/icon-sprite/icon-sprite';
import { SimilarFilms } from '../../components/similar-films/similar-films';

type Props = {
  film: FilmType
}

function Film({ film }: Props): JSX.Element {
  const {
    title,
    genre,
    year,
    poster: { background, src, width, height },
    rating: { score, level, count },
    description,
    director,
    starring,
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
                <span className="film-card__genre">{genre}</span> <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
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
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={AppRoute.Film} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={AppRoute.FilmDetails} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={AppRoute.FilmReviews} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

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
