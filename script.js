window.addEventListener('scroll', function(){
  let navbar = document.getElementById('nav');

  if(window.scrollY >= 60){
    navbar.classList.add('sticky')
  }
  else{
    navbar.classList.remove('sticky');
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.ri-menu-fill'); // Menu icon
  const navLinks = document.getElementById('navlinks'); // Nav links container

  menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-menu'); // Toggle visibility of menu links
  });
});





VANTA.NET({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xfafafa,
  backgroundColor: 0x0,
  showDots: false
})


function animateStages() {
  const stages = document.querySelectorAll('.stage');
  let currentIndex = 0;
  
  stages.forEach(stage => {
      stage.classList.remove('visible');
  });

  function showNextStage() {
      if (currentIndex < stages.length) {
         
          stages[currentIndex].classList.add('visible');
          currentIndex++;
         
          setTimeout(showNextStage, 1000);
      } else {
          
          setTimeout(() => {
              stages.forEach(stage => {
                  stage.classList.remove('visible');
              });
              
              setTimeout(() => {
                  currentIndex = 0;
                  showNextStage();
              }, 1000);
          }, 2000);
      }
  }

  showNextStage();
}

animateStages();