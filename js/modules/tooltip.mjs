export const tooltip = (e, top) => {
  const parent = e.target.parentNode;
  let tooltipText = e.target.dataset.tooltip
  
  if (!tooltipText) return 
  
  let tooltipElem = document.createElement('div')
  tooltipElem.className = 'tooltip'
  tooltipElem.innerHTML = tooltipText
  parent.append(tooltipElem)

  tooltipElem.style.top = top + "px"
}

export const tooltipDelete = () => {
  document.querySelector('.tooltip').remove()
}