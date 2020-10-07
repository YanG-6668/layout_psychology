'use strict';



$(document).ready(function () {


  $('.header__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  // $('.about__list-open').click(function () {
  //   $(this).toggleClass('in').next().slideToggle();
  //   $('.about__list-open').not(this).removeClass('in').next().slideUp();
  // });

});

function questionAndAnswer() {
  const questions = document.querySelectorAll('.about__list-wrapper');

  questions.forEach(question => {
    const btn = question.querySelector('.about__list-question');

    btn.addEventListener('click', (e) => {
      question.classList.toggle('show-answer');
    });
  });
}

questionAndAnswer();
