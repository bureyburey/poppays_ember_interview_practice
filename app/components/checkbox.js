import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CheckboxComponent extends Component {
  @tracked checked = this.args.checked || false;

  setChecked({ target: { checked } }) {
    this.checked = checked || !this.checked;

    if (this.args.onSetChecked) {
      this.args.onSetChecked(this.checked);
    }
  }
}
