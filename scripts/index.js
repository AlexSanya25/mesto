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
