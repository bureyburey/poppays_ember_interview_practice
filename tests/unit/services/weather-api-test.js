import { module, test } from 'qunit';
import { setupTest } from 'poppays-ember-interview-practice/tests/helpers';

module('Unit | Service | weather-api', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:weather-api');
    assert.ok(service);
  });
});
