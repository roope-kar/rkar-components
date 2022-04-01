import html from 'src/components/tabs/tabs.html';
import css from 'src/components/tabs/tabs.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class Tabs extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.append(style);
		this.append(template.content.cloneNode(true));
        this.addEventListener('slotchange', (event) => { // Called when textContent, or innerHTML is changed. Not when text node is appended.
            console.log(event);
        });
	}
}

customElements.define('r-tabs', Tabs);
