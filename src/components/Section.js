export class Section {
    constructor({ data, renderer }, cardListSelector) {
      this._renderedItems = data;
      this._container = document.querySelector(cardListSelector);
      this._renderer = renderer;
    }
  
    addItem(element) {
      this._container.prepend(element);
      
    }
  
  
    renderItems(data) {
      data.forEach(item => {
            this._renderer(item);
           
      });
    }
  }