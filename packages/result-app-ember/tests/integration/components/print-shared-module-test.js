import { module, test } from 'qunit';
import { setupRenderingTest } from 'result-app-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | print-shared-module', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PrintSharedModule />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <PrintSharedModule>
        template block text
      </PrintSharedModule>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
