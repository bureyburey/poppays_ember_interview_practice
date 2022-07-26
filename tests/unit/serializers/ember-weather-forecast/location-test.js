import { module, test } from 'qunit';
import { setupTest } from 'poppays-ember-interview-practice/tests/helpers';

module('Unit | Serializer | ember weather forecast/location', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('ember-weather-forecast/location');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('ember-weather-forecast/location', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
