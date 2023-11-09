import validation from "./modules/validation.mjs";
import maskPhone from "./modules/maskPhone.mjs";
import changeTextBtn from "./modules/changeTextBtn.mjs";
import { tooltip, tooltipDelete } from "./modules/tooltip.mjs";
import hiddenSection from "./modules/hiddenSection.mjs";

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

btn.addEventListener('click', function(event) {
  event.preventDefault()
  validation()
  
  inputName.addEventListener('focusout', () => validation());
  inputSurname.addEventListener('focusout', () => validation());
  inputEmail.addEventListener('focusout', () => validation());
  inputPhone.addEventListener('focusout', () => validation());
  inputNumber.addEventListener('focusout', () => validation());
})

inputPhone.addEventListener('input', () => maskPhone(inputPhone))

checkboxPay.addEventListener('change', () => changeTextBtn(checkboxPay, btn))

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

arrowBtns.forEach(elem => elem.addEventListener('click', (event) => hiddenSection(event)))