import { AppRoute } from './routs';
import { TGenre } from '../types/genre';

export enum GenreEnum {
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
    type: GenreEnum.ALL_GENRES,
    to: AppRoute.Main,
  },
  {
    name: 'Comedies',
    type: GenreEnum.COMEDIES,
    to: AppRoute.Main,
  },
  {
    name: 'Crime',
    type: GenreEnum.CRIME,
    to: AppRoute.Main,
  },
  {
    name: 'Documentary',
    type: GenreEnum.DOCUMENTARY,
    to: AppRoute.Main,
  },
  {
    name: 'Dramas',
    type: GenreEnum.DRAMAS,
    to: AppRoute.Main,
  },
  {
    name: 'Horror',
    type: GenreEnum.HORROR,
    to: AppRoute.Main,
  },
  {
    name: 'Kids & Family',
    type: GenreEnum.KIDS_AND_FAMILY,
    to: AppRoute.Main,
  },
  {
    name: 'Romance',
    type: GenreEnum.ROMANCE,
    to: AppRoute.Main,
  },
  {
    name: 'Sci-Fi',
    type: GenreEnum.SCI_FI,
    to: AppRoute.Main,
  },
  {
    name: 'Thrillers',
    type: GenreEnum.THRILLERS,
    to: AppRoute.Main,
  },
];
