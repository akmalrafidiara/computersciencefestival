const navBtn = document.querySelector('.icon');
const nav = document.querySelector('.navbar');

navBtn.addEventListener('click', function() {
  nav.classList.toggle("active");
})

// const header = document.querySelector("header");
//     const banner = document.querySelector(".banner");
//     window.addEventListener("scroll", function () {
//       header.classList.toggle("sticky", window.scrollY > 0);
//       var value = window.scrollY;
//       banner.style.top = value * 0.3 + "px";
//     });