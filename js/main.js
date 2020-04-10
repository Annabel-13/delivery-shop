const cartBtn = document.querySelector("#cart-btn");
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cartBtn.addEventListener('click', function (event) {
    modal.classList.add('is-open');
} );

close.addEventListener('click', function (event) {
    modal.classList.remove('is-open');
} );

new WOW().init();

