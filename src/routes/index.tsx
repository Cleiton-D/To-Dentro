import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={SignIn} />
  </Switch>
);

export default Routes;
