import Component from '@glimmer/component';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

export default class ReactComponent extends Component {
  container = null;
  root = null;

  /**
   * We don't need a template since we're only creating a
   * wrapper for our React component
   **/
  // not sure if actually needed
  layout = '';

  /**
   * Renders a react component as the current ember element
   * @param {React.Component} reactComponent. e.g., <HelloWorld />
   */
  reactRender(element, reactComponent) {
    console.log('reactRender');
    this.container = element;
    this.root = createRoot(this.container);
    this.root.render(reactComponent);
    // ReactDOM.render(reactComponent, this.element);
  }

  /**
   * Removes a mounted React component from the DOM and
   * cleans up its event handlers and state.
   */
  unmountReactElement() {
    console.log('unmountReactElement');
    this.root.unmount();
    // ReactDOM.unmountComponentAtNode(this.element);
  }

  /**
   * Cleans up the rendered react component as the ember
   * component gets destroyed
   */
  willDestroy() {
    super.willDestroy();
    this.unmountReactElement();
  }
}
