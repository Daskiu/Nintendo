export enum Attribute {
    "img" = "img",
    "description" = "description",

}

class Highlight extends HTMLElement {
    img?: string;
    description?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
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

    attributeChangedCallback(
        propimg: Attribute,
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