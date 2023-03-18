export var Attribu;
(function (Attribu) {
    Attribu["date"] = "date";
    Attribu["name"] = "name";
    Attribu["img"] = "img";
})(Attribu || (Attribu = {}));
class newS extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            date: null,
            name: null,
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
                <div class="newSmallCard">
                    <img class="imgNS" src="${this.img}">
                    <p>${this.date}</p>
                    <h3>${this.name}</h3>
                    <h3 class="subTitleNB">Read more</h3>
                </div>
                `;
        }
    }
}
customElements.define("new-s", newS);
export default newS;
