import { generatePath, useNavigate } from 'react-router-dom';

import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { IconPlayS } from '../../components/icon';
import { useAppSelector } from '../../hooks';
import { Catalog } from '../../components/catalog/catalog';
import { AppRoute } from '../../constants/routs';
import { FavoriteButton } from '../../components/favorite-button/favorite-button';

function Main(): JSX.Element {
  const navigate = useNavigate();
  const { films, promo } = useAppSelector(({ FILMS }) => FILMS);

  const handlePlayButtonClick = () => {
    navigate(generatePath(AppRoute.Player, { id: String(promo.data?.id) }));
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

          <UserBlock />
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
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayButtonClick}>
                  <IconPlayS />
                  <span>Play</span>
                </button>
                {
                  promo.data &&
                    <FavoriteButton film={promo.data} />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog films={films.data} />

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
