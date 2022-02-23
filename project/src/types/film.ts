export type Video = {
  src: string,
};

export type Image = {
  stc: string,
  width: number,
  height: number,
  alt: string,
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
  img: Image,
  rating: Rating,
  description: string[],
  director: string,
  starring: string[],
  duration: number,
};

export type Films = Film[];
