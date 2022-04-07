import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { IconFullScreen, IconPlayS } from '../icon';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { fetchFilm } from '../../store/api-actions';

function Player(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id: filmId } = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { film } = useAppSelector(({ FILMS }) => FILMS);

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilm({ filmId }));
    }
  }, [dispatch, filmId]);

  if (!film.data) {
    return (
      <LoadingScreen />
    );
  }

  const { videoLink, previewVideoLink } = film.data;

  return (
    <div className="player">
      <video ref={videoRef} autoPlay src={videoLink} className="player__video" poster={previewVideoLink} />

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <IconPlayS />
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <IconFullScreen />
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Player };
