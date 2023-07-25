const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__editbutton');
const popupCloseButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__input-container');


let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input-item_type_name');
let jobInput = popup.querySelector('.popup__input-item_type_job');

const popupToggle = function () {
    popup.classList.toggle('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

const popupClose = function () {
    popup.classList.toggle('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    name.textContent = nameValue;
    job.textContent = jobValue;
    popupClose();
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit);







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

const render = () => {
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

    return el;
};

render();





const popupAdd = document.querySelector('.popup_add');
const popupOpenedButton = document.querySelector('.profile__addbutton');
const popupClosedButton = popupAdd.querySelector('.popup__close_type_add');

const popupAddToggle = function () {
    popupAdd.classList.toggle('popup_opened');
}
popupOpenedButton.addEventListener('click', popupAddToggle);


const popupAddClose = function () {
    popupAdd.classList.toggle('popup_opened');
}
popupClosedButton.addEventListener('click', popupAddClose);







const formElementAdd = document.querySelector('.popup__container_type_add');


let title = document.querySelector('.element__title');
let link = document.querySelector('.element__image');
let titleInput = document.querySelector('.popup__input-item_type_title');
let linkInput = document.querySelector('.popup__input-item_type_link');


function handleFormSubmitAdd (evt) {
    evt.preventDefault(); 
    let titleValue = titleInput.value;
    let linkValue = linkInput.value;
    title.textContent = titleValue;
    link.src = linkValue;
    popupAddClose();

}

formElementAdd.addEventListener('submit', handleFormSubmitAdd);




