import html from 'src/components/buttongroup/buttongroup.html';
import css from 'src/components/buttongroup/buttongroup.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class ButtonGroup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('rkar-buttongroup', ButtonGroup);
