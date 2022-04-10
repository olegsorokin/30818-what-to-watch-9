type Props = {
  src: string;
  poster: string;
  muted?: boolean;
}

function VideoPlayer({ src, poster = '', muted = false }: Props): JSX.Element {
  return (
    <video
      autoPlay
      width='100%'
      height='100%'
      muted={muted}
      src={src}
      poster={poster}
    >
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  );
}

export { VideoPlayer };
