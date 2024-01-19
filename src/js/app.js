// swiper
var homeSwiper = new Swiper(".homeSwiper", {
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var fullSwiper = new Swiper(".fullSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 3500,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  loop: true,
  freeMode: true,
});

var productSwiper = new Swiper(".productSwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var productSwiper2 = new Swiper(".productSwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productSwiper,
  },
});
// end swiper
///////////////////////////////
// counter
// Змініть код, щоб використовувати класи замість ідентифікаторів
$('.decrement').click(function() {
  var $quantityElement = $(this).siblings('.quantity');
  var quantity = parseInt($quantityElement.text(), 10);

  if (quantity > 0) {
    quantity--;
    $quantityElement.text(quantity);
  }
});

$('.increment').click(function() {
  var $quantityElement = $(this).siblings('.quantity');
  var quantity = parseInt($quantityElement.text(), 10);

  quantity++;
  $quantityElement.text(quantity);
});

// end counter
///////////////////////////////
// Btn nav collapse
$('.header__collapse').on('click', function () {
  $('.header').toggleClass('open');
});

$('.header__search .search-toggle').on('click', function () {
  $('.header').toggleClass('open-search');
});
$('.search-back').click(function() {
  $('.header').removeClass('open-search');
});
// end Btn nav collapse
///////////////////////////////
// catalog-title
$('.catalog-title').on('click', function () {
  $('.header').toggleClass('open-catalog-list');
});

$(document).on('click scroll', function (e) {
  var $menu = $('.header__catalog');

  if (window.innerWidth >= 992 && (!$menu.is(e.target) && $menu.has(e.target).length === 0)) {
      $menu.removeClass('open');
  }
});

$('.header__catalog .catalog-title').on('click', function (e) {
  e.preventDefault();
  var $parent = $(this).parent('.header__catalog');

  $('.header__catalog.open').not($parent).removeClass('open');

  $parent.toggleClass('open');
});

// 
$(document).on('click scroll', function (e) {
  var $menu = $('.header__lang');

  if (window.innerWidth >= 992 && (!$menu.is(e.target) && $menu.has(e.target).length === 0)) {
      $menu.removeClass('open');
  }
});

$('.header__lang .lang-current').on('click', function (e) {
  e.preventDefault();
  var $parent = $(this).parent('.header__lang');

  $('.header__lang.open').not($parent).removeClass('open');

  $parent.toggleClass('open');
});
// end Btn nav collapse
///////////////////////////////
///////////////////////////////
// products views
$(document).ready(function() {
  $('.grid').click(function() {
      $(this).addClass('active');
      $('.list').removeClass('active');
      $('.products__list').removeClass('list-view').addClass('grid-view');
  });

  $('.list').click(function() {
      $(this).addClass('active');
      $('.grid').removeClass('active');
      $('.products__list').removeClass('grid-view').addClass('list-view');
  });
});
///////////////////////////
// On Scroll
$(window).on('scroll', function () {
  var wScroll = $(this).scrollTop();

  // Fixed header
  wScroll > 1 ? $('.header').addClass('fixed-header') : $('.header').removeClass('fixed-header');
});