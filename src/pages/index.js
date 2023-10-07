import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithDelete } from '../components/PopupDeleteCard.js';


import arkhyz from '../images/arkhyz.jpg';
import chelyabinsk from '../images/chelyab.jpg';
import ivanovo from '../images/ivanovo.jpg';
import kamchatka from '../images/kamchatka.jpg';
import kholmogor from '../images/kholmogory.jpg';
import baikal from '../images/baikal.jpg';




const apiOptions = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-76',
  headers: {
    authorization: '83550a40-cebd-4081-b67b-cdf7223e3f37',
    'Content-Type': 'application/json'
  }
}


const api = new Api(apiOptions)

Promise.all([api.getUserInfoApi(), api.getAllCards()])
  .then(([data, cards]) => {
    userInfo.setUserInfo(data);
    userInfo.avatarUser(data);
    cardList.renderItems(cards);
  })
  .catch((error) => {
    console.log(error);
  })


/*
api.getUserInfoApi()
  .then((data) => {
    userInfo.setUserInfo(data);
    console.log(data._id);
  })

api.getAllCards()
  .then((data) => {
    cardList.renderItems(data);
  })

*/

/*
api.createCardApi()
  .then((data) => {
    console.log(data);
    createCard(item);
  })
*/



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
const formAvatar = document.querySelector('.popup__input-container_type_avatar');

// зкземпляр формы профиля

const validatorFormProfile = new FormValidator(validationConfig, formProfile);
validatorFormProfile.enableValidation();

// зкземпляр формы создания карточки

const validatorFormAdd = new FormValidator(validationConfig, formAdd);
validatorFormAdd.enableValidation();

const validatorFormAvatar = new FormValidator(validationConfig, formAvatar);
validatorFormAvatar.enableValidation();



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
  jobInput.value = getUsInf.about;


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
  const card = new Card(item, '.cards', handleCardClick,
    {
      like: () => {
        api.likeCardsApi(card._id)
          .then((data) => {
            card.likeEl();
            card.likeCount(data);

          })
      }
    },
    {
      dislike: () => {
        api.likeCardsApiDelete(card._id)
          .then((data) => {
            card.dislikeEl();
            card.likeCount(data);
          })
      }
    },
    {
      handleDeleteClick: () => {
        popupWithDelete.open(card);
      }
    },
    userInfo.userId




  );
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
/*
cardList.renderItems();
*/





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
    api.getRedactProfile(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupWithFormProfile.close();
        popupWithFormProfile.removeLoading()
      })
      .catch((error) => {
        console.log(error);
      })
    popupWithFormProfile.addLoading()
  }

});

popupWithFormProfile.setEventListeners();




const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (data) => {

    api.createCardApi(data)
      .then((item) => {
        createCard(item);
        popupWithFormAdd.close();
        popupWithFormAdd.removeLoading()
      })
      .catch((error) => {
        console.log(error);
      })
    popupWithFormAdd.addLoading()
    validatorFormAdd.submitButtonDisabled();
  }

});

popupWithFormAdd.setEventListeners()


const popupWithFormAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: (data) => {
    api.avatarApi(data)
      .then((data) => {
        userInfo.avatarUser(data);
        popupWithFormAvatar.close();
        popupWithFormAvatar.removeLoading()
      })
      .catch((error) => {
        console.log(error);
      })
      popupWithFormAvatar.addLoading()
    validatorFormAvatar.submitButtonDisabled();

  }

});

popupWithFormAvatar.setEventListeners()

const popupOpenButtonAvatar = document.querySelector('.profile__avatar');

const openPopupAvatar = function () {
  popupWithFormAvatar.open();
}

popupOpenButtonAvatar.addEventListener('click', openPopupAvatar);





// зкземпляр класса userInfo

const userInfo = new UserInfo({ infoSelector: '.profile__title', jobSelector: '.profile__subtitle', avatarSelector: '.profile__avatar' });

// экзмпляр класса попапа удаления карточки
const popupWithDelete = new PopupWithDelete('.popup_delete',
  {
    handleFormSubmit: (card) => {
      api.cardDeleteApi(card._id)
        .then(() => {
          popupWithDelete.close();
          card.deleteEl();
        })
    }
  }
);
popupWithDelete.setEventListeners();

