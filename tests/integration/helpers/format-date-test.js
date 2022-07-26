import { module, test } from 'qunit';
import { setupRenderingTest } from 'poppays-ember-interview-practice/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-date', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('inputValue', '2022-07-20T07:00:00+03:00');

    await render(hbs`{{format-date this.inputValue}}`);

    assert.dom(this.element).hasText('20/07');
  });
});
