function downDescription() {
  let elem1 = document.querySelector('.about-slide-theyalow');
  let image1 = document.getElementById('image-theyalow');
  let elem2 = document.querySelector('.about-slide-repair');
  let image2 = document.getElementById('image-repair');
  let ulSwiper = document.getElementById('swipers');
  let collectionChildrenulSwiper = ulSwiper.children;

  if (collectionChildrenulSwiper[0].classList.contains("showings")) {
    if (elem1.hidden == true) {
      elem1.hidden = false;
      image1.style.opacity = '0.3';
    } else if (elem1.hidden == false) {
      elem1.hidden = true;
      image1.style.opacity = '1';
    };
  } else if (collectionChildrenulSwiper[1].classList.contains("showings")) {
    if (elem2.hidden == true) {
      elem2.hidden = false;
      image2.style.opacity = '0.3';
    } else if (elem2.hidden == false) {
      elem2.hidden = true;
      image2.style.opacity = '1';
    };
  };
}