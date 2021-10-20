import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { forenaApplication } from '@forena/utilities';
import Router from 'routes/Router';

function App() {
  return (
    <BrowserRouter>
      <div data-component="Hushålla-App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

const { bootstrap, mount, unmount } = forenaApplication(App);
export { bootstrap, mount, unmount };

export default App;
