import { useEffect } from 'react';
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom';

import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { AppRoute } from '../../constants/routs';
import { SimilarFilms } from '../similar-films/similar-films';
import { IconPlayS } from '../icon';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchSimilarFilms } from '../../store/api-actions';
import { FilmDescription } from '../film-description/film-description';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { isStatusAuth } from '../../store/selectors';
import { film as filmSelector, similarFilms as similarFilmsSelector } from '../../store/selectors';

function Film(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id: filmId } = useParams();

  const film = useAppSelector(filmSelector);
  const similarFilms = useAppSelector(similarFilmsSelector);
  const isAuth = useAppSelector(isStatusAuth);

  const handlePlayButtonClick = () => {
    navigate(generatePath(AppRoute.Player, { id: String(film.data?.id) }));
  };

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilm({ filmId }));
      dispatch(fetchSimilarFilms({ filmId }));
    }
  }, [dispatch, filmId]);

  if (!film.isLoaded || !similarFilms.isLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.data?.backgroundImage} alt={film.data?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.data?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.data?.genre}</span>
                <span className="film-card__year">
                  {film.data?.released}
                </span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayButtonClick}>
                  <IconPlayS />
                  <span>Play</span>
                </button>
                {
                  film.data &&
                    <FavoriteButton film={film.data} />
                }
                {
                  isAuth &&
                    <Link
                      to={generatePath(AppRoute.AddReview, { id: String(filmId) })}
                      className="btn film-card__button"
                    >
                      Add review
                    </Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.data?.posterImage}
                alt={`${film.data?.name} poster`}
              />
            </div>

            {
              film.data &&
                <FilmDescription film={film.data} />
            }
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarFilms films={similarFilms.items} />

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
