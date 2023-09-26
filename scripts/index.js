import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
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
  infoInput.value = getUsInf.info;
  jobInput.value = getUsInf.job;

}

popupOpenButtonProfile.addEventListener('click', openPopupProfile);


/*
const closePopupProfile = function () {
  
  popupEventsProfile.close();
}


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
popupCloseButtonProfile.addEventListener('click', closePopupProfile);
*/
/*
formElementProfile.addEventListener('submit', handleFormSubmitProfile);
*/



//  экземпляр класса popupWithImage

const popupWithImage = new PopupWithImage('.popup_photo');

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}




// зкземпляр класса Popup
/*
const popupEventsProfile = new Popup('.popup_profile');
popupEventsProfile.setEventListeners();

const popupEventsAdd = new Popup('.popup_add');
popupEventsAdd.setEventListeners();

const popupEventsPhoto = new Popup('.popup_photo');
popupEventsPhoto.setEventListeners();
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





// функция закрытия попапа Фото

const popupCloseButtonPhoto = popupPhoto.querySelector('.popup__close_type_photo');

const closePopupPhoto = function () {
  popupWithImage.close();
  popupWithImage.setEventListeners();
}

popupCloseButtonPhoto.addEventListener('click', closePopupPhoto);





const popupOpenButtonAdd = document.querySelector('.profile__addbutton');

const openPopupAdd = function () {
  popupWithFormAdd.open();
}
popupOpenButtonAdd.addEventListener('click', openPopupAdd);



/*
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close_type_add');

const closePopupAdd = function () {
  popupEventsAdd.close();
}
popupCloseButtonAdd.addEventListener('click', closePopupAdd);
*/







const formElementAdd = document.querySelector('.popup__input-container_type_add');


/*
const title = document.querySelector('.element__title');
const link = document.querySelector('.element__image');
*/

const titleInput = document.querySelector('.popup__input-item_type_title');
const linkInput = document.querySelector('.popup__input-item_type_link');

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
/*
const popupWithFormProfile = new PopupWithForm('.popup_profile', handleFormSubmitProfile);
popupWithFormProfile.setEventListeners();
*/


const popupWithFormProfile = new PopupWithForm({
  popupSelector: '.popup_profile', handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupWithFormProfile.close()
  }
  
});





const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_add',  handleFormSubmit: () => {
    popupWithFormAdd.close()
  }
  
});


/*
const popupWithFormAdd = new PopupWithForm('.popup_add', handleFormSubmitAdd);
popupWithFormAdd.setEventListeners();
*/





class UserInfo {
  constructor({ infoSelector, jobSelector} ) {
    this._infosel = document.querySelector(infoSelector); 
    this._jobsel = document.querySelector(jobSelector);
  }



  getUserInfo() {
    return {
      info: this._infosel.textContent,
      job: this._jobsel.textContent
    }
  }

  setUserInfo({ info, job }) {
    this._infosel.textContent = info;
    this._jobsel.textContent = job;
    
  }

}

const userInfo = new UserInfo({ infoSelector: '.profile__title', jobSelector: '.profile__subtitle' });



