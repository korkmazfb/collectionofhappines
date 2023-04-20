class GetDataFromApi {
  url = "";
  data = null;
  constructor(newURL) {
    this.url = newURL;
  }

  async getData() {
    await fetch(this.url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.data = data.episodes;
      });
    return this.data;
  }
}

class Header {
  constructor(placeToRenderHeader) {
    this.placeToRenderHeader =
      document.getElementsByTagName(placeToRenderHeader)[0];
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

class CollectionMain {
  placeToBeRenderCollectionMain;
  leftPanel;
  rightPanel;

  constructor(placeToBeRenderCollectionMain) {
    this.placeToBeRenderCollectionMain = document.getElementsByTagName(
      placeToBeRenderCollectionMain
    )[0];

    this.collectionMainElement = document.createElement("main");
    this.collectionMainElement.classList = "collection";

    //komt door deze regel
    this.rightPanel = new RightPanel(this.collectionMainElement);

    this.leftPanel = new LeftPanel(this.collectionMainElement, this.rightPanel);
  }

  makeCardsFromData(data) {
    this.leftPanel.makeCardsFromData(data);
    this.rightPanel.renderText(data);
  }

  render() {
    this.placeToBeRenderCollectionMain.appendChild(this.collectionMainElement);
    this.leftPanel.render();
    this.rightPanel.render();
  }
}

class LeftPanel {
  collectionMainElement;
  rightPanel;
  constructor(collectionMainElement, rightPanel) {
    this.rightPanel = rightPanel;
    this.collectionMainElement = collectionMainElement;
    this.leftsectionElement = document.createElement("section");
    this.leftsectionElement.classList =
      "collection__section collection__section--left";

    this.ulElement = document.createElement("ul");
    this.ulElement.classList = "collection__cards";
  }

  makeCardsFromData(data) {
    let randomNB = Math.floor(Math.random() * 4);
    let randomNB2 = randomNB + 4;

    //foreach, 4x li met data
    for (let i = randomNB; i < randomNB2; i++) {
      this.liElement = document.createElement("li");
      this.liElement.classList = "collection__card";
      this.ulElement.appendChild(this.liElement);

      this.imgElement = document.createElement("img");
      this.imgElement.classList = "collection__img";
      this.imgElement.src = data[i]["img"];
      this.liElement.appendChild(this.imgElement);

      this.datumElement = document.createElement("h3");
      this.datumElement.classList = "collection__datum";
      this.datumElement.innerText = data[i]["date (dd-mm-yyyy)"];
      this.liElement.appendChild(this.datumElement);

      this.titleElement = document.createElement("h3");
      this.titleElement.classList = "collection__title";
      this.titleElement.innerText = data[i]["title"];
      this.liElement.appendChild(this.titleElement);
      
      this.liElement.onclick = () => {
        console.log(this.rightPanel);
        this.rightPanel.titleElementrightside.innerHTML = data[i]["title"];
        this.rightPanel.datumElementrightside.innerHTML = data[i]["date (dd-mm-yyyy)"];
        this.rightPanel.imgElementrightside.src =  data[i]["img"];
        this.rightPanel.textElementrightside.innerHTML = data[i]["summary"] ;
        this.rightPanel.audioElement.src = data[i]["audio"];
        this.rightPanel.linkElement.href = data[i]["url"];
      }
        //werkt nog ni

    }
  }

  render() {
    this.collectionMainElement.appendChild(this.leftsectionElement);
    this.leftsectionElement.appendChild(this.ulElement);
  }
}

class RightPanel {
  collectionMainElement;
  constructor(collectionMainElement) {
    this.collectionMainElement = collectionMainElement;

    this.rightSectionElement = document.createElement("section");
    this.rightSectionElement.classList =
      "collection__section collection__section--right";

    this.figureElement = document.createElement("figure");
    this.figureElement.classList = "collection__figure";

    this.imgElementrightside = document.createElement("img");
    this.imgElementrightside.classList = "collection__bigimg";

    this.datumElementrightside = document.createElement("h3");
    this.datumElementrightside.classList = "collection__datum2";

    this.titleElementrightside = document.createElement("h3");
    this.titleElementrightside.classList = "collection__title2";

    this.textElementrightside = document.createElement("p");
    this.textElementrightside.classList = "collection__bigtext";

    this.wrapperElement = document.createElement("div");
    this.wrapperElement.classList = "collection__wrapper";

    this.audioElement = document.createElement("audio");
    this.audioElement.classList = "collection__audio";
    this.audioElement.setAttribute("controls", true);

    this.linkElement = document.createElement("a")
    this.linkElement.classList = "collection__link";
    


  }

  render() {
    this.collectionMainElement.appendChild(this.rightSectionElement);
    this.rightSectionElement.appendChild(this.figureElement);
    this.figureElement.appendChild(this.imgElementrightside);
    this.figureElement.appendChild(this.datumElementrightside);
    this.figureElement.appendChild(this.titleElementrightside);
    this.rightSectionElement.appendChild(this.textElementrightside);
    this.rightSectionElement.appendChild(this.wrapperElement);
    this.wrapperElement.appendChild(this.audioElement);
    this.wrapperElement.appendChild(this.linkElement)
  }

  renderText(data){
    this.imgElementrightside.src = data[0]["img"];
    this.datumElementrightside.innerText = data[0]["date (dd-mm-yyyy)"];
    this.titleElementrightside.innerText = data[0]["title"];
    this.textElementrightside.innerText = data[0]["summary"] ;
    this.audioElement.src = data[0]["audio"];
    this.linkElement.innerHTML = "source >";
    this.linkElement.href = data[0]["url"]

  }
}

class Footer {
  placeToBeRenderFooter;

  constructor(placeToBeRenderFooter) {
    this.placeToBeRenderFooter = document.getElementsByTagName(
      placeToBeRenderFooter
    )[0];
    this.footerElement = document.createElement("footer");
    this.footerElement.classList = "footer";

    this.footerTextElement = document.createElement("h3");
    this.footerTextElement.classList = "footer__text";
    this.footerTextElement.innerText = "Gemaakt door - Mert SD2C MediaCollege";
  }

  render() {
    this.placeToBeRenderFooter.appendChild(this.footerElement);
    this.footerElement.appendChild(this.footerTextElement);
  }
}

class App {
  header;
  mainElement;
  footer;
  GetDataFromApi;

  constructor() {
    this.header = new Header("body");
    this.mainElement = new CollectionMain("body");
    this.footer = new Footer("body");
    this.GetDataFromApi = new GetDataFromApi("./data/data.json");

    this.GetDataFromApi.getData().then((data) => {
      this.mainElement.makeCardsFromData(data);
      this.mainElement.rightPanel.renderText(data);
    });

    this.header.render();
    this.mainElement.render();
    this.footer.render();
  }
}

const app = new App();
