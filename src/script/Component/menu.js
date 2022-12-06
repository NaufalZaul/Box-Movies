import $ from 'jquery';

$('.menu-btn').on('click', () => {
  $('.menu p').toggle()
  $('nav ul').toggle()
})