const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__editbutton_open-popup');
const popupCloseButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__input-container');
const formSaveButton = popup.querySelector('.popup__save');

let Name = document.querySelector('.profile__title_name');
let Job = document.querySelector('.profile__subtitle_job');
let NameInput = popup.querySelector('.popup__input-name');
let JobInput = popup.querySelector('.popup__input-job');

const popupToggle = function () {
    popup.classList.toggle('popup_opened');
    NameInput.value = Name.textContent;
    JobInput.value = Job.textContent;
}
popupOpenButton.addEventListener('click', popupToggle);

function handleFormSubmit(evt) {
    evt.preventDefault();
    let NameValue = NameInput.value;
    let JobValue = JobInput.value;
    Name.textContent = NameValue;
    Job.textContent = JobValue;
};

popupCloseButton.addEventListener('click', function () {
    popup.classList.toggle('popup_opened');
});

formSaveButton.addEventListener('click', function () {
    popup.classList.toggle('popup_opened');
});

formElement.addEventListener('submit', handleFormSubmit);
