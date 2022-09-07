const navBtn = document.querySelector('.icon');
const nav = document.querySelector('.navbar');

navBtn.addEventListener('click', function() {
  nav.classList.toggle("active");
})