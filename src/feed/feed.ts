import html from 'src/components/feed/feed.html';
import css from 'src/components/feed/feed.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class Feed extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.append(style);
		this.append(template.content.cloneNode(true));
	}
}

customElements.define('rkar-feed', Feed);
