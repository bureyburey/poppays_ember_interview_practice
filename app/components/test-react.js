import React from 'react';
import ReactComponent from './react-component';
import { action } from '@ember/object';

const TestReact = ({ name }) => {
  return (
    <div>
      Hi <b>{name}</b>, Welcome to EmbeReact!
    </div>
  );
};

export default class TestReactComponent extends ReactComponent {
  @action
  didInsert(element) {
    this.reactRender(element, <TestReact name="GenericSoundingName" />);
  }
}
