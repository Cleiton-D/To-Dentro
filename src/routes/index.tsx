import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Help from '../pages/Help';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" component={Home} />
    <Route path="/help" component={Help} />
  </Switch>
);

export default Routes;
