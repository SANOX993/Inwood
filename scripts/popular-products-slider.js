let offset = 0; // смещение от левого края
let scrollOffset = 0 // смещение скрола
const sliderLine = document.querySelector('.popular-products__slider-line');
const sliderCursor = document.querySelector('.popular-products__slider-bot-nav-cursor');

// работа слайдера 

document.querySelector('.popular-products__slider-bot-nav-btn2').addEventListener('click', function(){
    offset = offset + 460;
    if (offset > 2300) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.popular-products__slider-bot-nav-btn1').addEventListener('click', function(){
    offset = offset - 460;
    if (offset < 0) {
        offset = 2300;
    }
    sliderLine.style.left = -offset + 'px';
});

// работа слайдера

// работа скрола

document.querySelector('.popular-products__slider-bot-nav-btn2').addEventListener('click', function(){
    scrollOffset = scrollOffset + 16.66;
    if (scrollOffset > 83.3) {
        scrollOffset = 0;
    }
    sliderCursor.style.right = -scrollOffset + '%';
});

document.querySelector('.popular-products__slider-bot-nav-btn1').addEventListener('click', function(){
    scrollOffset = scrollOffset - 16.66;
    if (scrollOffset < 0) {
        scrollOffset = 83.3;
    }
    sliderCursor.style.right = -scrollOffset + '%';
});
// работа скрола



