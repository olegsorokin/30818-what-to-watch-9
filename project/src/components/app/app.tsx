import Main from '../main/main';

export type Film = {
  title: string,
  genre: string,
  released: number
}

type Props = {
  limit: number,
  promoFilm: Film
}

function App({limit, promoFilm}: Props): JSX.Element {
  return <Main limit={limit} promoFilm={promoFilm} />;
}

export default App;
