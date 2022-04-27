import html from 'src/components/selectsearch/selectsearch.html';
import css from 'src/components/selectsearch/selectsearch.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class SelectSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('rkar-selectsearch', SelectSearch);
