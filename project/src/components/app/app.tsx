import { Outlet, Route, Routes } from 'react-router-dom';

import { Main } from '../../pages/main/main';
import { SignIn } from '../../pages/sign-in/sign-in';
import { MyList } from '../../pages/my-list/my-list';
import { Film } from '../../pages/film/film';
import { AddReview } from '../add-review/add-review';
import { Player } from '../player/player';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { AppRoute } from '../../constants/routs';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { isAuthenticated } from '../../store/selectors';

function App(): JSX.Element {
  const { films, authorizationStatus } = useAppSelector((state) => state);
  const isAuth = useAppSelector(isAuthenticated);

  if (isAuth) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Outlet />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyList films={films.data} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<Outlet />}
          >
            <Route
              index
              element={<Film />}
            />
            <Route
              path={AppRoute.AddReview}
              element={<AddReview />}
            />
          </Route>
          <Route
            path={AppRoute.Player}
            element={<Player video={films.data[0]} />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export { App };
