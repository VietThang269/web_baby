var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  // effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper4,
  },
});

var offset = $(".header_menu").offset();
var sticky = document.getElementById("header_menu_fixed");

// $(window).scroll(function () {
//   if ($("body").scrollTop() > offset.top) {
//     $(".header_menu_fixed").addClass("fixed");
//   } else {
//     $(".header_menu_fixed").removeClass("fixed");
//   }
// });

$(window).scroll(function () {
  if ($(window).scrollTop() >= offset.top + 100) {
    $(".header_menu_fixed").addClass("fixed");
  } else {
    $(".header_menu_fixed").removeClass("fixed");
  }
});

$(".header_search").click(function (e) {
  e.preventDefault();
  $("#search").addClass("search_active");
});

$(".header_menu_bar").click(function () {
  $(".overlay").addClass("overlay_active");
  $("#menu_bar").addClass("menu_bar_active");
});

$(".menu_bar_close").click(function () {
  $("#menu_bar").removeClass("menu_bar_active");
  $(".overlay").removeClass("overlay_active");
});

function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  x = (offsetX / zoomer.offsetWidth) * 200;
  y = (offsetY / zoomer.offsetHeight) * 200;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}
