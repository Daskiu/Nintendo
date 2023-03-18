export var Attribut;
(function (Attribut) {
    Attribut["date"] = "date";
    Attribut["name"] = "name";
    Attribut["description"] = "description";
    Attribut["img"] = "img";
})(Attribut || (Attribut = {}));
class newB extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            date: null,
            name: null,
            description: null,
            img: null,
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
                <div class="newBigCard">
                    <img class="imgNB" src="${this.img}">
                    <p>${this.date}</p>
                    <h3>${this.name}</h3>
                    <p>${this.description}</p>
                    <h3 class="subTitleNB">Read more</h3>
                </div>
                `;
        }
    }
}
customElements.define("new-b", newB);
export default newB;
