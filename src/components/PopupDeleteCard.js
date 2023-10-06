import { Popup } from './Popup.js';


export class PopupWithDelete extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
      this._forms = this._popup.querySelector('.popup__input-container');
    }
  
    close() {
      super.close();
    }
  
    open(card) {
      super.open();
      this._card = card;
  
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._forms.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._card);
        
      });
  
    }
  }