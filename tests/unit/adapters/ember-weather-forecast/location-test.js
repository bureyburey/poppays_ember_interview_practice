import { module, test } from 'qunit';
import { setupTest } from 'poppays-ember-interview-practice/tests/helpers';

module('Unit | Adapter | ember weather forecast/location', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:ember-weather-forecast/location');
    assert.ok(adapter);
  });
});
