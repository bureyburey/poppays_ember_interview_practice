import React from 'react';
import { action } from '@ember/object';
import { NavBar } from '../react-components/nav-bar';
import ReactComponent from './react-component';

export default class ReactNavBarWrapperComponent extends ReactComponent {
  @action
  didInsert(element) {
    this.reactRender(element, <NavBar />);
  }
}