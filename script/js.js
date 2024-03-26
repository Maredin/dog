let burgerSpan = document.querySelectorAll('.burger span');
let btnBurger = document.querySelectorAll('.burger');
let boxBurger = document.querySelector('.burger__box');
let burgerLink = document.querySelectorAll('.burgerLink');
let formBtn = document.querySelector('.form__btn');
let popup = document.querySelector('.popup');
let input = document.querySelectorAll('input');




burgerSpan[1].style.display = 'block'
burgerSpan[4].style.display = 'block'

btnBurger.forEach(btn => {
    btn.addEventListener('click', burgerMenu);
});

burgerLink.forEach(btn => {
  btn.addEventListener('click', burgerMenu);
});


function burgerMenu() {
    burgerSpan[0].style.transform = burgerSpan[0].style.transform == 'translateY(3px) rotate(-45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(3px) rotate(-45deg)';
    burgerSpan[3].style.transform = burgerSpan[3].style.transform == 'translateY(3px) rotate(-45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(3px) rotate(-45deg)';
    burgerSpan[1].style.display = burgerSpan[1].style.display == 'block' ? 'none' : 'block';
    burgerSpan[4].style.display = burgerSpan[4].style.display == 'block' ? 'none' : 'block';
    burgerSpan[2].style.transform = burgerSpan[2].style.transform == 'translateY(0px) rotate(45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(0px) rotate(45deg)';
    burgerSpan[5].style.transform = burgerSpan[5].style.transform == 'translateY(0px) rotate(45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(0px) rotate(45deg)';
    boxBurger.style.left = boxBurger.style.left == '0%' ? '-75%' : '0%';
}



/* --------------Scroll-------------  */


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



/* --------------Form-------------  */

formBtn.addEventListener('click', (e) => {
  e.preventDefault();


  input.forEach(item => {

    if(item.value != undefined && item.value != NaN && item.value != '' && item.value != false) {
      popup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    
      setTimeout(function timeShow() {
        popup.style.display = 'none'
        document.body.style.overflow = '';
      }, 3000);
    
      input.forEach(item => {
        item.value = '';
      });
    }else {
      item.value = '';
    }
  })

});