import { module, test } from 'qunit';
import { setupRenderingTest } from 'poppays-ember-interview-practice/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-temperature', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders fahrenheit', async function (assert) {
    this.set('inputValue', 30);

    const expected = '30';
    await render(hbs`{{format-temperature this.inputValue}}`);

    assert.dom(this.element).hasText(expected);
  });

  test('it renders celsius', async function (assert) {
    this.set('inputValue', 30);

    // fahrenheit => celsius calculation
    const expected = String(Math.round((5 / 9) * (30 - 32)));
    await render(hbs`{{format-temperature this.inputValue 'C'}}`);

    assert.dom(this.element).hasText(expected);
  });
});
