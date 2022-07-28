import React from 'react';
import { action } from '@ember/object';
import ReactComponent from './react-component';
import { ReactApp } from '../react/react-app';

export default class ReactAppComponent extends ReactComponent {
  @action
  didInsert(element) {
    this.reactRender(element, <ReactApp />);
  }
}
