
const burger = () => {
   const burgerBtn = document.querySelector('.burgerbtn');
   const burgerIconFirst = document.getElementById('burger-icon-first');
   const burgerIconSecond = document.getElementById('burger-icon-second');
   const burgerMod = document.querySelector('.menu-burger')
   const burgerMenu = document.querySelector('.menu-burger--window')

   burgerBtn.addEventListener('click', () => {
      burgerIconFirst.classList.toggle('active-first');
      burgerIconSecond.classList.toggle('active-second');
      burgerMenu.classList.toggle('active-burg-menu');
      burgerMod.classList.toggle('active-mod-burg');
   })

   window.addEventListener('click', e => {
      if (e.target === burgerMod) {
         burgerIconFirst.classList.toggle('active-first');
         burgerIconSecond.classList.toggle('active-second');
         burgerMenu.classList.toggle('active-burg-menu');
         burgerMod.classList.toggle('active-mod-burg');
      }
   })  
}
burger();
export default burger;

