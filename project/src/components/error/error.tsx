import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Error() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Go back to home</Link>
    </>
  );
}

export default Error;
