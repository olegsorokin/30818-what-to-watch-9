import { Navigate, RouteProps } from 'react-router-dom';

import { AuthorizationStatus } from '../../constants/auth';
import { AppRoute } from '../../constants/routs';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  isGuestOnly?: boolean;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, isGuestOnly = false } = props;

  if (isGuestOnly) {
    return (
      authorizationStatus === AuthorizationStatus.Auth
        ? <Navigate to={AppRoute.Main} />
        : children
    );
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export { PrivateRoute };
