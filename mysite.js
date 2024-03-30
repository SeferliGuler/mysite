
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');
 let menuIcon=document.querySelector('#menu-icon');
 let navbar=document.querySelector('.navbar');


   menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
   }
   

    window.onscroll = () =>{

     navbar.classList.remove('active');

     let header = document.querySelector('.header');
      header.classList.toggle('sticky',window.scrollY > 100);

     menuIcon.classList.remove('fa-x');
     navbar.classList.remove('active');
 }

   // swipper...

 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 50,
   loop: true,
   grabCursor:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

let darkModeIcon = document.querySelector('#darkMove-icon');

darkModeIcon.onclick = ()=> {
  darkModeIcon.classList.toggle('fa-sun');
  document.body.classList.toggle('dark-mode')
}


  ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay:200
   });

   ScrollReveal().reveal('.home-contend, .heading', { origin: 'top' });