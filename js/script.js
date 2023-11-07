const btn = document.getElementById('submit-btn');
const formSubmit = document.getElementById('submit-form');
const inputEmail = document.getElementById('input_email');
const inputPhone = document.getElementById('input_tel');
const inputNumber = document.getElementById('input_number');
const inputName = document.getElementById('input_firstname');
const inputSurname = document.getElementById('input_surname');

btn.addEventListener('click', function(event) {
  event.preventDefault()
  validation(formSubmit)
  
  inputName.addEventListener('focusout', () => validation(formSubmit));
  inputSurname.addEventListener('focusout', () => validation(formSubmit));
  inputEmail.addEventListener('focusout', () => validation(formSubmit));
  inputPhone.addEventListener('focusout', () => validation(formSubmit));
  inputNumber.addEventListener('focusout', () => validation(formSubmit));
})

// Валидация формы
function validation(form) {
  const allInputs = form.querySelectorAll('input');
  const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  const PHONE_REGEXP = /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
  const NUMBER_REGEXP = /^[0-9]{14}$/g;
  let result = true;

  //Создание элемента с текстом ошибки
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('div')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text
    parent.classList.add('error')

    parent.append(errorLabel)
  }

  //Удаление элемента с ошибкой
  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('div.error-label').remove();
      parent.classList.remove('error')
    }
  }
  
  //Проверка email
  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value)
  }
  //Проверка номера телефона
  function isPhoneValid(value) {
    return PHONE_REGEXP.test(value)
  }
  //Проверка ИНН
  function isNumberValid(value) {
    return NUMBER_REGEXP.test(value)
  }

  // Проверка каждого input формы на заполнение
  for (const input of allInputs) {
    let value = input.value;
    removeError(input);

    if (input.dataset.firstname == 'true') {
      if (value === '') {
        createError(input, 'Проверьте имя')
        result = false
      }
    }

    if (input.dataset.surname == 'true') {
      if (value === '') {
        createError(input, 'Проверьте фамилию')
        result = false
      }
    }

    if (input.dataset.email == 'true') {
      if (value === '' || !isEmailValid(value)) {
        createError(input, 'Проверьте адрес электронной почты')
        result = false
      } else {
        removeError(input);
      }
    }

    if (input.dataset.tel == 'true') {
      if (value === '' || !isPhoneValid(value) || value.length > 30) {
        createError(input, 'Формат: +9 999 999 99 99')
        result = false
      } else {
        removeError(input);
      }
    }

    if (input.dataset.number == 'true') {
      if (value === '' || !isNumberValid(value) || value.length > 14) {
        createError(input, 'Проверьте ИНН')
        result = false
      } else {
        removeError(input);
      }
    }
  }

  return result
}