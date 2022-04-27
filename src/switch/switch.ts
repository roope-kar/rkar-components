import html from 'src/components/switch/switch.html';
import css from 'src/components/switch/switch.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class Switch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('rkar-switch', Switch);
