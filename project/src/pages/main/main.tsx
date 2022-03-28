import { useEffect, useState } from 'react';

import { Logo } from '../../components/logo/logo';
import { FilmList } from '../../components/film-list/film-list';
import { Film } from '../../types/film';
import { IconAdd, IconPlayS } from '../../components/icon';
import { Genre } from '../../constants/genres';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilms } from '../../store/action';
import { GenresList } from '../../components/genres-list/genres-list';

type Props = {
  limit: number,
  promoFilm: Film,
}

function Main({
  limit,
  promoFilm: {
    title,
    genre,
    year,
  },
}: Props): JSX.Element {
  const [activeGenre, setActiveGenre] = useState<Genre>(Genre.ALL_GENRES);

  const { films } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  function onChangeGenre(name: Genre): void {
    setActiveGenre(name);
  }

  useEffect(() => {
    dispatch(fetchFilms(activeGenre));
  }, [activeGenre]);

  return (
    <>
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
                  <IconPlayS />
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <IconAdd />
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

          <GenresList active={activeGenre} onChange={onChangeGenre} />

          <FilmList films={films} limit={limit} />

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
