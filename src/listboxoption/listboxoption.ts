import html from 'src/components/listboxoption/listboxoption.html';
import css from 'src/components/listboxoption/listboxoption.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class ListboxOption extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('r-listbox-option', ListboxOption);
