export class FormValidator {
    constructor(validationConfig, formElement) {
        this._formSelector = validationConfig.formSelector
        this._inputSelector = validationConfig.inputSelector
        this._submitButtonSelector = validationConfig.submitButtonSelector
        this._inactiveButtonClass = validationConfig.inactiveButtonClass
        this._inputErrorClass = validationConfig.inputErrorClass
        this._formElement = formElement;
        this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    }

    _setSubmitButtonState() {

        if (this._formElement.checkValidity()) {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        } else {
            this.submitButtonDisabled();
        };
    };

    submitButtonDisabled() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    };

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputErrorClass);

    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
    };


    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };


    _setEventListeners() {

        this._inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._setSubmitButtonState();

            });

        });
    };


    enableValidation() {
        this._setEventListeners();
    };

};















/*

const setSubmitButtonState = (formElement, buttonElement, validationConfig) => {

    if (formElement.checkValidity()) {
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');

    } else {
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    };
};


const showInputError = (validationConfig, inputElement, formElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(validationConfig.inputErrorClass);

};

const hideInputError = (validationConfig, inputElement, formElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = "";
};


const checkInputValidity = (inputElement, formElement) => {
    if (!inputElement.validity.valid) {
        showInputError(validationConfig, inputElement, formElement);
    } else {
        hideInputError(validationConfig, inputElement,formElement);
    }


};


const setEventListeners = (formElement, validationConfig) => {
    const inputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(inputElement, formElement, validationConfig);
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

*/