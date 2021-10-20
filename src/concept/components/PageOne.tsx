import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/Router';
import { heading } from '../../assets/style.scss';

const PageOne = () => {
  return (
    <div data-component="PageOne">
      <h1 className={heading}>Hej - This is page one</h1>
      <Link to={routes.pageTwo}>To page two</Link>
    </div>
  );
};

export default PageOne;
