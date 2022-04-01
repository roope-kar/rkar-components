class Route extends HTMLElement {
    constructor() {
        if(window.location.pathname === this.getAttribute('path')) {
            this.innerHTML = this.assignedSlot.innerHTML;
        } else {
            this.innerHTML = '';
        }
    }
}

customElements.define('R-route', Route);
