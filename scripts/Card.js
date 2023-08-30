import {popupPhoto, popupPhotoImage, popupPhotoText} from './index.js'
import {openPopup} from './index.js'

export class Card { 
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;

  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;


    return this._element;
  }

  _setEventListeners() {
    const cardImage = this._element.querySelector('.element__image');
    cardImage.addEventListener('click', () => {
      this._openPopupPhoto();
    });

    const deleteButton = this._element.querySelector('.element__delete');
    deleteButton.addEventListener('click', () => {
      this._deleteEl();
    });
    
    const likeButton = this._element.querySelector('.element__like');
    likeButton.addEventListener('click', () => {
      this._likeEl();
    });
  }

  _openPopupPhoto() {
    openPopup(popupPhoto);
    popupPhotoText.textContent = this._name;
    popupPhotoImage.src = this._link;
    popupPhotoImage.alt = this._name;
  }

  _deleteEl() {
    this._element.remove();
  }
  
  _likeEl() {
    const likeButton = this._element.querySelector('.element__like');
    likeButton.classList.toggle('element__like_active');
  }

};