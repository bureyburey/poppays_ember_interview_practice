import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from '../nav-link';
// import './_style.scss';

const APP_ROUTES = [
  {
    name: 'Ember Weather Forecast',
    route: 'ember-weather-forecast',
  },
  {
    name: 'React Playground',
    route: 'react-playground',
  },
  {
    name: 'About',
    route: 'about',
  },
];

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/">
        <FontAwesomeIcon icon="house" />
      </NavLink>
      <div className="links">
        {APP_ROUTES.map((appRoute) => (
          <NavLink key={appRoute.route} to={`/${appRoute.route}`}>
            {appRoute.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
