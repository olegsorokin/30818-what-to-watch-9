import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { MainPage } from '../main-page/main-page';
import { SignIn } from '../sign-in/sign-in';
import { MyList } from '../my-list/my-list';
import { Film } from '../film/film';
import { AddReview } from '../add-review/add-review';
import { Player } from '../player/player';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { AppRoute } from '../../constants/routs';
import { AuthorizationStatus } from '../../constants/auth';
import { Films } from '../../types/film';
import { Promo } from '../../types/promo';
import { FilmReviews } from '../film-reviews/film-reviews';
import { reviews } from '../../mocks/reviews';
import { FilmDetails } from '../film-details/film-details';

type Props = {
  limit: number,
  promoFilm: Promo,
  films: Films
}

function App({ limit, promoFilm, films }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Outlet />}
        >
          <Route
            index
            element={<MainPage limit={limit} promoFilm={promoFilm} films={films} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyList films={films} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<Outlet />}
          >
            <Route
              index
              element={<Film film={films[0]} />}
            />
            <Route
              path={AppRoute.AddReview}
              element={<AddReview film={films[0]} />}
            />
            <Route
              path={AppRoute.FilmReviews}
              element={<FilmReviews reviews={reviews} />}
            />
            <Route
              path={AppRoute.FilmDetails}
              element={<FilmDetails />}
            />
          </Route>
          <Route
            path={AppRoute.Player}
            element={<Player video={films[0].video} />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
