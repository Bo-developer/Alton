// Mobile navigation
const body = document.querySelector('body');
const navToggleBtn = document.querySelector('#tooggleNav');
const nav = document.querySelector('.nav');

function toggleMobileNav() {
  navToggleBtn.classList.toggle('mobile-nav-toggle--active');
  body.classList.toggle('fixed');
  nav.classList.toggle('nav--open');
}

navToggleBtn.addEventListener('click', toggleMobileNav);

// Tabs
$(".outsourcing__section").not(":first").hide();
$(".outsourcing__header .outsourcing__heading").click(function() {
  if($(this).hasClass('active')) {
    return;
  } else {
    $(".outsourcing__header .outsourcing__heading").removeClass("active").eq($(this).index()).addClass("active");
    $(".outsourcing__section").hide().eq($(this).index()).fadeIn();
  }
}).eq(0).addClass("active");

// FAQ accordion
$('.faq-toggle').on('click', function() {

  if($(this).hasClass('faq-toggle--active')) {
    $(this).removeClass('faq-toggle--active').find('.faq-toggle__label').text('Открыть');
    $(this).next().next('.faq__text').stop(true, true).animate({height:"toggle", opacity:"toggle"}, 300);
  } else {
    $(this).addClass('faq-toggle--active').find('.faq-toggle__label').text('Закрыть');
    $(this).next().next('.faq__text').stop(true, true).animate({height:"toggle", opacity:"toggle"}, 300);
  }

});

$('.faq__title').click(function() {

  $(this).prev('.faq-toggle').trigger('click');
});

// Sliders
function mainSlider(element, items) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: element.next('.slider-arrows').find('.slider-prev-btn'),
    nextArrow: element.next('.slider-arrows').find('.slider-next-btn'),
    appendDots: element.nextAll('.slider-dots'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ]
  };

  if(element.length) {
    const slider = $(element).slick(settings);

    $(window).on('resize', function() {
      if( $(window).width() < 768 &&  !slider.hasClass('slick-initialized')) {
        $(element).slick(settings);
      }
    });
  }
}

mainSlider($('.work-stages__list'), $('.work-stages__item'));
// mainSlider($('.cases__list'), $('.cases__item'));
// mainSlider($('.testimonials__list'), $('.testimonials__item'));

$('.testimonials__list').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  prevArrow: $('.testimonials__list').next('.testimonials__nav').find('.slider-prev-btn'),
  nextArrow: $('.testimonials__list').next('.testimonials__nav').find('.slider-next-btn'),
  appendDots: $('.testimonials__list').nextAll('.testimonials__nav').find('.slider-dots')
});

$('.cases__list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.cases__list').next('.slider-arrows').find('.slider-prev-btn'),
  nextArrow: $('.cases__list').next('.slider-arrows').find('.slider-next-btn'),
  appendDots: $('.cases__list').nextAll('.slider-dots'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});