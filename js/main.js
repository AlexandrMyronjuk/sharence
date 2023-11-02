const doc = document;
const body = doc.body;

const headerBlock = doc.querySelector(".header");
const headerMenu= doc.querySelector(".menu");
const headerBurgerBtn = doc.getElementById("burgerBtn");
const headerExitBtn = doc.getElementById("exitBtn");

console.log('headerExitBtn');

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



