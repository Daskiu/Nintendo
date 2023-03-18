export enum Attrib {
    "img" = "img",
    "description" = "description",

}

class Character extends HTMLElement {
    img?: string;
    description?: string;

    static get observedAttributes() {
        const attrs: Record<Attrib, null> = {
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
        propimg: Attrib,
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