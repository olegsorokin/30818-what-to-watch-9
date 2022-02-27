import { Logo } from '../../components/logo/logo';
import { FilmList } from '../../components/film-list/film-list';
import { Film } from '../../types/film';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/routs';
import { IconSprite } from '../../components/icon-sprite/icon-sprite';

type Props = {
  limit: number,
  promoFilm: Film,
  films: Film[]
}

type Genre = {
  name: string,
  to: string,
}

const genres: Genre[] = [
  {
    name: 'All genres',
    to: AppRoute.Main,
  },
  {
    name: 'Comedies',
    to: AppRoute.Main,
  },
  {
    name: 'Crime',
    to: AppRoute.Main,
  },
  {
    name: 'Documentary',
    to: AppRoute.Main,
  },
  {
    name: 'Dramas',
    to: AppRoute.Main,
  },
  {
    name: 'Horror',
    to: AppRoute.Main,
  },
  {
    name: 'Kids & Family',
    to: AppRoute.Main,
  },
  {
    name: 'Romance',
    to: AppRoute.Main,
  },
  {
    name: 'Sci-Fi',
    to: AppRoute.Main,
  },
  {
    name: 'Thrillers',
    to: AppRoute.Main,
  },
];

function Main({
  limit,
  promoFilm: {
    title,
    genre,
    year,
  },
  films,
}: Props): JSX.Element {
  return (
    <>
      <IconSprite />

      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={title} />
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
              <a href="#" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg" alt={`${title} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              genres.map(({ name, to }) => (
                <li key={name} className="catalog__genres-item catalog__genres-item--active">
                  <Link to={to} className="catalog__genres-link">{name}</Link>
                </li>
              ))
            }
          </ul>

          <FilmList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

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

export { Main };
