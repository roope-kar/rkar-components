import html from 'src/components/multiselect/multiselect.html';
import css from 'src/components/multiselect/multiselect.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class MultiSelect extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('rkar-multiselect', MultiSelect);
