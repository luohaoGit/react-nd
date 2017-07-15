import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Todo,
  NotFoundPage,
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Todo}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);