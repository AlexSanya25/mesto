import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';




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
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
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
const formElementProfile = popupProfile.querySelector('.popup__input-container_type_profile');



const info = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const infoInput = popupProfile.querySelector('.popup__input-item_type_name');
const jobInput = popupProfile.querySelector('.popup__input-item_type_job');

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

const openPopupProfile = function () {
  /*
  openPopup(popupProfile);
   */
  popupEventsProfile.open();
  infoInput.value = info.textContent;
  jobInput.value = job.textContent;
}

const closePopupProfile = function () {
  /*
  closePopup(popupProfile);
  */
  popupEventsProfile.close();
}


function handleFormSubmitProfile() {

  const infoValue = infoInput.value;
  const jobValue = jobInput.value;
  info.textContent = infoValue;
  job.textContent = jobValue;
  closePopupProfile();
};


popupOpenButtonProfile.addEventListener('click', openPopupProfile);
popupCloseButtonProfile.addEventListener('click', closePopupProfile);
/*
formElementProfile.addEventListener('submit', handleFormSubmitProfile);
*/





//  экземпляр класса popupWithImage

const popupWithImage = new PopupWithImage('.popup_photo');

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}








/*
const popupSelector = '.popup';
*/
const popupProfileSelector = '.popup_profile';
const popupAddSelector = '.popup_add';
const popupPhotoSelector = '.popup_photo';


// зкземпляр класса Popup

const popupEventsProfile = new Popup(popupProfileSelector);
popupEventsProfile.setEventListeners();

const popupEventsAdd = new Popup(popupAddSelector);
popupEventsAdd.setEventListeners();

const popupEventsPhoto = new Popup(popupPhotoSelector);
popupEventsPhoto.setEventListeners();


















/*
// экземпляр класса card

initialCards.forEach((item) => {
  const card = new Card(item, '.cards');
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement); 
});
*/





// экземпляр класса section

const cardListSelector = '.elements';

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.cards', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
},
  cardListSelector
);

cardList.renderItems();











/*
const renderCards = () => {
  initialCards.forEach((item) => {
    container.append(createElByTemplate(item));
  });
};



const createElByTemplate = (data) => {
  const el = template.content.cloneNode(true);
  const elTitle = el.querySelector('.element__title');
  elTitle.textContent = data.name;
  const img = el.querySelector('.element__image');
  img.src = data.link;
  img.alt = data.name;

  const deleteButton = el.querySelector('.element__delete');
  deleteButton.addEventListener('click', deleteEl);

  const likeButton = el.querySelector('.element__like');
  likeButton.addEventListener('click', likeEl);


  const openPopupPhoto = function () {
    openPopup(popupPhoto);
    popupPhotoText.textContent = data.name;
    popupPhotoImage.src = data.link;
    popupPhotoImage.alt = data.name;
  }

  img.addEventListener('click', openPopupPhoto);



  return el;
};




const deleteEl = (evt) => {
  const el = evt.target.closest('.element');
  el.remove();
}

const likeEl = (evt) => {
  evt.target.classList.toggle('element__like_active');
}

renderCards();


*/

const popupCloseButtonPhoto = popupPhoto.querySelector('.popup__close_type_photo');



const closePopupPhoto = function () {
  /*
  closePopup(popupPhoto);
  */
  popupEventsPhoto.close();
}

popupCloseButtonPhoto.addEventListener('click', closePopupPhoto);





const popupOpenButtonAdd = document.querySelector('.profile__addbutton');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close_type_add');

const openPopupAdd = function () {
  /*
  openPopup(popupAdd);
  */
  popupEventsAdd.open();
}
popupOpenButtonAdd.addEventListener('click', openPopupAdd);


const closePopupAdd = function () {
  /*
  closePopup(popupAdd);
  */
  popupEventsAdd.close();
}
popupCloseButtonAdd.addEventListener('click', closePopupAdd);










const formElementAdd = document.querySelector('.popup__input-container_type_add');


/*
const title = document.querySelector('.element__title');
const link = document.querySelector('.element__image');
*/

const titleInput = document.querySelector('.popup__input-item_type_title');
const linkInput = document.querySelector('.popup__input-item_type_link');


function handleFormSubmitAdd() {
 
  const card = new Card({ name: titleInput.value, link: linkInput.value }, '.cards');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
  validatorFormAdd.submitButtonDisabled();
  formElementAdd.reset()
  closePopupAdd();
}
/*
formElementAdd.addEventListener('submit', handleFormSubmitAdd);
*/






/*
function escClosePopup(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
*/




//закрытие кликом на оверлэй

/*
const overlayClosePopup = function (evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  };
};


popupProfile.addEventListener('click', overlayClosePopup);
popupAdd.addEventListener('click', overlayClosePopup);
popupPhoto.addEventListener('click', overlayClosePopup);
*/





//зкземпляры класса PopupWithForm

const popupWithFormProfile = new PopupWithForm(popupProfileSelector, handleFormSubmitProfile);
popupWithFormProfile.setEventListeners();

const popupWithFormAdd = new PopupWithForm(popupAddSelector, handleFormSubmitAdd);
popupWithFormAdd.setEventListeners();