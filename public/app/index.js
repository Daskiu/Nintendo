import highLightData from "./components/HighLight/highLightData.js";
import newBData from "./components/NewB/newBData.js";
import newSData from "./components/NewS/newSData.js";
import characterData from "./components/Character/characterData.js";
import bestSellData from "./components/BestSell/bestSellData.js";
import newRData from "./components/NewR/newRData.js";
import "./components/indexcom.js";
import { Attribute } from "./components/HighLight/highLight.js";
import { Attribut } from "./components/NewB/newB.js";
import { Attribu } from "./components/NewS/newS.js";
import { Attrib } from "./components/Character/character.js";
import { Attri } from "./components/BestSell/bestSell.js";
import { Att } from "./components/NewR/newR.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.HighlightsList = [];
        this.newBigList = [];
        this.newSmallList = [];
        this.characterList = [];
        this.bestSellerList = [];
        this.newReleaseList = [];
        this.attachShadow({ mode: "open" });
        highLightData.forEach((data) => {
            const highlightCard = this.ownerDocument.createElement("high-light");
            highlightCard.setAttribute(Attribute.img, data.img);
            highlightCard.setAttribute(Attribute.description, data.description);
            this.HighlightsList.push(highlightCard);
        });
        newBData.forEach((data) => {
            const newBigCard = this.ownerDocument.createElement("new-b");
            newBigCard.setAttribute(Attribut.img, data.img);
            newBigCard.setAttribute(Attribut.description, data.description);
            newBigCard.setAttribute(Attribut.name, data.name);
            newBigCard.setAttribute(Attribut.date, data.date);
            this.newBigList.push(newBigCard);
        });
        newSData.forEach((data) => {
            const newSmallCard = this.ownerDocument.createElement("new-s");
            newSmallCard.setAttribute(Attribu.img, data.img);
            newSmallCard.setAttribute(Attribu.name, data.name);
            newSmallCard.setAttribute(Attribu.date, data.date);
            this.newSmallList.push(newSmallCard);
        });
        characterData.forEach((data) => {
            const characterCard = this.ownerDocument.createElement("my-character");
            characterCard.setAttribute(Attrib.img, data.img);
            characterCard.setAttribute(Attrib.description, data.description);
            this.characterList.push(characterCard);
        });
        bestSellData.forEach((data) => {
            const bestSellerCard = this.ownerDocument.createElement("best-sell");
            bestSellerCard.setAttribute(Attri.img, data.img);
            bestSellerCard.setAttribute(Attri.date, data.date);
            bestSellerCard.setAttribute(Attri.name, data.name);
            bestSellerCard.setAttribute(Attri.price, data.price);
            this.bestSellerList.push(bestSellerCard);
        });
        newRData.forEach((data) => {
            const newReleaseCard = this.ownerDocument.createElement("new-r");
            newReleaseCard.setAttribute(Att.img, data.img);
            newReleaseCard.setAttribute(Att.date, data.date);
            newReleaseCard.setAttribute(Att.price, data.price);
            newReleaseCard.setAttribute(Att.name, data.name);
            newReleaseCard.setAttribute(Att.release, data.release);
            this.newReleaseList.push(newReleaseCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            <div class="MENU">
            <div class="menuBar">
                <img id="iconNintendo" src="/img/icon_nintendo.jpg">
                <div class="inputDiv">
                    <img class="imgInput" src="/img/search.png">
                    <input id="input" placeholder="Search games, hadware, news, etc" type="text">
                    <h4 id="textInput">All categories</h4>
                    <img class="imgInput" src="/img/flecha_abajo.png">
                </div>
                <div class="menuBarIconsDiv">
                    <div class="menuBarIcons">
                        <img class="imgMenuBar" src="/img/support.png">
                        <h4>Support</h4>
                    </div>
                    <div class="menuBarIcons">
                        <img class="imgMenuBar" src="/img/heartGray.png">
                        <h4>Wish List</h4>
                    </div>
                    <div class="menuBarIcons">
                        <img class="imgMenuBar" src="/img/shop.png">
                        <h4>Cart</h4>
                    </div>
                    <div class="menuBarIcons">
                        <img class="imgMenuBar" src="/img/user.png">
                        <h4>Log in/ Sign Up</h4>
                    </div>
                </div>
            </div>

                <div class="barDownDiv">
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/shop.png">
                        <h4>My Nintendo Store</h4>
                    </div>
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/games.png">
                        <h4>Games</h4>
                    </div>
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/nintendo.png">
                        <h4>Nintendo Switch</h4>
                    </div>
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/news.png">
                        <h4>News & Events</h4>
                    </div>
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/start.png">
                        <h4>Play Nintendo</h4>
                    </div>
                </div>

            <div class="divLanding">
                    <img id="imgLanding" src="/img/landing.jpg">
            </div>
            <div class="horaButton">
                        <h3>Pre-order digitally today, play on 3/17</h3>
                        <button class="button">Pre-order now</button>
            </div>
            <div>
                <img  class="finalImg" src="/img/division.PNG">
                <h1 class="tittle">Featured</h1>
                <img class="imgMid"src="/img/featured.jpg">
            </div>
            </div>

            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <div class="bar2">
                <div class="inputDiv">
                    <img class="imgInput" src="">
                    <div class="horaButton2" id="espace">
                        <h3>Save through 3/23 at 11:59 p.m. PT</h3>
                        <button class="button" >Shop now</button>
                    </div>
                </div>
            </div>
            `;
        }
        const HighlightCards = this.ownerDocument.createElement("section");
        HighlightCards.className = 'highlightSection';
        this.HighlightsList.forEach((highlightCard) => {
            HighlightCards.appendChild(highlightCard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(HighlightCards);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
                <div class="div2">
                    <img  class="finalImg" src="/img/division.PNG">
                    <h1 class="tittle">Online store</h1>
                    <img  class="imgMid" src="/img/store.png">
                    <div class="horaButton2">
                        <h3>Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.</h3>
                        <button class="button" >Start shoping</button>
                    </div>
                </div>
                <div class="div3">
                    <img  class="finalImg" src="/img/division.PNG">
                    <h1 class="tittle">Gamimg systems</h1>
                    <img class="imgMid" src="/img/gaming.PNG">
                    <div class="horaButton2">
                        <h3>Find the perfect Nintendo Switch system for you.</h3>
                        <button class="button">Explore now</button>
                    </div>
                </div>
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <img  class="finalImg" src="/img/division.PNG">
            <h1 class="tittle" >News</h1>
            `;
        }
        const newBigCards = this.ownerDocument.createElement("section");
        newBigCards.className = 'newBigSection';
        this.newBigList.forEach((newBigCard) => {
            newBigCards.appendChild(newBigCard);
        });
        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(newBigCards);
        const newSmallCards = this.ownerDocument.createElement("section");
        newSmallCards.className = 'newSmallSection';
        this.newSmallList.forEach((newSmallCard) => {
            newSmallCards.appendChild(newSmallCard);
        });
        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(newSmallCards);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <button class="buttonImg"><img id="imgButton"src="/img/more.png">See all new articles</button>
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <img  class="finalImg" src="/img/division.PNG">
            <h1 class="tittle" >Characters</h1>
            `;
        }
        const characterCards = this.ownerDocument.createElement("section");
        characterCards.className = 'characterSection';
        this.characterList.forEach((characterCard) => {
            characterCards.appendChild(characterCard);
        });
        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(characterCards);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <img  class="finalImg" src="/img/division.PNG">
            <div class="sellTitle">

                <h1 class="tittle" >Digital best seller</h1>
                <h2 class="subTitle">See full list</h2>
            </div>
            `;
        }
        const bestSellerCards = this.ownerDocument.createElement("section");
        bestSellerCards.className = 'bestSellerSection';
        this.bestSellerList.forEach((bestSellerCard) => {
            bestSellerCards.appendChild(bestSellerCard);
        });
        (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(bestSellerCards);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <div class="sellTitle">
                <h1 class="tittle" >Digital New Releases</h1>
                <h2 class="subTitle" >See full list</h2>
            </div>

            `;
        }
        const newReleaseCards = this.ownerDocument.createElement("section");
        newReleaseCards.className = 'newReleaseSection';
        this.newReleaseList.forEach((newReleaseCard) => {
            newReleaseCards.appendChild(newReleaseCard);
        });
        (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.appendChild(newReleaseCards);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <div class="">
                <img id="finalImg" src="/img/final.PNG">
            </div>

            `;
        }
    }
}
customElements.define("app-container", AppContainer);
