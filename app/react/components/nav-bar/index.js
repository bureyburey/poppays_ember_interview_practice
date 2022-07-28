import React from 'react';
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
  {
    name: 'Test',
    route: 'test',
    isReactRoute: true,
  },
  {
    name: 'React Home',
    route: 'react-home',
    isReactRoute: true,
  },
  {
    name: '404',
    route: '404',
    isReactRoute: true,
  },
];

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink routeName="/" to="">
        <FontAwesomeIcon icon="house" />
      </NavLink>
      <div className="links">
        {APP_ROUTES.map((appRoute) => (
          <NavLink
            key={appRoute.route}
            to={`${appRoute.route}`}
            isReactRoute={appRoute.isReactRoute}
          >
            {appRoute.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
