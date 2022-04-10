import { Fragment } from 'react';

type Props = {
  star: string;
}

function StarWithBr({ star }: Props): JSX.Element {
  return (
    <Fragment>
      {`${star}, `}<br />
    </Fragment>
  );
}

export { StarWithBr };
