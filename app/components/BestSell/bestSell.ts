export enum Attri {
    "date" = "date",
    "name" = "name",
    "price" = "price",
    "img" = "img",
}

class bestSell extends HTMLElement{
    date?: string;
    name?: string;
    price?: string;
    img?: string;

    static get observedAttributes(){
        const attrs: Record<Attri, null> = {
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

    attributeChangedCallback(
        propimg: Attri,
        _: string | undefined,
        newValue: string | undefined
        ) {
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