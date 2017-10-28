import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Event from './containers/Event';
import NotFound from './containers/NotFound';
import uris from './uris';


export default () =>
  /**
   * Please keep routes in alphabetical order
   */
  <Route path={uris.pages.root} component={App} >
    <IndexRoute component={Home} />
    { /* Catch all route */ }
    <Route
      path={uris.pages.event}
      component={Event}
    />
    <Route path="*" component={NotFound} status={404} />
  </Route>;
