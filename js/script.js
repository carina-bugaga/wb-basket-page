import validation from "./modules/validation.mjs";
import maskPhone from "./modules/maskPhone.mjs";
import changeTextBtn from "./modules/changeTextBtn.mjs";
import { tooltip, tooltipDelete } from "./modules/tooltip.mjs";
import hiddenSection from "./modules/hiddenSection.mjs";
import { openModalDelivery, openModalPay, closeModalDelivery, closeModalPay } from "./modules/modal.mjs";
import { hiddenBlockPoint, hiddenBlockCoutier } from "./modules/modal.mjs";
import selectAllProducts from "./modules/selectAllProducts.mjs";

const btn = document.getElementById('submit-btn')
const inputEmail = document.getElementById('input_email')
const inputPhone = document.getElementById('input_tel')
const inputNumber = document.getElementById('input_number')
const inputName = document.getElementById('input_firstname')
const inputSurname = document.getElementById('input_surname')
const checkboxPay = document.getElementById('checkbox_pay')
const tooltipSeller = document.querySelectorAll('.seller-info')
const tooltipSale = document.querySelectorAll('.sale')
const arrowBtns = document.querySelectorAll('.arrow__icon')
const btnModalDelivery = document.getElementById('btn-modal-delivery')
const pencilModalDelivery = document.getElementById('pencil-modal-delivery')
const btnSelectDelivery = document.getElementById('modal-btn-delivery')
const btnCloseDelivery = document.getElementById('close-delivery')
const btnModalPay = document.getElementById('btn-modal-pay')
const pencilModalPay = document.getElementById('pencil-modal-pay')
const btnSelectPay = document.getElementById('modal-btn-pay')
const btnClosePay = document.getElementById('close-pay')
const btnToPoint = document.getElementById('to-point')
const btnByCourier = document.getElementById('by-courier')
const checkboxSelectAll = document.getElementById('checkbox-select-all')

//Валидация формы
btn.addEventListener('click', function(event) {
  event.preventDefault()
  validation()
  
  inputName.addEventListener('focusout', () => validation());
  inputSurname.addEventListener('focusout', () => validation());
  inputEmail.addEventListener('focusout', () => validation());
  inputPhone.addEventListener('focusout', () => validation());
  inputNumber.addEventListener('focusout', () => validation());
})

//Маска ввода номера телефона
inputPhone.addEventListener('input', () => maskPhone(inputPhone))

//Изменение теста кнопки
checkboxPay.addEventListener('change', () => changeTextBtn(checkboxPay, btn))

//Всплывающая подсказка при наведении на элементы
tooltipSeller.forEach(elem => {
  elem.addEventListener('mouseover', (event) => tooltip(event, 25));
})
tooltipSeller.forEach(elem => {
  elem.addEventListener('mouseout', () => tooltipDelete());
})
tooltipSale.forEach(elem => {
  elem.addEventListener('mouseover', (event) => tooltip(event, 50));
})
tooltipSale.forEach(elem => {
  elem.addEventListener('mouseout', () => tooltipDelete());
})

//Сворачивание блоков с продуктами
arrowBtns.forEach(elem => elem.addEventListener('click', (event) => hiddenSection(event)))

//Модальное окно доставки
btnModalDelivery.addEventListener('click', () => openModalDelivery())
pencilModalDelivery.addEventListener('click', () => openModalDelivery())
btnSelectDelivery.addEventListener('click', () => closeModalDelivery())
btnCloseDelivery.addEventListener('click', () => closeModalDelivery())

//Отображение блока в зависимости от способа доставки
btnToPoint.addEventListener('click', () => hiddenBlockCoutier())
btnByCourier.addEventListener('click', () => hiddenBlockPoint())

//Модальное окно оплаты
btnModalPay.addEventListener('click', () => openModalPay())
pencilModalPay.addEventListener('click', () => openModalPay())
btnSelectPay.addEventListener('click', () => closeModalPay())
btnClosePay.addEventListener('click', () => closeModalPay())

//Выбор всех продуктов в корзине
checkboxSelectAll.addEventListener('change', (event) => selectAllProducts(event))