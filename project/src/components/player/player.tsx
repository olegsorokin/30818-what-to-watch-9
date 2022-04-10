import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { IconFullScreen, IconPause, IconPlayS } from '../icon';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm } from '../../store/api-actions';
import { AppRoute } from '../../constants/routs';
import { getCurrentTime, getProgress } from '../../utils/common';
import { VideoSpinner } from '../video-spinner/video-spinner';
import { Film } from '../../types/film';

function Player(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { id: filmId } = useParams<string>();
  const { film, promo } = useAppSelector(({ FILMS }) => FILMS);
  const [currentFilm, setCurrentFilm] = useState<Film | null>(null);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayButtonClick = () => {
    setPlaying((hasPlaying) => !hasPlaying);
  };

  const handleExitButtonClick = () => {
    setPlaying(false);
    navigate(generatePath(AppRoute.Film, { id: filmId }));
  };

  const handleFullscreenButtonClick = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleTimeUpdateEvent = (evt: SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(Math.floor(evt.currentTarget.currentTime));
  };

  useEffect(() => {
    if (!filmId) {
      navigate(AppRoute.Main);
      return;
    }

    if (film.data && film.data.id === parseInt(filmId, 10)) {
      setCurrentFilm(film.data);
      return;
    }

    if (promo.data && promo.data.id === parseInt(filmId, 10)) {
      setCurrentFilm(promo.data);
      return;
    }

    dispatch(fetchFilm({ filmId })).catch(() => {
      navigate(AppRoute.Main);
    });
  }, [navigate, dispatch, film.data, promo.data, filmId]);

  useEffect(() => {
    isPlaying ? videoRef.current?.play() : videoRef.current?.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const currentVideo = videoRef.current;

    if (currentFilm && currentVideo) {
      currentVideo.onloadeddata = () => {
        setLoaded(true);
        setPlaying(true);
        setDuration(currentVideo ? Math.floor(currentVideo.duration) : 0);
      };
    }
  }, [currentFilm]);

  return (
    <div className="player">
      {
        !isLoaded &&
          <VideoSpinner />
      }
      <video
        ref={videoRef}
        className="player__video"
        src={currentFilm?.videoLink}
        poster={currentFilm?.previewImage}
        onTimeUpdate={handleTimeUpdateEvent}
      />

      <button type="button" className="player__exit" onClick={handleExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={String(getProgress(duration, currentTime))} max="100" />
            <div className="player__toggler" style={{ left: `${getProgress(duration, currentTime)}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{`-${getCurrentTime(duration - currentTime)}`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayButtonClick}>
            {
              isPlaying ?
                <>
                  <IconPause />
                  <span>Play</span>
                </> :
                <>
                  <IconPlayS />
                  <span>Pause</span>
                </>
            }
          </button>
          <div className="player__name">{currentFilm?.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullscreenButtonClick}>
            <IconFullScreen />
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Player };
