const selectAllProducts = (e) => {
  const checkboxList = document.querySelectorAll('.product__checkbox')
  checkboxList.forEach(el => el.firstElementChild.checked = e.target.checked)
}

export default selectAllProducts