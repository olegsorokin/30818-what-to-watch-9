import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../constants/routs';
import { Film } from '../../types/film';
import { VideoPlayer } from '../video-player/video-player';

const PLAYING_DELAY = 1000;

type Props = {
  film: Film,
}

function FilmCard({ film }: Props): JSX.Element {
  const { poster, title, video } = film;
  const [isHovered, setHovered] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
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
    >
      <div className="small-film-card__image">
        {
          isPlaying &&
            <VideoPlayer src={video.src} muted />
        }
        <img
          src={poster.src}
          alt={title}
          width={poster.width}
          height={poster.height}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>
          {title}
        </Link>
      </h3>
    </article>
  );
}

export { FilmCard };
