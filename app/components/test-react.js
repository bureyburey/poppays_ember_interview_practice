import React from 'react';
import ReactComponent from './react-component';
import { action } from '@ember/object';
// import { Link } from 'react-router-dom';
import { service, inject } from '@ember/service';
import Service from '@ember/service';
import router from 'poppays-ember-interview-practice/router';
import { NavLink } from '../react-components/nav-link';
// import Ember from '@ember';

// console.log(new Application().inject);
// console.log(inject('router'));
console.log(window.EmberApp);
// console.log({ service: new service('router') });

const TestReact = ({ name }) => {
  return (
    <div>
      Hi <b>{name}</b>, Welcome to EmbeReact!
      <div>
        <NavLink to="/ember-weather-forecast/location/215854">
          Go to forecast
        </NavLink>
      </div>
      <div>
        <a href="/ember-weather-forecast/location/215854">
          http://localhost:4200/ember-weather-forecast/location/215854
        </a>
      </div>
      {/*<Link to="ember-weather-forecast/location/215854">http://localhost:4200/ember-weather-forecast/location/215854</Link>*/}
    </div>
  );
};

export default class TestReactComponent extends ReactComponent {
  @action
  didInsert(element) {
    this.reactRender(element, <TestReact name="GenericSoundingName" />);
  }
}
