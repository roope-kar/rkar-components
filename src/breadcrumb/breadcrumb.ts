import html from 'src/components/breadcrumb/breadcrumb.html';
import css from 'src/components/breadcrumb/breadcrumb.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class Breadcrumb extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('rkar-breadcrumb', Breadcrumb);
