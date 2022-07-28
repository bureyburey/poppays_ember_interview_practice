import React from 'react';
import ReactComponent from './react-component';
import { action } from '@ember/object';
import { NavLink } from '../react/components/nav-link';

const TestReact = ({ name }) => {
  return (
    <div>
      Hi <b>{name}</b>, Welcome to EmbeReact!
      <div>
        {/*<NavLink to="/ember-weather-forecast/location/215854">*/}
        {/*  Go to forecast*/}
        {/*</NavLink>*/}
      </div>
      <div>
        <a href="/ember-weather-forecast/location/215854">
          http://localhost:4200/ember-weather-forecast/location/215854
        </a>
      </div>
    </div>
  );
};

export default class TestReactComponent extends ReactComponent {
  @action
  didInsert(element) {
    this.reactRender(element, <TestReact name="GenericSoundingName" />);
  }
}
