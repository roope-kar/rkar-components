import html from 'src/components/feed/feed.html';
import css from 'src/components/feed/feed.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

// TODO: set  aria-busy when polling

// https://www.w3.org/TR/wai-aria-practices-1.1/examples/feed/feed.html
/**
 * Page Down	Move focus to next article.
Page Up	Move focus to previous article.
Control + End	Move focus to the first focusable element after the feed.
Control + Home	Move focus to the first focusable element before the feed.
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
