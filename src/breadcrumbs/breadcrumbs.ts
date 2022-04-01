import html from 'src/components/breadcrumbs/breadcrumbs.html';
import css from 'src/components/breadcrumbs/breadcrumbs.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class Breadcrumbs extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.append(style);
		this.append(template.content.cloneNode(true));
	}
}

customElements.define('rkar-breadcrumbs', Breadcrumbs);
