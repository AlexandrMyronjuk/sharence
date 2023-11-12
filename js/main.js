const doc = document;
const body = doc.body;

const headerBlock = doc.querySelector(".header");
const headerMenu= doc.querySelector(".menu");
const headerBurgerBtn = doc.getElementById("burgerBtn");
const headerExitBtn = doc.getElementById("exitBtn");

// for fourth section figure //
const square = doc.querySelector(".figure__item-square");
const circle = doc.querySelector(".figure__item-circle");

console.log(square);

headerBurgerBtn.addEventListener("click", (e) => {
   e.target.classList.remove('burger-area__activeBtn');
   headerExitBtn.classList.add('burger-area__activeBtn');
   headerBlock.classList.add('header-mobile');
   body.classList.add('lock');
   headerMenu.classList.add('mobile');
});

headerExitBtn.addEventListener("click", (e) => {
   e.target.classList.remove('burger-area__activeBtn');
   headerBurgerBtn.classList.add('burger-area__activeBtn');
   headerBlock.classList.remove('header-mobile');
   body.classList.remove('lock');
   headerMenu.classList.remove('mobile');
});


window.addEventListener('resize', () => {
   heightFigure (square);
   heightFigure (circle);

})
function heightFigure (elem) {
   let width = elem.offsetWidth;
   console.log(width);

   elem.style.height = `${width}px`;
};

