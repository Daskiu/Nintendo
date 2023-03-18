export enum Att {
    "date" = "date",
    "name" = "name",
    "price" = "price",
    "img" = "img",
    "release" = "release"
}

class newR extends HTMLElement {
    date?: string;
    name?: string;
    price?: string;
    img?: string;
    release?: string;



    static get observedAttributes() {
        const attr: Record<Att, null> = {
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

    attributeChangedCallback(
        propimg: Att,
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