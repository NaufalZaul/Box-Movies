import $ from 'jquery';

const elementSwipe = (image) => {
  $('.swiper-wrapper').append(` 
    <div class='swiper-slide'>
      <img src="${image}" alt="">
    </div> 
  `)
}

export default elementSwipe;