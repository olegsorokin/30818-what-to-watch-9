import { Video } from '../../types/film';
import { IconFullScreen, IconPlayS } from '../icon';

type Props = {
  video: Video
}

function Player({ video }: Props): JSX.Element {
  const { src, poster } = video;

  return (
    <div className="player">
      <video src={src} className="player__video" poster={poster} />

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
