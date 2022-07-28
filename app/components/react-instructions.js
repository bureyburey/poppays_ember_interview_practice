import React from 'react';
import ReactComponent from './react-component';
import { action } from '@ember/object';

const ReactInstructions = () => {
  return (
    <div>
      <h3>Steps to adding new React component</h3>
      <ul>
        <li>
          generate ember component + component class =>{' '}
          <b>
            ember generate component -cc {'<'}component-name{'>'}
          </b>
        </li>
        <li>
          Example: <b>ember generate component -cc my-awesome-button</b>
        </li>
        <li>
          in the my-awesome-button.hbs: add the following div
          <pre>{`<div {{did-insert this.didInsert}}/>`}</pre>
        </li>
        <li>
          in the my-awesome-button.js:
          <ul>
            <li>
              add on top of the file:{' '}
              <b>import ReactComponent from './react-component';</b>
            </li>
            <li>
              <b>
                export default class MyAwesomeButtonComponent extends{' '}
                <span style={{ color: 'red' }}>Component</span>
              </b>
              &nbsp;&nbsp;=>&nbsp;&nbsp;
              <b>
                export default class MyAwesomeButtonComponent extends{' '}
                <span style={{ color: 'green' }}>ReactComponent</span>
              </b>
            </li>
            <li>
              add the following code inside the class
              <pre>
                {`
@action
didInsert(element) {
  this.reactRender(element, <MyAwesomeButton/>);
}
`}
              </pre>
            </li>
            <li>
              create MyAwesomeButtonComponent in React
              <pre>
                {`
const MyAwesomeButtonComponent = () => {
  return <button>My Awesome Button!</button>
}                
`}
              </pre>
            </li>
          </ul>
        </li>
        <li>
          render the wrapping ember component somewhere
          <pre>
            {`
{{my-awesome-button}}
`}
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default class ReactInstructionsComponent extends ReactComponent {
  @action
  didInsert(element) {
    this.reactRender(element, <ReactInstructions />);
  }
}
