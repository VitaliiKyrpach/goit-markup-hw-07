const openMenuBtn = document.querySelector("[data-menu-open]");
const closeMenuBtn = document.querySelector("[data-menu-close]");
const menu = document.querySelector("[data-menu]");

const toggleMenu = () => {
  console.log('click')
  menu.classList.toggle("translate-x-[-100%]");
  menu.classList.toggle("translate-x-0");
  document.body.classList.toggle("no-scroll");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
