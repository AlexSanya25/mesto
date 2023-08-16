const validationConfig = {
    formSelector: '.popup__input-container',
    inputSelector: '.popup__input-item',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input-item_error'
};


const setSubmitButtonState = (formElement, buttonElement, validationConfig) => {

    if (formElement.checkValidity()) {
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




const showInputError = (inputElement, formElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(validationConfig.inputErrorClass);

};

const hideInputError = (inputElement, formElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = "";
};


const checkInputValidity = (inputElement, formElement) => {
    if (!inputElement.validity.valid) {
        showInputError(inputElement, formElement);
    } else {
        hideInputError(inputElement,formElement);
    }


};


const setEventListeners = (formElement, validationConfig) => {
    const inputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(inputElement, formElement);
            setSubmitButtonState(formElement, buttonElement, validationConfig);
        });
    });
};


const enableValidation = (validationConfig) => {
    const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));
    forms.forEach((formElement) => {  
        setEventListeners(formElement, validationConfig);
    });

};

enableValidation(validationConfig);









