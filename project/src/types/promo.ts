import { Poster, Video } from './film';

export type Promo = {
  id: number,
  title: string,
  genre: string,
  year: number,
  video: Video,
  poster: Poster,
  duration: number,
}
