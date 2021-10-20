import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes/Router';

const PageTwo = () => {
  function crash() {
    throw new Error('Hushålla crashed');
  }

  return (
    <div data-component="PageTwo">
      <h1>PageTwo</h1>
      <div>Some text</div>
      <Link to={routes.pageOne}>Go to page one</Link>
    </div>
  );
};

export default PageTwo;
