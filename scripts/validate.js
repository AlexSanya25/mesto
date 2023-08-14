

const submitButtonProfile = formElementProfile.querySelector('.popup__save_type_profile');
const submitButtonAdd = formElementAdd.querySelector('.popup__save_type_add');


const setSubmitButtonStateProfile = (isActive) => {

    if (isActive) {
        submitButtonProfile.removeAttribute('disabled');
        submitButtonProfile.classList.add('popup__save_active');
        submitButtonProfile.classList.remove('popup__save_disabled');
    } else {
        submitButtonProfile.setAttribute('disabled', true);
        submitButtonProfile.classList.add('popup__save_disabled');
        submitButtonProfile.classList.remove('popup__save_active');
    };
};

const setSubmitButtonStateAdd = (isActive) => {

    if (isActive) {
        submitButtonAdd.removeAttribute('disabled');
        submitButtonAdd.classList.add('popup__save_active');
        submitButtonAdd.classList.remove('popup__save_disabled');
    } else {
        submitButtonAdd.setAttribute('disabled', true);
        submitButtonAdd.classList.add('popup__save_disabled');
        submitButtonAdd.classList.remove('popup__save_active');
    };
};


//валидация инпутов

const validateInput = (inputElement) => {
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    if (inputElement.checkValidity()) {
        errorElement.textContent = "";
    } else {
        errorElement.textContent = inputElement.validationMessage;
    };


    //дизэйбл кнопки профайл
    if (formElementProfile.checkValidity()) {
        setSubmitButtonStateProfile(true)
    } else {
        setSubmitButtonStateProfile(false)
    };

    //дизэйбл кнопки эдд
    if (formElementAdd.checkValidity()) {
        setSubmitButtonStateAdd(true)
    } else {
        setSubmitButtonStateAdd(false)
    };
};





// валидация формы

const validateFormProfile = (event) => {
    event.preventDefault();

    if (formElementProfile.checkValidity()) {
        console.log('valid');
    } else {
        console.log('not valid');
    };

    validateInput(nameInput);
    validateInput(jobInput);

};

formElementProfile.addEventListener('submit', validateFormProfile);



const validateFormAdd = (event) => {
    event.preventDefault();


    if (formElementAdd.checkValidity()) {
        console.log('valid');
        formElementAdd.reset();
    } else {
        console.log('not valid');

    };

    validateInput(titleInput);
    validateInput(linkInput);

};

formElementAdd.addEventListener('submit', validateFormAdd);







// валидация по вводу в инпут

const validateFormOnInput = (event) => {
    validateInput(event.target);
};

formElementProfile.addEventListener('input', validateFormOnInput);
formElementAdd.addEventListener('input', validateFormOnInput);





const setEventListeners = () => {
    const inputs = Array.from(form.querySelectorAll('.popup__input-item'));
    inputs.forEach((input) => {
        input.addEventListener('input', function() {
            
        });  
    });
};







