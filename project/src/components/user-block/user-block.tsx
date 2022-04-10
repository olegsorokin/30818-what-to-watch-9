import { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../constants/auth';
import { AppRoute } from '../../constants/routs';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { authorizationStatus, user } = useAppSelector(({ USER }) => USER);

  const handleLogout = (evt: MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const handleAvatarClick = () => {
    navigate(AppRoute.MyList);
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar" onClick={handleAvatarClick}>
            <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a href="/#" className="user-block__link" onClick={handleLogout}>Sign out</a>
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
