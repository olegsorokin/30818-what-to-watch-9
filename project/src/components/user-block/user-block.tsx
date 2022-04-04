import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../constants/auth';
import { AppRoute } from '../../constants/routs';

function UserBlock(): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a href="#" className="user-block__link">Sign out</a>
        </li>
      </ul>
    );
  }

  return (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
    </div>
  );
}

export { UserBlock };
