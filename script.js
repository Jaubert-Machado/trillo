const userNavMenu = document.querySelector(".user-nav__menu");
const userNavUser = document.querySelector(".user-nav__user");

userNavUser.addEventListener("click", function () {
  userNavMenu.classList.toggle("show-menu");
});
