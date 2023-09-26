import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
      this._forms = this._popup.querySelector('.popup__input-container');
    }
  
    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._forms.querySelectorAll('.popup__input-item');
      
        // создаём пустой объект
        this._formValues = {};
      
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        // возвращаем объект значений
        return this._formValues;
    }
  
    setEventListeners() {
      super.setEventListeners()
      this._forms.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
     
    }
  
    close() {
      super.close();
      this._forms.reset();
    }
  
  }