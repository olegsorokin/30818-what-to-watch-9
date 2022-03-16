import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { AppRoute } from '../../constants/routs';


type Props = {
  isLight?: boolean
}

function Logo({ isLight = false }: Props): JSX.Element {
  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={clsx('logo__link', isLight && 'logo__link--light')}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export { Logo };
