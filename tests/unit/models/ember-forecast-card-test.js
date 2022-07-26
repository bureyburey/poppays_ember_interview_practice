import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | ember forecast card', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('ember-forecast-card', {});
    assert.ok(model);
  });
});
