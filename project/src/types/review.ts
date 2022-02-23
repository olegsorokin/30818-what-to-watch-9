export type Details = {
  author: string,
  date: string,
};

export type Review = {
  id: number,
  filmId: number,
  text: string,
  rating: number,
  details: Details,
};
