import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    navigate(AppRoute.Main);
  };

  const handleFullscreenButtonClick = () => {
    videoRef.current?.requestFullscreen();
  };

  const timeUpdateEventHandler = (evt: any) => {
    setCurrentTime(Math.floor(evt.target?.currentTime));
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

    dispatch(fetchFilm({ filmId }));
  }, [dispatch, film.data, promo.data, filmId]);

  useEffect(() => {
    isPlaying ? videoRef.current?.play() : videoRef.current?.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (currentFilm && videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setLoaded(true);
        setPlaying(true);
        setDuration(videoRef.current ? Math.floor(videoRef.current.duration) : 0);
        videoRef.current?.addEventListener('timeupdate', timeUpdateEventHandler);
      };
    }

    return () => {
      videoRef.current?.removeEventListener('timeupdate', timeUpdateEventHandler);
    };
  }, [currentFilm, videoRef.current]);

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
