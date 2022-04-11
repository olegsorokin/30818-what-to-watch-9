import { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';
import { IconPlayS } from '../icon';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Catalog } from '../catalog/catalog';
import { AppRoute } from '../../constants/routs';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { fetchFilms, fetchPromo } from '../../store/api-actions';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { films as filmsSelector, promo as promoSelector } from '../../store/selectors';

function Main(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const films = useAppSelector(filmsSelector);
  const promo = useAppSelector(promoSelector);

  const handlePlayButtonClick = () => {
    navigate(generatePath(AppRoute.Player, { id: String(promo.data?.id) }));
  };

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchPromo());
  }, [dispatch]);

  if (!films.isLoaded || !promo.isLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
                    <FavoriteButton film={promo.data} isPromo />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog films={films.items} />

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
