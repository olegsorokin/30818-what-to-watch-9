import { AppRoute } from './routs';
import { Genre as TGenre } from '../types/genre';

export enum Genre {
  ALL_GENRES = 'All genres',
  COMEDIES = 'Comedy',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMAS = 'Drama',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
  THRILLERS = 'Thriller',
}

export const genres: TGenre[] = [
  {
    name: 'All genres',
    type: Genre.ALL_GENRES,
    to: AppRoute.Main,
  },
  {
    name: 'Comedies',
    type: Genre.COMEDIES,
    to: AppRoute.Main,
  },
  {
    name: 'Crime',
    type: Genre.CRIME,
    to: AppRoute.Main,
  },
  {
    name: 'Documentary',
    type: Genre.DOCUMENTARY,
    to: AppRoute.Main,
  },
  {
    name: 'Dramas',
    type: Genre.DRAMAS,
    to: AppRoute.Main,
  },
  {
    name: 'Horror',
    type: Genre.HORROR,
    to: AppRoute.Main,
  },
  {
    name: 'Kids & Family',
    type: Genre.KIDS_AND_FAMILY,
    to: AppRoute.Main,
  },
  {
    name: 'Romance',
    type: Genre.ROMANCE,
    to: AppRoute.Main,
  },
  {
    name: 'Sci-Fi',
    type: Genre.SCI_FI,
    to: AppRoute.Main,
  },
  {
    name: 'Thrillers',
    type: Genre.THRILLERS,
    to: AppRoute.Main,
  },
];
