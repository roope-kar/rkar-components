import html from 'src/components/menuitem/menuitem.html';
import css from 'src/components/menuitem/menuitem.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class Menuitem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('rkar-menuitem', Menuitem);
