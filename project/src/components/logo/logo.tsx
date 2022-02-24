import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/routs';

type Props = {
  isLight?: boolean
}

function Logo({ isLight = false }: Props): JSX.Element {
  const logoLightClass = isLight ? 'logo__link--light' : '';

  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={`logo__link ${logoLightClass}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export { Logo };
