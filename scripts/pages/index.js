$(function(){
  var swiper = new Swiper('.swiper-container', {
    // autoplay: {
    //   dalay:3000,
    //   disableOnInteraction: false,
    // },
    autoplay: 2000,
    loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // pagination: '.swiper-pagination',
  });  
 
  
  var imageObj = [
    {
        "src": "/images/seat.jpg",
        "url": "",
    },
    {
      "src": "/images/seat.jpg",
      "url": "",
  },

  {
    "src": "/images/seat.jpg",
    "url": "",
},

{
  "src": "/images/seat.jpg",
  "url": "",
},

{
  "src": "/images/seat.jpg",
  "url": "",
},


];
$('.accordion').accordion({
    "imageObj": imageObj,
    animateWidth: 742
});



})