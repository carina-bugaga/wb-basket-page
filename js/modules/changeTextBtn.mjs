const changeTextBtn = (checkbox, btn) => {
  checkbox.checked ? btn.textContent = 'Оплатить 2 101 063 сом' : btn.textContent = 'Заказать'
}

export default changeTextBtn