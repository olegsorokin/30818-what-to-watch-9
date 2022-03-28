import { Genre as GenreEnum } from '../constants/genres';
import { AppRoute } from '../constants/routs';

export type Genre = {
  name: string,
  type: GenreEnum,
  to: AppRoute,
};
