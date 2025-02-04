import catalog from "./catalog.js";
import slider from "./slider_main_page.js";
import contacts from "./telephone.js";
import burger from "./menu_burger.js";
//import glassBtn from "./search-btn.js";

let logo = document.querySelectorAll('.header__shop--name');

logo.forEach(name => {
   name.innerHTML = "GAME<span>2BUY</span>"
})