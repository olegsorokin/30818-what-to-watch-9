import { Navigate, RouteProps } from 'react-router-dom';

import { AuthorizationStatus } from '../../constants/auth';
import { AppRoute } from '../../constants/routs';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export { PrivateRoute };
