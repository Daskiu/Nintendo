export enum Attribut {
    "date" = "date",
    "name" = "name",
    "description" = "description",
    "img" = "img",
}

class newB extends HTMLElement {
    date?: string;
    name?: string;
    description?: string;
    img?: string;



    static get observedAttributes() {
        const attrs: Record<Attribut, null> = {
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

    attributeChangedCallback(
        propimg: Attribut,
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