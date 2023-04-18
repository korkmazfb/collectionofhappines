class Header{
    constructor(placeToRenderHeader) {
        this.placeToRenderHeader =document.getElementsByTagName(placeToRenderHeader)[0];
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "header__logo  fa-solid fa-face-smile-wink";

        this.logoHeadingElement = document.createElement("h2");
        this.logoHeadingElement.classList = "header__text";
        this.logoHeadingElement.innerText = "Collection of Happiness";

    }

    render() {
        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.logoIElement);
        this.headerElement.appendChild(this.logoHeadingElement);

    }
}


class CollectionMain{
    placeToBeRenderCollectionMain;
    leftPanel;

    constructor(placeToBeRenderCollectionMain){
        this.placeToBeRenderCollectionMain = document.getElementsByTagName(placeToBeRenderCollectionMain)[0];

        this.collectionMainElement = document.createElement("main");
        this.collectionMainElement.classList = "collection";


        //komt door deze regel
        this.leftpanel = new LeftPanel(this.collectionMainElement);
    }

    render(){
        this.placeToBeRenderCollectionMain.appendChild(this.collectionMainElement);
        
    }
}


class LeftPanel{
    collectionMainElement;
    constructor(collectionMainElement){
        this.collectionMainElement = collectionMainElement;
        this.lefsectionElement = document.createElement("section");
        this.leftsectionElement.classList = "collection__section collection__section--left";

    }

    render(){
        this.mainElement.appendChild(this.leftsectionElement);
    }
   

}

class Footer{
    placeToBeRenderFooter;

    constructor(placeToBeRenderFooter){
        this.placeToBeRenderFooter = document.getElementsByTagName(placeToBeRenderFooter)[0];
        this.footerElement = document.createElement("footer");
        this.footerElement.classList = "footer"

        this.footerTextElement = document.createElement("h3");
        this.footerTextElement.classList = "footer__text";
        this.footerTextElement.innerText = "Gemaakt door - Mert SD2C MediaCollege";



    }

    
    render(){
        this.placeToBeRenderFooter.appendChild(this.footerElement);
        this.footerElement.appendChild(this.footerTextElement);
    }
  

}



class App{
    header;
    mainElement;
    footer;

    constructor(){
        this.header = new Header("body");
        this.mainElement = new CollectionMain("body");
        this.footer = new Footer("body");
        






        this.header.render();
        this.mainElement.render();
        this.footer.render();

    }


}

const app = new App();