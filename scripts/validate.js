// инпуты и форма уже есть

const submitButton = document.querySelector('.popup__save');



//слушатель должен проверить каждый инпут на валидность и
//если есть ошибки, то вставить ошибку в спан

const setSubmitButtonState = (isActive) => {
    if (isActive) {
        submitButton.classList.add('popup__save');
        submitButton.classList.remove('popup__save_disabled');
    } else {
        submitButton.classList.add('popup__save_disabled');
        submitButton.classList.remove('popup__save');
    }
}



const validateInput = (inputElement) => {
    var errorElement = document.querySelector(`#${inputElement.id}-error`)
    if (inputElement.checkValidity()) {
        errorElement.textContent = "";
    } else {
        errorElement.textContent = inputElement.validationMessage;
    };

    // дизэйблить кнопку
    if (formElementProfile.checkValidity()) {
        setSubmitButtonState(true)
    } else {
        setSubmitButtonState(false)
    }

};


const validateForm = (event) => {
    event.preventDefault();

    validateInput(nameInput);
    validateInput(jobInput);

    if (formElementProfile.checkValidity()) {
        console.log('valid');
        let nameValue = nameInput.value;
        let jobValue = jobInput.value;
        name.textContent = nameValue;
        job.textContent = jobValue;
        closePopupProfile();
    } else {
        console.log('not valid');
    }

};


const validateFormOnInput = (event) => {
    validateInput(event.target);
}




// повесить слушатель на сабмит формы
formElementProfile.addEventListener('submit', validateForm);

// повесить слушатель на ввод в инпут вилд
formElementProfile.addEventListener('input', validateFormOnInput)





