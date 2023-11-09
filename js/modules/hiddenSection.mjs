const hiddenSection = (event) => {
  let btn = event.target
  let parent = btn.parentNode
  let hiddenElem = parent.nextElementSibling
  const hiddenLabel = document.getElementById('hidden-label')
  const hiddenTitle = document.querySelector('.hidden-title')
  
  hiddenElem.classList.toggle('hidden')
  btn.classList.toggle('arrow-rotate')
  
  if (btn.dataset.top == 'true') {
    hiddenLabel.classList.toggle('hidden');
    hiddenTitle.classList.toggle('show');
  }
}

export default hiddenSection