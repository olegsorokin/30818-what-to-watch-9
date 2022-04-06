import { useEffect, useState } from 'react';
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom';

import { Logo } from '../../components/logo/logo';
import { AppRoute } from '../../constants/routs';
import { SimilarFilms } from '../../components/similar-films/similar-films';
import { IconAdd, IconPlayS } from '../../components/icon';
import { Tabs } from '../../components/tabs';
import { FilmDetails } from '../../components/film-details/film-details';
import { FilmReviews } from '../../components/film-reviews/film-reviews';
import { FilmOverview } from '../../components/film-overview/film-overview';
import { UserBlock } from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchSimilarFilms } from '../../store/api-actions';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { AuthorizationStatus } from '../../constants/auth';

enum FilmTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

const tabs = [
  { title: FilmTab.Overview },
  { title: FilmTab.Details },
  { title: FilmTab.Reviews },
];

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const [active, setActive] = useState<string>(FilmTab.Overview);

  const { film, similarFilms, authorizationStatus } = useAppSelector((state) => state);

  const initRequests = async (filmId: string) => {
    await dispatch(fetchFilm({ filmId }));
    await dispatch(fetchSimilarFilms({ filmId }));
  };

  useEffect(() => {
    if (id) {
      initRequests(id).catch(() => {
        navigate(AppRoute.Main);
      });
    }
  }, [id]);

  if (!film.data || !similarFilms.data?.length) {
    return (
      <LoadingScreen />
    );
  }

  const {
    name,
    genre,
    released,
    backgroundImage,
    posterImage,
  } = film.data;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span> <span className="film-card__year">{released}</span>
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
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                    <Link to={generatePath(AppRoute.AddReview, { id: String(id) })} className="btn film-card__button">
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
                src={posterImage}
                alt={`${name} poster`}
              />
            </div>

            <div className="film-card__desc">
              <Tabs tabs={tabs} active={active} onChange={setActive} />

              {active === FilmTab.Overview && <FilmOverview film={film.data} />}
              {active === FilmTab.Details && <FilmDetails film={film.data} />}
              {active === FilmTab.Reviews && <FilmReviews />}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarFilms films={similarFilms.data} />

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
