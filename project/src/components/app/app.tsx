import Main from '../main/main';

export type Limit = number

export type Film = {
  title: string,
  genre: string,
  released: number
}

type AppProps = {
  limit: Limit,
  promoFilm: Film
}

function App({limit, promoFilm}: AppProps): JSX.Element {
  return <Main limit={limit} promoFilm={promoFilm} />;
}

export default App;
