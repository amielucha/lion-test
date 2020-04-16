import { html, css, LitElement } from "lit-element";

export class YvIco extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 1rem;
        border: 1px solid rgba(0,0,0,.1);
      }
    `;
  }

  static get properties() {
    return {
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.icon = "💩";
  }

  render() {
    return html`<span>${this.icon}</span> `;
  }
}
