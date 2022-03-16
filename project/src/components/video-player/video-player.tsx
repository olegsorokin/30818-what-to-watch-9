type Props = {
  src: string,
  poster?: string,
  width?: string,
  height?: string,
  muted?: boolean,
}

function VideoPlayer({ src, poster = '', width = '100%', height = '100%', muted = false }: Props): JSX.Element {
  return (
    <video
      autoPlay
      width={width}
      height={height}
      muted={muted}
      src={src}
      poster={poster}
    >
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  );
}

export { VideoPlayer };
