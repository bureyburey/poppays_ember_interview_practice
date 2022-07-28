import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/nav-bar';
import { Test } from '../pages/test';

const NullElement = () => null;

const ReactHome = () => {
  useEffect(() => {
    return () => console.log('unmount');
  }, []);
  return (
    <div>
      <h1>React Home</h1>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: 'flex' }} className="app-container">
      <NavBar/>
      <div className="routes-container">
        <Routes>
          <Route path="/ember-weather-forecast" element={<NullElement/>}/>
          <Route path="/react-home" element={<ReactHome/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="*" element={<NullElement/>}/>
          {/*  <Route path="/" element={<App/>}>*/}
          {/*    <Route index element={<Home/>}/>*/}
          {/*    <Route path="teams" element={<Teams/>}>*/}
          {/*      <Route path=":teamId" element={<Team/>}/>*/}
          {/*      <Route path="new" element={<NewTeamForm/>}/>*/}
          {/*      <Route index element={<LeagueStandings/>}/>*/}
          {/*    </Route>*/}
          {/*</Route>*/}
        </Routes>
      </div>
    </div>
  );
};

export const ReactApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  );
};
