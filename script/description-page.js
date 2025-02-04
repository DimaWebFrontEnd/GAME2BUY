/* Product Image Gallary */

let slideIndex = 1;
showSlides(slideIndex);

const currentSlide = (n) => {
   showSlides(slideIndex = n)
}

function showSlides(n) {
   const slides = document.querySelectorAll('.mySlide');
   const dots = document.querySelectorAll('.demo');
   let i;
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length};

   slides.forEach(slide => {
      slide.style.display = 'none';
   })
   dots.forEach(dot => {
      dot.classList.remove('ative-small-img')
   })

   //slides[slideIndex - 1].style.display = 'block';
   //slides[slideIndex - 1].style.display = 'flex';
   dots[slideIndex - 1].classList.add('ative-small-img')
}

// Modal

const body = document.querySelector('html');
const modalWindow = document.querySelector('.modal__window');


const openModal = () => {
   if (window.innerWidth < 600) {
      modalWindow.style.display = "none";
   } else {
      modalWindow.style.display = "block";
      body.style.overflow = "hidden";
   }
}

const closeModal = () => {
   modalWindow.style.display = "none";
   body.style.overflow = "auto";
}

let modalSlideIndex = 1;
modalShowSlides(modalSlideIndex);

// Next/previous controls
function plusSlides(n) {
   modalShowSlides(modalSlideIndex += n)
 }

const modalCurrentSlide = (n) => {
   modalShowSlides(modalSlideIndex = n)
}

function modalShowSlides(n) {
   const slides = document.querySelectorAll('.slide');
   const dots = document.querySelectorAll('.thumbnail__modal--div');
   let i;
   if (n > slides.length) {modalSlideIndex = 1}
   if (n < 1) {modalSlideIndex = slides.length};

   slides.forEach(slide => {
      slide.style.display = 'none';
   })
   dots.forEach(dot => {
      dot.classList.remove('modal__active')
   })

   slides[modalSlideIndex - 1].style.display = 'block';
   //slides[slideIndex - 1].style.display = 'flex';
   dots[modalSlideIndex - 1].classList.add('modal__active')
}

let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");

let imgGallary = document.querySelector('.thumbnail-img');
let arrows = imgGallary.querySelectorAll('i');

rightArrow.addEventListener("click", (e) => {
   const dots = document.querySelectorAll('.demo')[0];
   imgGallary.scrollLeft += dots.clientWidth + 20;
});
leftArrow.addEventListener("click", (e) => {
   const dots = document.querySelectorAll('.demo')[0];
   imgGallary.scrollLeft -= dots.clientWidth + 20;
});
