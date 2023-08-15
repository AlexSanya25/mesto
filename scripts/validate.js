const validationConfig = {
    formSelector: '.popup__input-container',
    inputSelector: '.popup__input-item',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input-item_error'
};


const setSubmitButtonState = (isActive, buttonElement) => {

    if (isActive) {
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');

    } else {
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    };
};


const checkFormValidity = (formElement, buttonElement) => {
    if (formElement.checkValidity()) {
        setSubmitButtonState(true, buttonElement)
    } else {
        setSubmitButtonState(false, buttonElement)
    }
};




const showInputError = (inputElement) => {
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(validationConfig.inputErrorClass);

};

const hideInputError = (inputElement) => {
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = "";
};


const checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(inputElement);
    } else {
        hideInputError(inputElement);
    }


};


const setEventListeners = (formElement, validationConfig) => {
    const inputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(inputElement, formElement);
            checkFormValidity(formElement, buttonElement);
        });
    });
};


function enableValidation(validationConfig) {
    const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));
    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement, validationConfig);
    });

};

enableValidation(validationConfig);









