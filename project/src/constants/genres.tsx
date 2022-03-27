import { AppRoute } from './routs';
import { Genre as TGenre } from '../types/genre';

export enum Genre {
  ALL_GENRES = 'All genres',
  COMEDIES = 'Comedies',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMAS = 'Dramas',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
  THRILLERS = 'Thrillers',
}

export const genres: TGenre[] = [
  {
    name: Genre.ALL_GENRES,
    to: AppRoute.Main,
  },
  {
    name: Genre.COMEDIES,
    to: AppRoute.Main,
  },
  {
    name: Genre.CRIME,
    to: AppRoute.Main,
  },
  {
    name: Genre.DOCUMENTARY,
    to: AppRoute.Main,
  },
  {
    name: Genre.DRAMAS,
    to: AppRoute.Main,
  },
  {
    name: Genre.HORROR,
    to: AppRoute.Main,
  },
  {
    name: Genre.KIDS_AND_FAMILY,
    to: AppRoute.Main,
  },
  {
    name: Genre.ROMANCE,
    to: AppRoute.Main,
  },
  {
    name: Genre.SCI_FI,
    to: AppRoute.Main,
  },
  {
    name: Genre.THRILLERS,
    to: AppRoute.Main,
  },
];
