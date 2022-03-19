const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); //<body>

function pageTransitions(){
  // Button click active class
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn =  document.querySelector('.active-btn');
      currentBtn.className = currentBtn.className.replace('active-btn', '');
      this.className +=' active-btn';
    })
  }

  //Sections Active class
  allSections.addEventListener('click', (e)=>{
      console.log(e.target);
      const id = e.target.dataset.id;
      if(id){
        //remove selected from the other btns
        sectBtn.forEach(btn=>{
          btn.classList.remove('active');        
        });
        e.target.classList.add('active');

        //hide other sections
        sections.forEach((section)=>{
          section.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active')

      }
    });
}

pageTransitions();