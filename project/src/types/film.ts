export type Video = {
  src: string,
  poster: string,
};

export type Poster = {
  src: string,
  width: number,
  height: number,
  background: string,
};

export type Rating = {
  score: number,
  level: string,
  count: number,
};

export type Film = {
  id: number,
  title: string,
  genre: string,
  year: number,
  video: Video,
  poster: Poster,
  rating: Rating,
  description: string[],
  director: string,
  starring: string[],
  duration: number,
};

export type Films = Film[];
