const catalog = () => {
   const catalogBtn = document.querySelector(".header__catalog");
   const catalogMenu = document.querySelector(".catalog__module");
   const catalogIcons = document.querySelector(".header__catalog--icon");
   const catalogCloseIcon = document.querySelector(".header__catalog--close");
   const body = document.querySelector('body');

   // Close/Open Catalog Menu
   catalogBtn.addEventListener('click', () => {
      catalogMenu.classList.toggle("active");
      catalogIcons.classList.toggle("notvisible");
      catalogCloseIcon.classList.toggle("active");
      body.classList.toggle("overflow")
   })
   // Close Catalog Menu onclick BG
   catalogMenu.addEventListener('click', (e) => {
      if (e.target === catalogMenu) {
         catalogMenu.classList.toggle("active");
         catalogIcons.classList.toggle("notvisible");
         catalogCloseIcon.classList.toggle("active");
      }
   })
}
catalog();

export default catalog;
  





