const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const body = document.querySelector('.aboutclass');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    body.classList.toggle('disable');
}

hamburger.addEventListener('click', handleClick);