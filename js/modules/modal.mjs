const pointsList = document.querySelectorAll('.address-point')
const couriersList = document.querySelectorAll('.address-courier')
const btnToPoint = document.getElementById('to-point')
const btnByCourier = document.getElementById('by-courier')

export const openModalDelivery = () => {
  document.getElementById('modal-delivery').style.display = "block";
}
    
export const closeModalDelivery = () => {
  document.getElementById('modal-delivery').style.display = "none";
}

export const openModalPay = () => {
  document.getElementById('modal-pay').style.display = "block";
}
    
export const closeModalPay = () => {
  document.getElementById('modal-pay').style.display = "none";
}

export const hiddenBlockCoutier = () => {
  pointsList.forEach(el => {
    el.classList.add('show')
    el.classList.remove('hidden')
})
  couriersList.forEach(el => {
    el.classList.add('hidden')
    el.classList.remove('show')
  })
  btnToPoint.classList.add('modal-btn_active')
  btnByCourier.classList.remove('modal-btn_active')
}

export const hiddenBlockPoint = () => {
  couriersList.forEach(el => {
    el.classList.add('show')
    el.classList.remove('hidden')
  })
  pointsList.forEach(el => {
    el.classList.add('hidden')
    el.classList.remove('show')
  })
  btnByCourier.classList.add('modal-btn_active')
  btnToPoint.classList.remove('modal-btn_active')
}