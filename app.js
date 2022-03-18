const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSelectors = document.querySelectorAll('.main-content');

function pageTransitions(){
  // Button click active class
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn =  document.querySelector('.active-btn');
      currentBtn.className = currentBtn.className.replace('active-btn', '');
      this.className +=' active-btn';
    })
  }
}

pageTransitions();