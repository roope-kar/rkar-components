import html from 'src/components/feed/feed.html';
import css from 'src/components/feed/feed.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

/* Note*:
- basic arrow + home / end nav
- a-z, A-Z: Move to item starting with the letter
- * (asterisk) Expands all closed sibling nodes that are at the same level as the focused node.
 */
class Feed extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.append(style);
		this.append(template.content.cloneNode(true));
	}
}

customElements.define('rkar-feed', Feed);
