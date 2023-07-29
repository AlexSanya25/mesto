const popupProfile = document.querySelector('.popup_profile');
const popupOpenButtonProfile = document.querySelector('.profile__editbutton');
const popupCloseButtonProfile = popupProfile.querySelector('.popup__close');
const formElementProfile = popupProfile.querySelector('.popup__input-container_type_profile');

let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');
const nameInput = popupProfile.querySelector('.popup__input-item_type_name');
const jobInput = popupProfile.querySelector('.popup__input-item_type_job');


function openPopup(popup) {
  popup.classList.add('popup_opened');
}


function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const openPopupProfile = function () {
    openPopup(popupProfile);
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

const closePopupProfile = function () {
  closePopup(popupProfile);
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    name.textContent = nameValue;
    job.textContent = jobValue;
    closePopupProfile();
}

popupOpenButtonProfile.addEventListener('click', openPopupProfile);
popupCloseButtonProfile.addEventListener('click', closePopupProfile);
formElementProfile.addEventListener('submit', handleFormSubmit);









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

const container = document.querySelector('.elements');
const template = document.querySelector('.cards');




const popupPhoto = document.querySelector('.popup_photo');
const popupPhotoImage = popupPhoto.querySelector('.popup__photo-image');
const popupPhotoText = popupPhoto.querySelector('.popup__photo-text');



const renderCards = () => {
    initialCards.forEach((item) => {
       container.append(createElByTemplate(item));
    });
};



const createElByTemplate = (data) => {
    const el = template.content.cloneNode(true);
    const h2 = el.querySelector('.element__title');
    h2.textContent = data.name;
    const img = el.querySelector('.element__image');
    img.src = data.link;
    img.alt = data.name;

    const deleteButton = el.querySelector('.element__delete');
    deleteButton.addEventListener('click', deleteEl);

    const likeButton = el.querySelector('.element__like');
    likeButton.addEventListener('click', likeEl);


    
    const popupOpenButtonPhoto = el.querySelector('.element__image');
    
    
    
    const openPopupPhoto = function () {
        openPopup(popupPhoto);
        popupPhotoText.textContent = data.name;
        popupPhotoImage.src = data.link;
        popupPhotoImage.alt = data.name;
    }

    popupOpenButtonPhoto.addEventListener('click', openPopupPhoto);
    
    

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




const popupCloseButtonPhoto = popupPhoto.querySelector('.popup__close_type_photo');

const closePopupPhoto = function () {
  closePopup(popupPhoto);
}

popupCloseButtonPhoto.addEventListener('click', closePopupPhoto);




const popupAdd = document.querySelector('.popup_add');
const popupOpenButtonAdd = document.querySelector('.profile__addbutton');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close_type_add');

const openPopupAdd = function () {
    openPopup(popupAdd);
}
popupOpenButtonAdd.addEventListener('click', openPopupAdd);


const closePopupAdd = function () {
    closePopup(popupAdd);
}
popupCloseButtonAdd.addEventListener('click', closePopupAdd);










const formElementAdd = document.querySelector('.popup__input-container_type_add');


const title = document.querySelector('.element__title');
const link = document.querySelector('.element__image');
const titleInput = document.querySelector('.popup__input-item_type_title');
const linkInput = document.querySelector('.popup__input-item_type_link');


function handleFormSubmitAdd (evt) {
    evt.preventDefault(); 
    
    container.prepend(createElByTemplate({name: titleInput.value, link: linkInput.value}));

    closePopupAdd();
    evt.target.reset();
}

formElementAdd.addEventListener('submit', handleFormSubmitAdd);



