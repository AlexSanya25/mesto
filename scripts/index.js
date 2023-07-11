const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__editbutton');
const popupCloseButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__input-container');


let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input_name');
let jobInput = popup.querySelector('.popup__input_job');

const popupToggle = function () {
    popup.classList.toggle('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    name.textContent = nameValue;
    job.textContent = jobValue;
    popupToggle();
};

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', function () {
    popup.classList.toggle('popup_opened');
});
formElement.addEventListener('submit', handleFormSubmit);
