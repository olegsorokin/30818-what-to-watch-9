import { IconSpinner } from '../icon/icon-spinner';

function VideoSpinner(): JSX.Element {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <IconSpinner />
    </div>
  );
}

export { VideoSpinner };
