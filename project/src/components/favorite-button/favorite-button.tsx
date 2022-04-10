import { Film } from '../../types/film';
import { IconAdd, IconInList } from '../icon';
import { addToFavorite, fetchPromo } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type Props = {
  film: Film
}

function FavoriteButton({ film }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const handleMyPlaylistButtonClick = async () => {
    await dispatch(addToFavorite({
      filmId: Number(film.id),
      status: film.isFavorite ? 0 : 1,
    }));
    await dispatch(fetchPromo());
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyPlaylistButtonClick}>
      {
        film.isFavorite ?
          <IconInList /> :
          <IconAdd />
      }
      <span>My list</span>
    </button>
  );
}

export { FavoriteButton };
