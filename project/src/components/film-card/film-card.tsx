import { memo, useEffect, useState } from 'react';
import { generatePath, Link, useNavigate } from 'react-router-dom';

import { AppRoute } from '../../constants/routs';
import { Film } from '../../types/film';
import { VideoPlayer } from '../video-player/video-player';

const PLAYING_DELAY = 1000;

function areEqualFilms(prevProps: Props, nextProps: Props) {
  return prevProps.film.id === nextProps.film.id;
}

type Props = {
  film: Film;
}

function FilmCard({ film }: Props): JSX.Element {
  const navigate = useNavigate();
  const { id, name, previewImage, previewVideoLink } = film;
  const [isHovered, setHovered] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  const handleImageClickEvent = () => {
    navigate(generatePath(AppRoute.Film, { id: String(id) }));
  };

  useEffect(() => {
    if (!isHovered) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setPlaying(true);
    }, PLAYING_DELAY);

    return () => {
      clearTimeout(timeoutId);
      setPlaying(false);
    };
  }, [isHovered]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
      onClick={handleImageClickEvent}
    >
      <div className="small-film-card__image">
        {
          isPlaying &&
            <VideoPlayer src={previewVideoLink} poster={previewImage} muted />
        }
        <img
          src={previewImage}
          alt={name}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, { id: String(id) })}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default memo(FilmCard, areEqualFilms);
