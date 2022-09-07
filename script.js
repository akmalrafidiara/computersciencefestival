AOS.init();

const navBtn = document.querySelector('.icon');
const nav = document.querySelector('.navbar');
const navItem = document.querySelector('.navbar')

navBtn.addEventListener('click', function() {
  nav.classList.toggle("active");
})

navItem.addEventListener('click', function() {
  nav.classList.remove("active");
})