import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const NavLink = ({ to, isReactRoute, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = (e) => {
    if (!isReactRoute) {
      window.emberServices.router.transitionTo(to);
      e.preventDefault();
    } else {
      navigate(to);
    }
    return true;
  };

  const getClassName = () => {
    return location.pathname === `/${to}` ? 'active' : '';
  };

  if (isReactRoute) {
    return (
      <Link className={getClassName()} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a className={getClassName()} href={to} onClick={onClick}>
      {children}
    </a>
  );
};
