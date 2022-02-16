import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';

export type Film = {
  title: string,
  genre: string,
  released: number
}

type Props = {
  limit: number,
  promoFilm: Film
}

function App({ limit, promoFilm }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Outlet />}
        >
          <Route
            index
            element={<MainPage limit={limit} promoFilm={promoFilm} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyList />
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
            element={<Player />}
          />
        </Route>
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
