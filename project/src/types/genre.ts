import { GenreEnum } from '../constants/genres';
import { AppRoute } from '../constants/routs';

export type TGenre = {
  name: string;
  type: GenreEnum;
  to: AppRoute;
};
