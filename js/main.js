class Header{
    constructor(placeToRenderHeader) {
        this.placeToRenderHeader =document.getElementsByTagName(placeToRenderHeader)[0];
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "header__logo  fa-solid fa-face-smile-wink";

        this.logoHeadingElement = document.createElement("h1");
        this.logoHeadingElement.classList = "header__text";
        this.logoHeadingElement.innerText = "Collection of Happiness";

    }

    render() {
        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.logoIElement);
        this.headerElement.appendChild(this.logoHeadingElement);

    }
}



class App{
    header;

    constructor(){
        this.header = new Header("body");






        this.header.render();

    }


}

const app = new App();