import React from 'react';

export const NavLink = ({ to, children }) => {
  const onClick = (e) => {
    window.emberServices.router.transitionTo(to);
    e.preventDefault();
    return false;
  };

  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
};
