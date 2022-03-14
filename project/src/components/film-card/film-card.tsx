import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/routs';
import { Film } from '../../types/film';
import { VideoPlayer } from '../video-player/video-player';
import { useEffect, useState } from 'react';

const PLAYING_DELAY = 1000;

type Props = {
  film: Film,
}

function FilmCard({ film }: Props): JSX.Element {
  const { poster, title, video } = film;
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    if (!hovered) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setPlaying(true);
    }, PLAYING_DELAY);

    return () => {
      clearTimeout(timeoutId);
      setPlaying(false);
    };
  }, [hovered]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
