
const contacts = () => {
   const downArrow = document.getElementById("chevron-down");
   const upArrow = document.getElementById("chevron-up");
   const workMenu = document.getElementById("work-time");
   const number = document.getElementById("telephone");


   number.addEventListener("click", e => {
      workMenu.classList.toggle("active");
      downArrow.classList.toggle("noactive");
      upArrow.classList.toggle("on");
      
   })
}

export default contacts();
