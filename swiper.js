let swipers = document.querySelectorAll('#swipers .swiper');
let currentSlideMobile = 0;

function goToSlideMobile(n) {
    swipers[currentSlideMobile].className = 'swiper';
    currentSlideMobile = (n + swipers.length) % swipers.length;
    swipers[currentSlideMobile].className = 'swiper showings';
}

swipers.forEach(element => {
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);
    element.addEventListener('touchend', handleEnd, false);
});

let xDown = null;

function handleTouchStart(event) {
    xDown = event.touches[0].clientX;

};

let xUP = null;
let count = null; /*to track the response handleTouchMove*/

function handleTouchMove(event) {
    xUp = event.touches[0].clientX;
    event.preventDefault();
    count = true;
}

function handleEnd(evt) {

    if (!xDown || !xUp || !count) {
        return;
    }

    let xDiff = xDown - xUp;

    if (xDiff > 5) {
        goToSlideMobile(currentSlideMobile + 1);
    } else if (xDiff < -5) {
        goToSlideMobile(currentSlideMobile - 1);
    }
    xDown = null;
    xUP = null;
    count = null;
    event.preventDefault();
};