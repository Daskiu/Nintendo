export var Attrib;
(function (Attrib) {
    Attrib["img"] = "img";
    Attrib["description"] = "description";
})(Attrib || (Attrib = {}));
class Character extends HTMLElement {
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
                <div class="characterDiv">
                    <img class="imgC" src="${this.img}">
                    <h3 class="textC">${this.description}</h3>
                </div>
                `;
        }
    }
}
customElements.define("my-character", Character);
export default Character;
