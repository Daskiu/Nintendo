export var Att;
(function (Att) {
    Att["date"] = "date";
    Att["name"] = "name";
    Att["price"] = "price";
    Att["img"] = "img";
    Att["release"] = "release";
})(Att || (Att = {}));
class newR extends HTMLElement {
    static get observedAttributes() {
        const attr = {
            date: null,
            name: null,
            price: null,
            img: null,
            release: null,
        };
        return Object.keys(attr);
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
                <div class="releaseCard">
                    <img class="imgH" src="${this.img}">
                    <h4 class="BSCardInter">${this.name}</h4>
                    <p class="BSCardInter">${this.date}</p>
                    <p class="BSCardInter, textRed">${this.release}</p>
                    <p class="BSCardInter">${this.price}</p>
                    <div class="NinHeart">
                        <h5 class="textHeart" >Nintendo Switch</h5>
                        <img class="redHeart" src="/img/heart_line.png">
                    </div>

                </div>
                `;
        }
    }
}
customElements.define("new-r", newR);
export default newR;
