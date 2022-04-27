import html from 'src/components/treeitem/treeitem.html';
import css from 'src/components/treeitem/treeitem.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class TreeItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
        this.addEventListener('slotchange', (event) => {
            // Called when textContent, or innerHTML is changed. Not when text node is appended.
            console.log(event);
        });
    }
}

customElements.define('r-treeitem', TreeItem);
