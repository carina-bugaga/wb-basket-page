const hiddenSection = (event) => {
  let btn = event.target
  let parent = btn.parentNode
  let hiddenElem = parent.parentNode.querySelector('.products-cards')
  const hiddenLabel = document.getElementById('hidden-label')
  const hiddenTitle = document.querySelector('.hidden-title')
  const line = document.querySelector('.hidden-line')
  
  hiddenElem.classList.toggle('hidden')
  btn.classList.toggle('arrow-rotate')
  
  if (btn.dataset.top == 'true') {
    hiddenLabel.classList.toggle('hidden');
    hiddenTitle.classList.toggle('show');
    line.classList.toggle('show')
  }
}

export default hiddenSection