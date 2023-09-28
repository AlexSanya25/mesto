import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import arkhyz from '../images/arkhyz.jpg';
import chelyabinsk from '../images/chelyab.jpg';
import ivanovo from '../images/ivanovo.jpg';
import kamchatka from '../images/kamchatka.jpg';
import kholmogor from '../images/kholmogory.jpg';
import baikal from '../images/baikal.jpg';

const validationConfig = {
  formSelector: '.popup__input-container',
  inputSelector: '.popup__input-item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input-item_error'
};


const initialCards = [
  {
    name: 'Архыз',
    link: arkhyz
  },
  {
    name: 'Челябинская область',
    link: chelyabinsk
  },
  {
    name: 'Иваново',
    link: ivanovo
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: kholmogor
  },
  {
    name: 'Байкал',
    link: baikal
  }
];




const formProfile = document.querySelector('.popup__input-container_type_profile');
const formAdd = document.querySelector('.popup__input-container_type_add');


// зкземпляр формы профиля

const validatorFormProfile = new FormValidator(validationConfig, formProfile);
validatorFormProfile.enableValidation();

// зкземпляр формы создания карточки

const validatorFormAdd = new FormValidator(validationConfig, formAdd);
validatorFormAdd.enableValidation();




const popupProfile = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');

export const popupPhoto = document.querySelector('.popup_photo');
export const popupPhotoImage = popupPhoto.querySelector('.popup__photo-image');
export const popupPhotoText = popupPhoto.querySelector('.popup__photo-text');

const popupOpenButtonProfile = document.querySelector('.profile__editbutton');
const popupCloseButtonProfile = popupProfile.querySelector('.popup__close');




const infoInput = document.querySelector('.popup__input-item_type_name');
const jobInput = document.querySelector('.popup__input-item_type_job');

/*
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClosePopup);
}
*/
/*
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClosePopup);
}
*/

/*
const info = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
*/




const openPopupProfile = function () {
  popupWithFormProfile.open();
  const getUsInf = userInfo.getUserInfo();
  infoInput.value = getUsInf.name;
  jobInput.value = getUsInf.job;


}

popupOpenButtonProfile.addEventListener('click', openPopupProfile);





/*
const closePopupProfile = function () {
  popupWithFormProfile.close()
}

popupCloseButtonProfile.addEventListener('click', closePopupProfile);
*/



/*
function handleFormSubmitProfile () {
  
  const getUsInf = userInfo.getUserInfo();
  const infoValue = infoInput.value;
  const jobValue = jobInput.value;
  getUsInf.info= infoValue;
  getUsInf.job = jobValue;

  
 
  closePopupProfile();
};
*/




/*
formElementProfile.addEventListener('submit', handleFormSubmitProfile);
*/



//  экземпляр класса popupWithImage

const popupWithImage = new PopupWithImage('.popup_photo');

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}
popupWithImage.setEventListeners();





const createCard = (item) => {
  const card = new Card(item, '.cards', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    
    
}

// экземпляр класса section

const cardListSelector = '.elements';

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    createCard(item);
    
  }
  
},
  cardListSelector
);

cardList.renderItems();






// функция закрытия попапа Фото
/*
const popupCloseButtonPhoto = popupPhoto.querySelector('.popup__close_type_photo');

const closePopupPhoto = function () {
  popupWithImage.close();
}

popupCloseButtonPhoto.addEventListener('click', closePopupPhoto);
*/





const popupOpenButtonAdd = document.querySelector('.profile__addbutton');

const openPopupAdd = function () {
  popupWithFormAdd.open();
}
popupOpenButtonAdd.addEventListener('click', openPopupAdd);



/*
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close_type_add');

const closePopupAdd = function () {
  popupWithFormAdd.close();
}

popupCloseButtonAdd.addEventListener('click', closePopupAdd);
*/










/*
const title = document.querySelector('.element__title');
const link = document.querySelector('.element__image');
*/
/*
const titleInput = document.querySelector('.popup__input-item_type_title');
const linkInput = document.querySelector('.popup__input-item_type_link');
*/
/*
function handleFormSubmitAdd() {

  const card = new Card({ name: titleInput.value, link: linkInput.value }, '.cards');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
  validatorFormAdd.submitButtonDisabled();
  formElementAdd.reset()
  closePopupAdd();
}
*/




/*
formElementAdd.addEventListener('submit', handleFormSubmitAdd);
*/




//зкземпляры класса PopupWithForm



const popupWithFormProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupWithFormProfile.close();
  }

});

popupWithFormProfile.setEventListeners();




const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (item) => {
    createCard(item);
    validatorFormAdd.submitButtonDisabled();
    popupWithFormAdd.close();
  }

});

popupWithFormAdd.setEventListeners()


// зкземпляр класса userInfo

const userInfo = new UserInfo({ infoSelector: '.profile__title', jobSelector: '.profile__subtitle' });



