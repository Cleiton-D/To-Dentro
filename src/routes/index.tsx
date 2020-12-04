import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" exact component={Home} />
  </Switch>
);

export default Routes;
