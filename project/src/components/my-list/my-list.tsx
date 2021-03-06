import { useEffect } from 'react';

import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { FilmList } from '../film-list/film-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorite } from '../../store/api-actions';
import { favorite as favoriteSelector } from '../../store/selectors';

function MyList(): JSX.Element {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector(favoriteSelector);

  useEffect(() => {
    dispatch(fetchFavorite());
  }, [dispatch]);

  if (!favorite.items) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favorite.items} />
      </section>

      <footer className="page-footer">
        <Logo isLight />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export { MyList };
