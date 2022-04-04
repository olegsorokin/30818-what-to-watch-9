import { useState } from 'react';

import { Logo } from '../../components/logo/logo';
import { FilmList } from '../../components/film-list/film-list';
import { IconAdd, IconPlayS } from '../../components/icon';
import { GenreEnum } from '../../constants/genres';
import { useAppSelector } from '../../hooks';
import { GenresList } from '../../components/genres-list/genres-list';

type Props = {
  limit: number,
}

function Main({
  limit,
}: Props): JSX.Element {
  const [activeGenre, setActiveGenre] = useState<GenreEnum>(GenreEnum.ALL_GENRES);

  const { films, promo } = useAppSelector((state) => state);

  const onGenreChange = (genreName: GenreEnum): void => {
    setActiveGenre(genreName);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.data?.backgroundImage} alt={promo.data?.name} />
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
                src={promo.data?.posterImage}
                alt={`${promo.data?.name} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.data?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.data?.genre}</span>
                <span className="film-card__year">{promo.data?.released}</span>
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

          <GenresList active={activeGenre} onChange={onGenreChange} />

          <FilmList films={films.data} limit={limit} />
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
