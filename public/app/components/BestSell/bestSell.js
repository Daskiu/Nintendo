export var Attri;
(function (Attri) {
    Attri["date"] = "date";
    Attri["name"] = "name";
    Attri["price"] = "price";
    Attri["img"] = "img";
})(Attri || (Attri = {}));
class bestSell extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            date: null,
            name: null,
            price: null,
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
                <div class="BestSellerCard">
                    <img class="imgBS" src="${this.img}">
                        <h4 class="BSCardInter" >${this.name}</h4>
                        <p class="BSCardInter">${this.date}</p>
                        <p class="BSCardInter">${this.price}</p>
                        <div class="NinHeart">
                            <h5 class="textHeart">Nintendo Switch</h5>
                            <img class="redHeart" src="/img/heart_line.png">
                        </div>
                </div>
                `;
        }
    }
}
customElements.define("best-sell", bestSell);
export default bestSell;
