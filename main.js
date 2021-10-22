const hambIcon = document.querySelector('.fa-bars');
const hambClose = document.querySelector('.fa-times');
const hambMenu = document.querySelector('.hamburger-menu');

hambIcon.addEventListener('click',function(){
    hambMenu.classList.add('active');
});

hambClose.addEventListener('click',function(){
    hambMenu.classList.remove('active');
});