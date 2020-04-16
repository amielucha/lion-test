import { html, css } from 'lit-element';
import { LionCheckbox } from '@lion/checkbox-group';

export class YvChb extends LionCheckbox {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--yv-chb-text-color, #000);
      }
    `;
  }

  _choiceGraphicTemplate() {
    return html`
      <yv-ico>This should render an icon.</yv-ico>
    `;
  }
}
