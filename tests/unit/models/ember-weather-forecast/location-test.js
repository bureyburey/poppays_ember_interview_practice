import { module, test } from 'qunit';
import { setupTest } from 'poppays-ember-interview-practice/tests/helpers';

module('Unit | Model | ember weather forecast/location', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('ember-weather-forecast/location', {});
    assert.ok(model);
  });
});
