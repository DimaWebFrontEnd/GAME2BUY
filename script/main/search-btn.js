const glassBtn = () => {
   /* const downArrow = document.getElementById("chevron__down--glass");
   const upArrow = document.getElementById("chevron__up--glass"); */
   const searchMenu = document.getElementById("search");
   const glass = document.getElementById("glass");
   const closeSearch = document.getElementById("close-searchbar-mob");

   glass.addEventListener("click", e => {
      searchMenu.classList.toggle("active");
   })
   closeSearch.addEventListener("click", e => {
      searchMenu.classList.toggle("active");
   })
}
glassBtn();
//export default glassBtn();