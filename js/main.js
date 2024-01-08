let menu = document.querySelector(".header__menu");
let burger = document.querySelector(".header__burger");
burger.onclick = function (e) {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("look");
};
