import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/main/main';
import { SignIn } from '../../pages/sign-in/sign-in';
import { MyList } from '../../pages/my-list/my-list';
import { Film } from '../../pages/film/film';
import { AddReview } from '../add-review/add-review';
import { Player } from '../player/player';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { AppRoute } from '../../constants/routs';
import { AuthorizationStatus } from '../../constants/auth';
import { FilmReviews } from '../film-reviews/film-reviews';
import { reviews } from '../../mocks/reviews';
import { Film as TFilm } from '../../types/film';
import { FilmDetails } from '../film-details/film-details';

type Props = {
  limit: number,
  promoFilm: TFilm,
  films: TFilm[]
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
            element={<Main limit={limit} promoFilm={promoFilm} films={films} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Unknown}>
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
              element={<FilmReviews reviews={reviews} film={films[0]} />}
            />
            <Route
              path={AppRoute.FilmDetails}
              element={<FilmDetails film={films[0]} />}
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
