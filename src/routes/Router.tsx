import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PageTwo from '../concept/components/PageTwo';
import PageOne from '../concept/components/PageOne';
import NotFoundPage from '../concept/components/NotFoundPage';

export const routes = {
  home: '/boilerplate/',
  pageOne: '/boilerplate/pageOne',
  pageTwo: '/boilerplate/pageTwo',
};

const Router = () => (
  <Switch>
    <Route exact path={routes.home}>
      <Redirect to={routes.pageOne} />
    </Route>
    <Route exact path={routes.pageOne} component={PageOne} />
    <Route exact path={routes.pageTwo} component={PageTwo} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default Router;
