import html from 'src/components/listbox/listbox.html';
import css from 'src/components/listbox/listbox.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

/**
 * The listbox role is used for lists from which a user may select one or more items which are static and, unlike HTML <select> elements, may contain images
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role
 */
class Listbox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('r-listbox', Listbox);
