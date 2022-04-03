let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};





/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});



/**
 *
 *  landing slider
 *
 */

const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const activeSlide = document.querySelector('.active');
  activeSlide.classList.remove('active');
  if(activeSlide.nextElementSibling){
    activeSlide.nextElementSibling.classList.add('active')
  }else{
    slides[0].classList.add('active');
  }
}

const prevSlide = () => {
  const activeSlide = document.querySelector('.active');
  activeSlide.classList.remove('active');
  if(activeSlide.previousElementSibling){
    activeSlide.previousElementSibling.classList.add('active')
  }else{
    slides[slides.length-1].classList.add('active');
  }
}

next.addEventListener('click', () => {
  nextSlide();
  if(auto){
    clearInterval(slideInterval);
    slideInterval=setInterval(nextSlide,intervalTime);
  }
});

prev.addEventListener('click', () => {
  prevSlide(); 
  if(auto){
    clearInterval(slideInterval);
    slideInterval=setInterval(nextSlide,intervalTime);
  }
});


if(auto){
  slideInterval=setInterval(nextSlide,intervalTime);
}