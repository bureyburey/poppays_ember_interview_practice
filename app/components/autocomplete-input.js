import Component from '@glimmer/component';
import { restartableTask, timeout } from 'ember-concurrency';
import { guidFor } from '@ember/object/internals';

// https://dtang.dev/building-an-autocomplete-input-in-ember/

export default class AutocompleteInputComponent extends Component {
  listId = guidFor(this);

  wasOptionSelected(value) {
    return this.args.options.includes(value);
  }

  @restartableTask
  *onInputTask(event) {
    const { value } = event.target;

    // TODO: figure out a good way to find the selected option (using option.name is NOT A GOOD WAY OF DOING IT)
    const selectedOption = this.args.options.find(
      (option) => option.name === value
    );

    if (selectedOption) {
      this.args.onInput(selectedOption);
      return;
    }

    if (this.wasOptionSelected(value)) {
      return;
    }

    const debounce = 250;
    yield timeout(debounce);

    if (value) {
      this.args.search(value);
    }
  }
}
