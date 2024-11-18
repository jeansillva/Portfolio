//Animação de escurecimento do header quando houver scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

//Animação de seta para baixo na section hero
const chevron = document.querySelector('.chevron-down');
chevron.addEventListener('mouseenter', () => {
  chevron.classList.add('move-down');
});

chevron.addEventListener('mouseleave', () => {
  chevron.classList.remove('move-down');
});


