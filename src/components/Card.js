/*
import {popupWithImage} from './index.js'
*/
/*
import {popupPhotoImage, popupPhotoText, popupEventsPhoto} from './index.js'
*/
/*
import {openPopup} from './index.js'
*/

export class Card {
  constructor(data, templateSelector, handleCardClick, { like }, { dislike }, { handleDeleteClick }, userId) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._data = data;
    this._like = like;
    this._id = data._id;
    this._likes = data.likes;


    this._dislike = dislike;
    this._handleDeleteClick = handleDeleteClick;
    this._owner = data.owner;
    this._userId = userId;



  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    const deleteButton = cardElement.querySelector('.element__delete');
    if (this._owner._id !== this._userId) {
      deleteButton.style.display = 'none';
    }





    return cardElement;

  }




  generateCard() {

    this._element = this._getTemplate();
    this._count = this._element.querySelector('.element__like-text');
    this.likeCount(this._data);
    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;

    const likeButton = this._element.querySelector('.element__like');
    this._likes.forEach(like => {
      if (like._id === this._userId) {
        likeButton.classList.add('element__like_active');
      }
    })


    return this._element;
  }

  _setEventListeners() {

    const cardImage = this._element.querySelector('.element__image');
    cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    const deleteButton = this._element.querySelector('.element__delete');
    deleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });


    const likeButton = this._element.querySelector('.element__like');
    likeButton.addEventListener('click', () => {
      if (likeButton.classList.contains('element__like_active')) {
        this._dislike()
      } else {
        this._like()
      }
    });
  }

  deleteEl() {
    this._element.remove();
  }

  likeEl() {
    const likeButton = this._element.querySelector('.element__like');
    likeButton.classList.add('element__like_active');
  }

  dislikeEl() {
    const likeButton = this._element.querySelector('.element__like');
    likeButton.classList.remove('element__like_active');
  }


  likeCount(data) {
    this._likes = data.likes;
    this._count.textContent = this._likes.length;

  }


};