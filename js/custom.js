
// preloder js start
document.body.onload = function () {
	setTimeout(function () {
		let preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 2500);
}
// preloder js end

// menu js part start
$(Window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling> 50){
    $(".navbar-light").addClass("bg-color")
  }else{
    $(".navbar-light").removeClass("bg-color")
  }
})

$(".scroll-icon i").click(function(){
  $("html,body").animate({
    scrollTop: 0,
  },1000)
})

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling>100){
    $(".scroll-icon i").fadeIn(500)
  }
  else{
    (scrolling>100)
      $(".scroll-icon i").fadeOut(500)
    }
})
// menu js part end

// banner type js start
document.addEventListener("DOMContentLoaded", function () {
  let letter = 0;
  const text = "We Are Awesome Creative Agency";
  function typeText() {
    if (letter < text.length) {
      document.getElementById("type-js").innerHTML += text.charAt(letter);
      letter++;
      let speed = Math.floor(Math.random() * 150) + 450;
      setTimeout(typeText, speed);
    }
  }
  typeText();
});
// banner type js end

// banner part slick js
$('.banner-slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });

  // story part venobox js
  new VenoBox({
    selector: '.story-video',
});

// work part mixit js
var mixer = mixitup('.work-mixit');

// people say part slick js
$('.people-slick').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
});

// scroll Aos js start
AOS.init({
  offset: 150,
  duration: 1500,
});

