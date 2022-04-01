import html from 'src/components/alertdialog/alertdialog.html';
import css from 'src/components/alertdialog/alertdialog.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class AlertDialog extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.append(style);
		this.append(template.content.cloneNode(true));
	}
}

customElements.define('rkar-alertdialog', AlertDialog);
