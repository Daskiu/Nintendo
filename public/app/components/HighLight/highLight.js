export var Attribute;
(function (Attribute) {
    Attribute["img"] = "img";
    Attribute["description"] = "description";
})(Attribute || (Attribute = {}));
class Highlight extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            description: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propimg, _, newValue) {
        switch (propimg) {
            default:
                this[propimg] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./index.css">
                <div class="HighCard">
                <img class="imgH" src="${this.img}">
                <h3 class="textHighCard" >${this.description}</h3>
                </div>
                `;
        }
    }
}
customElements.define("high-light", Highlight);
export default Highlight;
