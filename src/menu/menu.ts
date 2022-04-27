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

customElements.define('r-menu', Menu);

/** Example
 * <ul role="group">
        <li role="menuitem">Inbox</li>
        <li role="menuitem">Archive</li>
        <li role="menuitem">Trash</li>
    </ul>
    <ul role="group">
        <li role="menuitem">Custom Folder 1</li>
        <li role="menuitem">Custom Folder 2</li>
        <li role="menuitem">Custom Folder 3</li>
    </ul>
    <r-separator aria-orientation="horizontal"></r-separator>
    <ul role="group">
        <li role="menuitem">New Folder</li>
    </ul>
 */
