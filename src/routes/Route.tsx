import {
  Redirect,
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
  useHistory,
} from 'react-router-dom';

import Header from '../components/Header';

import { useAuth } from '../hooks/auth';

type RouteProps = ReactRouteProps & {
  isPrivate?: boolean;
};

const Route = ({ isPrivate = false, ...rest }: RouteProps): JSX.Element => {
  const { username } = useAuth();
  const { location } = useHistory();

  if (isPrivate === !!username) {
    if (isPrivate) {
      return (
        <>
          <Header />
          <ReactRoute {...rest} />
        </>
      );
    }

    return <ReactRoute {...rest} />;
  }

  return (
    <Redirect
      to={{ pathname: isPrivate ? '/' : '/home', state: { from: location } }}
    />
  );
};

export default Route;
