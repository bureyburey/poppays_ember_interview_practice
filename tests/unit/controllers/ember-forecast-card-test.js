import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | ember-forecast-card', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:ember-forecast-card');
    assert.ok(controller);
  });
});
