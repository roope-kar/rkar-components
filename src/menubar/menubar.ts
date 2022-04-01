import html from 'src/components/menu/menu.html';
import css from 'src/components/menu/menu.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class Menu extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.append(style);
		this.append(template.content.cloneNode(true));
	}
}

customElements.define('rkar-menu', Menu);
