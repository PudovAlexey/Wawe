"use strict";

function scrollMenu() {
  var menu = document.querySelector('.header__menu');
  window.addEventListener('scroll', function () {
    if (pageYOffset >= document.documentElement.clientHeight) {
      menu.style['background-color'] = '#00B2A0';
      menu.style['height'] = '50px';
    } else {
      menu.style['background-color'] = 'transparent';
      menu.style['height'] = '104px';
    }
  });
}

scrollMenu();

function showMore() {
  var allPictures = document.querySelector('.galery__items').children;
  var btn = document.querySelector('.galery__items-link');
  var checkEvent = true;
  var counter = 3;
  var countbtn = 0;
  btn.addEventListener('click', function (event) {
    var _this = this;

    Array.from(allPictures).forEach(function (item, index) {
      if (checkEvent) {
        event.preventDefault();
      }

      if (index > 5 && index <= counter + 5) {
        item.classList.add('is-active');
        item.classList.add('mix');
        _this.style['background-color'] = '#00B2A0';
      } else if (countbtn >= 3) {
        checkEvent = false;
      }
    });
    counter += 3;
    countbtn++;
  });
}

showMore();
$(function () {
  $(".header__menu a, .go-top").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  $('.blog__slider').slick({
    dots: true,
    arrows: false
  });
  $('.menu-btn, .header__menu a').on('click', function () {
    $('.header__menu').toggleClass('open-menu');
    $('.menu-btn').toggleClass('menu-color');
  });
  var mixer = mixitup('.galery__items');
});