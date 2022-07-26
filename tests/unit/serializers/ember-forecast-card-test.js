import { module, test } from 'qunit';
import { setupTest } from 'poppays-ember-interview-practice/tests/helpers';

module('Unit | Serializer | ember forecast card', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('ember-forecast-card');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('ember-forecast-card', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
