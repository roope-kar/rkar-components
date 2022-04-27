import html from 'src/components/feed-article/feed-article.html';
import css from 'src/components/feed-article/feed-article.css';

const template = document.createElement('template');
template.innerHTML = html;

const style = document.createElement('style');
style.innerHTML = css;

class FeedArticle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.append(style);
        this.append(template.content.cloneNode(true));
    }
}

customElements.define('r-feed-article', FeedArticle);
