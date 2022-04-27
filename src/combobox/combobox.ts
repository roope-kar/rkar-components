import html from 'src/components/combobox/combobox.html';
import css from 'src/components/combobox/combobox.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

/**
 * The combobox role is for input that controls another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the input.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
 */
class Combobox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('r-combobox', Combobox);
