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

/**
 *
 *  navbar shrinker by scroll
 *
 */


 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar").style.width = "80%";
     document.getElementById("navbar").style.margin = "0 10%";
     document.getElementById("navbar").style.borderRadius = "20px";
     document.getElementById("navbar").style.transition = "0.6s";

    
   } else {
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.margin = "0";
    document.getElementById("navbar").style.borderRadius = "0";

   }
 }

  /**
 *
 *  parallax mouse
 *
 */

   document.addEventListener("mousemove", parallax);

   function parallax(e){
  
    document.querySelectorAll(".object").forEach(function(move){
  
      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value)/200;
      var y = (e.clientY * moving_value)/200;
  
      move.style.transform= "translateX(" + x + "px) translateY(" + y +"px)";
  
    });
   }
  