import Logo from '../../components/logo/logo';
import { Film } from '../../types/film';
import { FilmList } from '../../components/film-list/film-list';
import UserBlock from '../../components/user-block/user-block';

type Props = {
  films: Film[]
}

function MyList({ films }: Props): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films} />
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
